import React, { Component } from 'react'
import { ScrollView, Platform, StyleSheet, FlatList, Image, TouchableWithoutFeedback, Dimensions, StatusBar, AsyncStorage, Alert, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Left, Body, Right, Card,View, CardItem, Text, Fab, Icon, Badge, Header,Button, Title, Item, Input, List, ListItem, Thumbnail, Footer, Textarea } from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker'
import ImagePicker from 'react-native-image-picker'

import HeadForm from '../../components/headForm'

class AddNote extends Component{
	static navigationOptions = ({ navigation }) => ({
    	header: null,
    })

    constructor(props) {
      	super(props)
    
      	this.state = {
      		date: undefined,
            isDateTimePickerVisible : false,
            dateObj : {},
            text : '',
            photo : null,
      	}
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

    componentWillMount(){
    	this.insertDateVal()
    }

    async insertDateVal(val = new Date()){
        const date = this.stringDate(val)
        dateOut = `${date.day}, ${date.mon} ${date.date}`
        await this.setState({date : dateOut, dateObj : date})
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

    _handleDateTimePicked = (date) => {
      this.insertDateVal(date)
      this._hideDateTimePicker()
    }

    handleChoosePhoto = () => {
        const options = {
          noData: true,
        }
        ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            this.setState({ photo: response })
          }
        })
    }

    render() {
    	return (
    		<Container>
                <StatusBar hidden={false} barStyle="default" style={{backgroundColor: '#fff'}}/>
                <HeadForm onCancel={()=> this.props.navigation.goBack()} titleHead={this.state.date} onPressHead={()=> this._showDateTimePicker()} onConfirm={()=> console.warn(this.state.text)}/>

        		<Content style={{backgroundColor: '#fff', paddingHorizontal: 15, paddingVertical: 10}}>
        		<View style={{flexDirection: 'row', flex: 1, paddingLeft: 10}}>
        			<View style={{flex: 1, paddingRight: 10, flex: 1, flexDirection: 'row'}}>
                        <Text style={{fontSize: 30, textAlign:'right', color: '#ad940d'}} onPress={()=> this._showDateTimePicker()}>{this.state.dateObj.hour}</Text>
                        <Text style={{fontSize: 20, textAlign:'right', color: '#bca940', paddingTop: 4}} onPress={()=> this._showDateTimePicker()}>.{this.state.dateObj.min}</Text>
                    </View>
        			
        			<View style={{flex: 4, flexDirection: 'row-reverse', paddingTop: 5}}>
	        			<Input 
                          placeholder="type in any location..." 
                          placeholderTextColor="#876c00" 
                          style={{ paddingLeft: 10, color: '#876c00', fontSize: 16, maxHeight: 30, maxWidth: '55%', padding: 1}}
                        />
	        			<Icon name='pin' style={{fontSize: 13, color: '#876c00', paddingLeft: 7, paddingTop: 8}}/>
        			</View>
        		</View>
                
                {this.imageContent()}
        		
                <View style={{paddingTop: 10, paddingLeft: 7}}>
                    <Textarea rowSpan={15} placeholder="type anything here..." onChangeText={(text)=> this.setState({text})}/>

        		</View>
                <DateTimePicker
                    date={this.state.dateObj.fullDate}
                    mode='datetime'
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDateTimePicked}
                    onCancel={this._hideDateTimePicker}
                />

        		</Content>
        		
    		</Container>
    	)
    }
    imageContent(){
        if(this.state.photo != null){
            return(
                <View style={{paddingVertical: 10, maxHeight: 300, marginVertical: 20, alignItems: 'center'}}>
                <Image 
                    source={{uri : this.state.photo.uri}} 
                    style={{width: '100%', height: '100%'}}/>
                <Icon 
                    name="close" 
                    type="MaterialIcons" 
                    onPress={()=>this.setState({photo : null})}
                    style={{position: 'absolute', color: '#fff', alignSelf: 'flex-end', backgroundColor: '#ad940d', borderRadius: 50, padding: 3, fontSize: 20}}/>
                <Text onPress={()=>this.handleChoosePhoto()} style={{fontSize: 20, color: '#ad940d', paddingTop: 5}}>Change Picture</Text>
                </View>
            )
        }else{
            return(
                <TouchableWithoutFeedback onPress={()=>this.handleChoosePhoto()} >
                <View style={{paddingVertical: 15, maxHeight: 150,marginVertical: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e2e2e2'}}>
                <Icon type="MaterialIcons" name="add-a-photo"/>
                </View>
                </TouchableWithoutFeedback>
            )
        }
    }
}
export default connect()(AddNote)
