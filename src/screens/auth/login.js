import React, { Component } from 'react';
import { Alert, AsyncStorage, StatusBar, Image, BackHandler } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Thumbnail, View, Left, Right, Button, Icon, Text } from 'native-base';
import { connect } from 'react-redux';

import HeadIcon from '../../components/headIcon'
// import { login } from '../../publics/redux/actions/auth'

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
			<StatusBar backgroundColor="#eee" hidden={false}/>
				<Content style={{backgroundColor: '#eee'}}>
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
							<Text style={{position: 'absolute', zIndex: 1, top: 28, left: '43%', backgroundColor: '#eee', color: '#969696', paddingHorizontal: 8, fontSize: 15 }}>Login with</Text>
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
					<Text style={{color: '#444'}}>Masuk</Text>
				</Button>
			)
		}else{
			return(
				<Button style={{borderRadius: 25, backgroundColor: '#efca09'}} block onPress={() => this.handleLogin()}>
					<Text style={{color: '#282828'}}>Masuk</Text>
				</Button>
			)
		}
	}


	async handleLogin(){
		// await this.props.dispatch(login({
		// 	email : this.state.emailInput,
		// 	password : this.state.passwordInput
		// }));
		// const loginInfo = this.props.auth.data
		// if(loginInfo.token){
		// 	await AsyncStorage.setItem('token', loginInfo.token)
		// 	await AsyncStorage.setItem('userId', String(loginInfo.id))
		// 	await AsyncStorage.setItem('email', loginInfo.email)
		// 	await AsyncStorage.setItem('refToken', loginInfo.refToken)


		// 	await this.props.dispatch(getSongs(loginInfo.token))
		// 	await this.props.dispatch(getLists())
		// 	this.props.navigation.navigate(this.state.nextScreen)
		// }
		// else if(loginInfo.message){
		// 	Alert.alert("Ups", loginInfo.message)
		// }
		// else{
		// 	Alert.alert("Error", "Terjadi suatu kesalahan, harap coba lagi nanti.")
		// }
		this.props.navigation.navigate('home')
	}
	
}


const mapStateToProps = (state) => {
	return {
		// auth: state.auth
	}
}

export default connect()(Login)