import React, { Component } from 'react'
import { Alert, AsyncStorage, StatusBar, Image } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Thumbnail, View, Left, Right, Button, Icon, Text, Footer } from 'native-base'
import { connect } from 'react-redux'


class Splash extends Component {

	componentDidMount(){
		setTimeout(()=> this.props.navigation.navigate('contents'), 400)

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

export default connect()(Splash)