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
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const day = ["Sun", "Mon", "Tue", "Wed", "Thu","Fri","Sat"];

        const dateOut = {mon : `${month[d.getMonth()]}`, date :`${d.getDate()}`, year :`${d.getFullYear()}`, day : `${day[d.getDay()]}`}
        return dateOut
    }

    componentWillMount(){
    	const date = this.stringDate()
    	dateOut = `${date.day}, ${date.mon} ${date.date}`
    	this.setState({date : dateOut})
    }

    render() {
    	return (
    		<Container>
    			<StatusBar hidden={false} barStyle="default" style={{backgroundColor: '#fff'}}/>

    			<Header style={{backgroundColor: '#F5F5F5', marginTop: 22}} androidStatusBarColor='#fff' iosBarStyle="default">        
    				<View style={{ flexDirection: 'row', flex : 1}}>
    					<View style={{flex : 1,paddingTop: 14}}>
    						<Icon name="chevron-left" type="MaterialIcons" style={{color: '#303030', paddingLeft: 3}} onPress={()=> this.props.navigation.goBack()}/>
    					</View>

    					<View style={{flex : 6, paddingTop: 17, alignItems: 'center'}}>
    						<Text>{this.state.date}</Text>
    					</View>

    					<View style={{flex : 1, paddingTop: 18}}>
    					<Icon name='create' style={{color: '#303030', fontSize: 20, paddingLeft: 10}} />
    					</View>
    				</View>
    			</Header>

        		<Content style={{backgroundColor: '#fff', paddingHorizontal: 15, paddingVertical: 10}}>
        		<View style={{flexDirection: 'row', flex: 1, paddingLeft: 10}}>
        			<Text style={{fontSize: 28, color: '#876c00', flex: 1}}>09.03</Text>
        			
        			<View style={{paddingTop: 5, paddingLeft: 20, flex: 4, flexDirection: 'row-reverse'}}>
	        			<Text style={{fontSize: 18, color: '#876c00', paddingLeft: 7}}>Kl, Malaysia</Text>
	        			<Icon name='pin' style={{fontSize: 15, color: '#876c00', paddingLeft: 7, paddingTop: 5}}/>
        			</View>
        		</View>

        		<View style={{paddingTop: 30, paddingLeft: 10}}>
        			<Text style={{color: '#565656'}}>Lorem Ipsum</Text>
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
export default connect()(Detail)
