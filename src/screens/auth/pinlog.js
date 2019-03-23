import React, { Component } from 'react';
import { Alert, AsyncStorage, StatusBar, Image, BackHandler } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Thumbnail, View, Left, Right, Button, Icon, Text } from 'native-base';
import { connect } from 'react-redux';

import HeadIcon from '../../components/headIcon'
import Numpad from '../../components/numpad'

// import { login } from '../../publics/redux/actions/auth'

class Pinlog extends Component {

	static navigationOptions = ({ navigation }) => ({
		header: null,
	})

	constructor(props) {
		super(props);
		
		this.state = {
			pinInput : [],
			nextScreen : 'home',
			where : 'login',
		};
	}

	render() {
		return (
			<Container>
			<StatusBar backgroundColor="#282828" hidden={false}/>
				<Content style={{backgroundColor: '#282828'}}>
					<HeadIcon/>
					
					<Numpad/>

					<View style={{paddingHorizontal: 20}}>
						<View style={{paddingTop: 25, flexDirection: 'row' }}>
							<Left>
								<Text style={{color: '#4DB6AC', fontSize: 13}} onPress={()=> this.props.navigation.navigate('register')}>Email Login</Text>
							</Left>

							<Right>
							</Right>
						</View>
						
			        </View>
				</Content>
			</Container>
		);
	}

	buttonInput() {
		if(this.state.emailInput === '' || this.state.passwordInput === ''){
			return(	
				<Button disabled style={{borderRadius: 25, backgroundColor: '#609691'}} block>
					<Text style={{color: '#444'}}>Masuk</Text>
				</Button>
			)
		}else{
			return(
				<Button style={{borderRadius: 25, backgroundColor: '#26A69A'}} block onPress={() => this.handleLogin()}>
					<Text style={{color: '#282828'}}>Masuk</Text>
				</Button>
			)
		}
	}


	// async handleLogin(){
	// 	await this.props.dispatch(login({
	// 		email : this.state.emailInput,
	// 		password : this.state.passwordInput
	// 	}));
	// 	const loginInfo = this.props.auth.data
	// 	if(loginInfo.token){
	// 		await AsyncStorage.setItem('token', loginInfo.token)
	// 		await AsyncStorage.setItem('userId', String(loginInfo.id))
	// 		await AsyncStorage.setItem('email', loginInfo.email)
	// 		await AsyncStorage.setItem('refToken', loginInfo.refToken)


	// 		await this.props.dispatch(getSongs(loginInfo.token))
	// 		await this.props.dispatch(getLists())
	// 		this.props.navigation.navigate(this.state.nextScreen)
	// 	}
	// 	else if(loginInfo.message){
	// 		Alert.alert("Ups", loginInfo.message)
	// 	}
	// 	else{
	// 		Alert.alert("Error", "Terjadi suatu kesalahan, harap coba lagi nanti.")
	// 	}
	// }
	
}


const mapStateToProps = (state) => {
	return {
		// auth: state.auth
	}
}

export default connect()(Pinlog)