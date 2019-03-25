import React, { Component } from 'react'
import { Alert, StatusBar, Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Header, Content, Form, Item, Input, Label, Thumbnail, View, Left, Right, Button, Icon, Text, Footer } from 'native-base'
import { connect } from 'react-redux'

import { getNotes } from '../redux/actions/notes'
import { setGlobal } from '../redux/actions/auth'

class Splash extends Component {

	componentDidMount(){
		this.getNotes()
	}

	async getNotes(){
		try {
			const token = await AsyncStorage.getItem('token')
			const id = Number(await AsyncStorage.getItem('userId'))
			const first_name = await AsyncStorage.getItem('userFirstName')
			const last_name = await AsyncStorage.getItem('userLastName')

			const image_url = await AsyncStorage.getItem('userAvatar')
			const email = await AsyncStorage.getItem('userEmail')
			const refToken = await AsyncStorage.getItem('refToken')

			await this.props.dispatch(getNotes(token, id))

			const user = {id, first_name, last_name, email, image_url, token, refToken}
			await this.props.dispatch(setGlobal(user))

			setTimeout(()=> this.props.navigation.navigate('contents'), 200)
		}catch(e){
			this.props.navigation.navigate('auth')
		}


	}

	render() {
		return (
			<Container>
			<StatusBar  backgroundColor='#eee' barStyle='dark-content'/>
				<Content style={{backgroundColor: '#eee'}}>
					<View style={{alignItems: 'center', alignContent: 'center', paddingTop: 260, flexDirection: 'column' }}>
						<Image style={{borderRadius: 60, height: 120, width: 120}} source={require('../assets/img/logo.png')}/>
						<Text style={{color: '#999', paddingTop: 20, fontFamily: '', fontSize: 30 }}>t e r a n o t e s</Text>
					</View>
				</Content>
				<Footer style={{backgroundColor: '#eee'}}>
					<Text style={{color: '#969696', fontSize: 12}}>Copyright {'\u00A9'} 2019  by teramuza.xyz </Text>
				</Footer>
			</Container>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		notes: state.notes
	}
}

export default connect(mapStateToProps)(Splash)