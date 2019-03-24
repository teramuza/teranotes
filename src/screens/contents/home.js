import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, FlatList, Image, TouchableWithoutFeedback, Dimensions, StatusBar, AsyncStorage } from 'react-native';
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
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const day = ["Sun", "Mon", "Tue", "Wed", "Thu","Fri","Sat"];

        const dateOut = {mon : `${month[d.getMonth()]}`, date :`${d.getDate()}`, year :`${d.getFullYear()}`, day : `${day[d.getDay()]}`}
        return dateOut
    }

    componentWillMount(){
        const date = this.stringDate()
        curDate = `${date.mon} ${date.date}, ${date.year}`
        this.setState({date : curDate})
    }

    tommorow(){
        const date = this.stringDate(new Date(2019,2,22))
        const outDate = `${date.mon} ${date.date}, ${date.year} - ${date.day}`
        return outDate
    }

    render() {
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
                    <View style={{ backgroundColor: 'transparent',  flexDirection: 'row', paddingLeft: 40, paddingVertical: 15}}>
                            <View>
                                <Image source={require('../../assets/img/user.png')} style={{width: 60, height: 60, borderRadius: 100, borderWidth: 2, borderColor: '#fff'}}/>
                            </View>
                            <View style={{paddingLeft: 20, paddingBottom: 15}}>
                                <Text style={{color: '#fff', fontSize: 30, fontWeight:'100'}}>Hi, name</Text>
                                <Text style={{color: '#fff', fontSize: 20, paddingTop: 3}}>{this.state.date}</Text>
                                <Text style={{color: '#fff1bf', fontSize: 12, paddingTop: 20}}>3 entries | 2 days</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{paddingVertical: 15, paddingHorizontal: 15, backgroundColor: '#fff'}}>
                        <Text style={{color: '#af9405', fontWeight: 'bold', fontSize: 18}}>{this.state.date} - {this.stringDate().day}</Text>
                        <View>
                            <List>
                                <ListItem noBorder thumbnail style={{flex: 1, flexDirection: 'row', borderBottomWidth: 0.5, paddingVertical: 15}} onPress={()=> this.props.navigation.navigate('detail')}>
                                    <View style={{flex: 1, paddingRight: 10}}>
                                        <Text style={{fontSize: 24, textAlign:'right', color: '#ad940d'}}>14</Text>
                                        <Text style={{fontSize: 16, textAlign:'right', color: '#bca940'}}>.51</Text>
                                    </View>
                                    <View style={{flex: 13}}>
                                        <Text style={{fontSize: 18, color: '#2b2b2b'}}>Title</Text>
                                        <Text style={{fontSize: 14, color: '#969696'}}>content here</Text>
                                    </View>
                                    
                                </ListItem>
                                <ListItem noBorder thumbnail style={{flex: 1, flexDirection: 'row', borderBottomWidth: 0.5, paddingVertical: 15}}>
                                    <View style={{flex: 1, paddingRight: 10}}>
                                        <Text style={{fontSize: 24, textAlign:'right', color: '#ad940d'}}>09</Text>
                                        <Text style={{fontSize: 16, textAlign:'right', color: '#bca940'}}>.43</Text>
                                    </View>
                                    <View style={{flex: 13}}>
                                        <Text style={{fontSize: 18, color: '#2b2b2b'}}>Title</Text>
                                        <Text style={{fontSize: 14, color: '#969696'}}>content here</Text>
                                    </View>
                                    
                                </ListItem>
                            </List>
                        </View>
                    </View>
                    <View style={{paddingVertical: 15, paddingHorizontal: 15, backgroundColor: '#fff'}}>
                        <Text style={{color: '#af9405', fontWeight: 'bold', fontSize: 18}}>{this.tommorow()}</Text>
                        <View>
                            <List>
                                <ListItem noBorder thumbnail style={{flex: 1, flexDirection: 'row', borderBottomWidth: 0.5, paddingVertical: 15}}>
                                    <View style={{flex: 1, paddingRight: 10}}>
                                        <Text style={{fontSize: 24, textAlign:'right', color: '#ad940d'}}>18</Text>
                                        <Text style={{fontSize: 16, textAlign:'right', color: '#bca940'}}>.17</Text>
                                    </View>
                                    <View style={{flex: 13}}>
                                        <Text style={{fontSize: 18, color: '#2b2b2b'}}>Title</Text>
                                        <Text style={{fontSize: 14, color: '#969696'}}>content here</Text>
                                    </View>
                                    
                                </ListItem>
                            </List>
                        </View>
                    </View>
                </Content>
                <Fab style={{backgroundColor: '#b29008'}} position="bottomRight" onPress={() => this.props.navigation.navigate('addNote')}>
                <Icon name='add'/>
                </Fab>
            </Container>
        )
    }

}
export default connect()(Home)
