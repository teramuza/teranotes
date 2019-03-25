import React, { Component } from 'react';
import { Alert, StatusBar, Image, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Header, Content, Form, Item, Input, Label, Thumbnail, View, Left, Right, Button, Icon, Text } from 'native-base';
import { connect } from 'react-redux';

import HeadIcon from '../../components/headIcon'
import { login } from '../../redux/actions/auth'
import { getNotes } from '../../redux/actions/notes'

class Login extends Component {

	static navigationOptions = ({ navigation }) => ({
		header: null,
	})

	constructor(props) {
		super(props);
		
		this.state = {
			emailInput : '',
			passwordInput : '',
			nextScreen : 'home',
			where : 'login',
		};
	}

	render() {
		return (
			<Container>
			<StatusBar backgroundColor="transparent" hidden={false} barstyle="dark-content"/>
				<Content style={{backgroundColor: '#fff'}}>
					<HeadIcon/>
					<Form>
						<Item stackedLabel>
							<Label style={{color: '#2b2b2b'}}>Email</Label>
							<Input 
								onChangeText={(emailInput) => this.setState({emailInput})} 
								placeholderTextColor="#969696"   
								placeholder="enter your email" 
								style={{fontSize: 13, color: '#2b2b2b'}}
								autoCapitalize = 'none'
								keyboardType="email-address"
							/>
						</Item>

						<Item stackedLabel>
							<Label style={{color: '#2b2b2b'}}>Password</Label>
							<Input 
								onChangeText={(passwordInput) => this.setState({passwordInput})} 
								placeholderTextColor="#969696" 
								style={{color: '#2b2b2b'}}
								secureTextEntry={true} 
								placeholder="････････"
							/>
						</Item>
					</Form>

					<View style={{paddingHorizontal: 20, paddingTop: 30}}>
						{this.buttonInput()}
						<View style={{paddingTop: 25, flexDirection: 'row' }}>
							<Left>
								<Text style={{color: '#4DB6AC', fontSize: 13}} onPress={()=> this.props.navigation.navigate('register')}>Don't have an account?</Text>
							</Left>

							<Right>
								<Text onPress={() => this.props.navigation.navigate('pinlog')}  style={{color: '#4DB6AC', fontSize: 13}}>Pin Lock</Text>
							</Right>
						</View>
						<View style={{marginTop: 30 ,paddingTop : 40, paddingHorizontal: 20, height: 50}}>
							<View style={{borderBottomWidth: 1, borderBottomColor: '#707070'}}/>
							<Text style={{position: 'absolute', zIndex: 1, top: 28, left: '43%', backgroundColor: '#fff', color: '#969696', paddingHorizontal: 8, fontSize: 15 }}>Login with</Text>
						</View>
						<View style={{flexDirection: 'row', paddingTop: 30, paddingHorizontal: 30, flex: 1}} >
							<View style={{flex : 3, paddingHorizontal: 30}}>
								<Thumbnail style={{width: 40, height: 40}} avatar source={require('../../assets/img/fb.png')}/>
							</View>
							<View style={{flex : 3, paddingHorizontal: 30}}>
								<Thumbnail style={{width: 40, height: 40}}  avatar source={require('../../assets/img/google.png')}/>
							</View>
							<View style={{flex : 3, paddingHorizontal: 30}}>
								<Thumbnail style={{width: 40, height: 40}}  avatar source={require('../../assets/img/line.png')}/>
							</View>

						</View>
			        </View>
				</Content>
			</Container>
		);
	}

	buttonInput() {
		if(this.state.emailInput === '' || this.state.passwordInput === ''){
			return(	
				<Button disabled style={{borderRadius: 25, backgroundColor: '#e5d47b'}} block>
					<Text style={{color: '#444'}}>Login</Text>
				</Button>
			)
		}else{
			return(
				<Button style={{borderRadius: 25, backgroundColor: '#efca09'}} block onPress={() => this.handleLogin()}>
					<Text style={{color: '#282828'}}>Login</Text>
				</Button>
			)
		}
	}


	async handleLogin(){
		await this.props.dispatch(login({
			email : this.state.emailInput,
			password : this.state.passwordInput
		}));
		const loginInfo = this.props.auth.data
		if(loginInfo.token){

			const user = loginInfo.user
			try{
			await AsyncStorage.setItem('token', String(loginInfo.token))
			await AsyncStorage.setItem('userId', String(user.id))
			await AsyncStorage.setItem('userFirstName', user.first_name)
			await AsyncStorage.setItem('userLastName', String(user.last_lame))
			await AsyncStorage.setItem('userAvatar', String(user.image_url))
			await AsyncStorage.setItem('userEmail', String(user.email))
			await AsyncStorage.setItem('refToken', String(loginInfo.refToken))

			await this.props.dispatch(getNotes(loginInfo.token, user.id))

			this.props.navigation.navigate('contents')
			}catch(e){
				console.warn(e);
			}

		}
		else if(loginInfo.message){
			Alert.alert("Ups", loginInfo.message)
		}
		else{
			Alert.alert("Error", "An error occurred, please try again later.")
		}
	}
	
}


const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(Login)