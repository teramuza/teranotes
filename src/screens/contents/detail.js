import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, FlatList, Image, TouchableWithoutFeedback, Dimensions, StatusBar, AsyncStorage, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Left, Body, Right, Card,View, CardItem, Text, Fab, Icon, Badge, Header,Button, Title, Item, Input, List, ListItem, Thumbnail, Footer } from 'native-base';

class Detail extends Component{
	static navigationOptions = ({ navigation }) => ({
    	header: null,
    })

    constructor(props) {
      	super(props);
    
      	this.state = {
      		date: undefined,
      		active : false,
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


    render() {
        const diary = this.props.navigation.state.params.pushData
        const datetime = this.getStringDateTime(new Date(diary.datetime))
    	return (
    		<Container>
    			<StatusBar hidden={false} barStyle="default" style={{backgroundColor: '#fff'}}/>

    			<Header style={{backgroundColor: '#F5F5F5', marginTop: 22}} androidStatusBarColor='#fff' iosBarStyle="default">        
    				<View style={{ flexDirection: 'row', flex : 1}}>
    					<View style={{flex : 1,paddingTop: 14}}>
    						<Icon name="chevron-left" type="MaterialIcons" style={{color: '#303030', paddingLeft: 3}} onPress={()=> this.props.navigation.goBack()}/>
    					</View>

    					<View style={{flex : 6, paddingTop: 17, alignItems: 'center'}}>
    						<Text>{datetime.stringDate}</Text>
    					</View>

    					<View style={{flex : 1, paddingTop: 18}}>
    					<Icon name='create' style={{color: '#303030', fontSize: 20, paddingLeft: 10}} onPress={()=> this.props.navigation.navigate('editNote', {pushData : diary})}/>
    					</View>
    				</View>
    			</Header>

        		<Content style={{backgroundColor: '#fff', paddingHorizontal: 15, paddingVertical: 10}}>
        		<View style={{flexDirection: 'row', flex: 1, paddingLeft: 10}}>
        			<View style={{flex: 1, paddingRight: 10, flex: 1, flexDirection: 'row'}}>
                        <Text style={{fontSize: 30, textAlign:'right', color: '#ad940d'}}>{datetime.hour}</Text>
                        <Text style={{fontSize: 20, textAlign:'right', color: '#bca940', paddingTop: 4}}>.{datetime.min}</Text>
                    </View>
        			
        			<View style={{paddingTop: 5, flex: 4, flexDirection: 'row-reverse', paddingTop: 10}}>
	        			<Text style={{fontSize: 16, color: '#876c00', paddingLeft: 7}}>{diary.location}</Text>
	        			<Icon name='pin' style={{fontSize: 13, color: '#876c00', paddingLeft: 7, paddingTop: 3}}/>
        			</View>
        		</View>
        		<View style={{paddingTop: 30, maxHeight: 200}}>
        			<Image source={{uri : 'https://cdn.idntimes.com/content-images/community/2018/11/img-20181114-115312-72da199896b98b5745e097ed1d92da99_600x400.png'}} style={{width: '100%', height: '100%'}}/>
        		</View>
        		<View style={{paddingTop: 10, paddingLeft: 10}}>
        			<Text style={{color: '#565656'}}>{diary.contents}</Text>

        		</View>
        		</Content>
        		<Fab
		            active={this.state.active}
		            direction="up"
		            containerStyle={{ }}
		            style={{ backgroundColor: '#b29008' }}
		            position="bottomRight"
		            onPress={() => this.setState({ active: !this.state.active })}>
		            <Icon name="share" />
		            <Button style={{ backgroundColor: '#34A34F' }}>
		              <Icon name="logo-whatsapp" />
		            </Button>
		            <Button style={{ backgroundColor: '#3B5998' }}>
		              <Icon name="logo-facebook" />
		            </Button>
		            <Button disabled style={{ backgroundColor: '#DD5144' }}>
		              <Icon name="mail" />
		            </Button>
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

export default connect(mapStateToProps)(Detail)
