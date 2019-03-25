import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, FlatList, Image, TouchableWithoutFeedback, Dimensions, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { Container, Content, Left, Body, Right, Card,View, CardItem, Text, Fab, Icon, Badge, Header,Button, Title, Item, Input, List, ListItem, Thumbnail } from 'native-base';

class Home extends Component{
    static navigationOptions = ({ navigation }) => ({
        header: null,
    })

    constructor(props) {
        super(props);
    
        this.state = {
            date : undefined,
        };
    }

    stringDate(d = new Date()) {
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const day = ["Sun", "Mon", "Tue", "Wed", "Thu","Fri","Sat"]
        const hours = `${d.getHours()}`
        const minutes = `${d.getMinutes()}`
        let h = '00'
        let m = '00'

        if(hours.length < 2){ h = `0${hours}`}
        else{ h = `${hours}`}

        if(minutes.length < 2) { m = `0${minutes}`}
        else{ m = `${minutes}`}
        const dateOut = {
            mon : `${month[d.getMonth()]}`, 
            date :`${d.getDate()}`, 
            year :`${d.getFullYear()}`, 
            day : `${day[d.getDay()]}`, 
            hour : h, 
            min : m,
            fullDate : d
        }
        return dateOut
    }

    getStringDateTime(d){
        const date = this.stringDate(d)
        let stringDate = ''
        if(d === new Date()){
            stringDate = 'Today'
        }else{
            stringDate = `${date.mon} ${date.date}, ${date.year} - ${date.day}`
        }
        const output = {hour : date.hour, min : date.hour, stringDate}
        return output
    }

    componentWillMount(){
        this.today()
    }
    today(){
        const date = this.stringDate()
        curDate = `${date.mon} ${date.date}, ${date.year}`
        this.setState({date : curDate})

    }

    strTrunc = (str, length, ending) => {
        if (length == null) {
          length = 100;
        }
        if (ending == null) {
          ending = '...';
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending;
        } else {
          return str;
        }
    };


    renderItem = ({item,index}) => {
        const datetime = this.getStringDateTime(new Date(item.datetime))
        return(
        <View style={{paddingVertical: 7, paddingHorizontal: 7, backgroundColor: '#fff'}}>
            <List>
                <ListItem noBorder thumbnail style={{flex: 1, flexDirection: 'row', borderBottomWidth: 0.5, paddingVertical: 15}} onPress={()=> this.props.navigation.navigate('detail', {pushData : item})}>
                    <View style={{flex: 1, paddingRight: 10}}>
                        <Text style={{fontSize: 24, textAlign:'right', color: '#ad940d'}}>{datetime.hour}</Text>
                        <Text style={{fontSize: 16, textAlign:'right', color: '#bca940'}}>.{datetime.min}</Text>
                    </View>
                    <View style={{flex: 13, borderLeftWidth: 0.4, paddingLeft: 10, borderLeftColor: '#ddd'}}>
                        <Text style={{color: '#af9405', fontWeight: 'bold', fontSize: 18}}>{datetime.stringDate}</Text>
                        <Text style={{fontSize: 14, color: '#969696', paddingTop: 5}}>{this.strTrunc(item.contents, 42)}</Text>
                    </View>
                    
                </ListItem>
            </List>
        </View>
        )
    }

    _keyExtractor = (item, index) => index.toString();

    render() {
        const user = this.props.auth
        const diary = this.props.notes
        return (
            <Container>
                <StatusBar translucent={true} hidden={false} backgroundColor='transparent' barStyle="default" animated={true}/>
                
                <Content>
                    <View style={{flexDirection: 'column', paddingTop: 22}}>
                        <Image source={require('../../assets/img/bg2.jpg')} style={{width: '130%', height: '120%', position: 'absolute'}}/>

                        <Header searchBar rounded style={{backgroundColor: 'rgba(52, 52, 52, 0.4)', }} androidStatusBarColor='transparent' iosBarStyle="dark-content">
                            <Icon name="search" style={{color: '#fff3c1', marginTop: 14, marginLeft: 12}}/>
                            <Input 
                              placeholder="find notes" 
                              placeholderTextColor="#fff3c1" 
                              style={{marginTop: 2, paddingLeft: 10, color: '#fcf3cf'}}
                            />
                        </Header>
                        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('setting')}>
                        <View style={{ backgroundColor: 'transparent',  flexDirection: 'row', paddingLeft: 40, paddingVertical: 15, paddingBottom: 10}}>
                            <View>
                                <Image source={require('../../assets/img/user.png')} style={{width: 60, height: 60, borderRadius: 100, borderWidth: 2, borderColor: '#fff'}}/>
                            </View>
                            <View style={{paddingLeft: 20, paddingBottom: 15}}>
                                <Text style={{color: '#fff', fontSize: 28, fontWeight:'100'}}>Hi, {user.data.first_name}</Text>
                                <Text style={{color: '#fff', fontSize: 20, paddingTop: 3}}>{this.state.date}</Text>
                                <Text style={{color: '#fff1bf', fontSize: 12, paddingTop: 20}}>{diary.data.length} entries </Text>
                            </View>
                        </View>
                        </TouchableWithoutFeedback>
                    </View>
                    
                    <FlatList
                        data={diary.data}
                        keyExtractor={this._keyExtractor}
                        renderItem={this.renderItem}
                    />
                    
                </Content>
                <Fab style={{backgroundColor: '#b29008'}} position="bottomRight" onPress={() => this.props.navigation.navigate('addNote')}>
                <Icon name='add'/>
                </Fab>
            </Container>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Home)
