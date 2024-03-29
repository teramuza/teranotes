import React, { Component } from 'react';
import { Alert, StatusBar, Image,BackHandler } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Header, Content, Form, Item, Input, Label, Thumbnail,View, Left, Right, Button,Icon, Text } from 'native-base';
import { connect } from 'react-redux';

import HeadIcon from '../../components/headIcon'
import { register } from '../../redux/actions/auth'

class Register extends Component {

	static navigationOptions = ({ navigation }) => ({
		header: null,
	})

	constructor(props) {
		super(props);
		
		this.state = {
			email : '',
			first_name : '',
			phone : '',
			password : '',
			passwordConf : '',
			nextScreen : 'Login',
		};
	}

	render() {
		return (
			<Container>
			<StatusBar backgroundColor="#eee"/>
				<Content style={{backgroundColor: '#eee'}}>
					<HeadIcon/>
					<Form>
						<Item stackedLabel>
							<Label style={{color: '#2b2b2b'}}>First Name</Label>
							<Input 
							onChangeText={(first_name) => this.setState({first_name})} 
							placeholder="enter your first name" 
							style={{fontSize: 13, color: '#2b2b2b'}}
							placeholderTextColor="#969696" 
							autoCapitalize = 'words' 
							/>
						</Item>
						<Item stackedLabel>
							<Label style={{color: '#2b2b2b'}}>Last Name</Label>
							<Input 
							onChangeText={(last_name) => this.setState({last_name})} 
							placeholder="enter your last name" 
							style={{fontSize: 13, color: '#2b2b2b'}} 
							placeholderTextColor="#969696" 
							autoCapitalize = 'words' 
							/>
						</Item>

						<Item stackedLabel>
							<Label style={{color: '#2b2b2b'}}>Email</Label>
							<Input 
							onChangeText={(email) => this.setState({email})} 
							placeholder="enter your email" 
							style={{fontSize: 13, color: '#2b2b2b'}} 
							placeholderTextColor="#969696" 
							autoCapitalize = 'none'
							keyboardType="email-address"/>
						</Item>


						<Item stackedLabel>
							<Label style={{color: '#2b2b2b'}}>Password</Label>
							<Input 
							onChangeText={(password) => this.setState({password})} 
							secureTextEntry={true} 
							style={{fontSize: 13, color: '#2b2b2b'}} 
							placeholder="enter yout password" 
							placeholderTextColor="#969696"/>
						</Item>

						<Item stackedLabel>
							<Label style={{color: '#2b2b2b'}}>Confirm Password</Label>
							<Input 
							onChangeText={(passwordConf) => this.setState({passwordConf})} 
							secureTextEntry={true} 
							style={{fontSize: 13, color: '#2b2b2b'}} 
							placeholder="retype your password" 
							placeholderTextColor="#969696"/>
						</Item>
					</Form>

					<View style={{paddingHorizontal: 20, paddingTop: 30}}>
						{this.buttonInput()}
						<View style={{paddingTop: 25, flexDirection: 'row' }}>
							<Left>
								<Text style={{color: '#4DB6AC', fontSize: 13}}>Register with Phone Number</Text>
							</Left>

							<Right>
								<Text style={{color: '#4DB6AC', fontSize: 13}} onPress={()=>this.props.navigation.navigate('login')}>Already have an account?</Text>
							</Right>
						</View>
						<View style={{marginTop: 30 ,paddingTop : 40, paddingHorizontal: 20, height: 50}}>
							<View style={{borderBottomWidth: 1, borderBottomColor: '#707070'}}/>
							<Text style={{position: 'absolute', zIndex: 1, top: 28, left: '40%', backgroundColor: '#eee', color: '#969696', paddingHorizontal: 8, fontSize: 15 }}>Register with</Text>
						</View>
						<View style={{flexDirection: 'row', paddingTop: 30, paddingHorizontal: 30, flex: 1, paddingBottom: 50}} >
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
					<Text style={{color: '#444'}}>Daftar</Text>
				</Button>
			)
		}else{
			return(
				<Button style={{borderRadius: 25, backgroundColor: '#efca09'}} block onPress={() => this.handleRegist()}>
					<Text style={{color: '#282828'}}>Daftar</Text>
				</Button>
			)
		}
	}

	async handleRegist(){
		if(this.state.password === this.state.passwordConf){
			try{
				await this.props.dispatch(register({
					email : this.state.email,
					password : this.state.password,
					first_name : this.state.first_name,
					last_name : this.state.last_name,
				}));
				const loginInfo = this.props.auth.data
				if(loginInfo.token){
					console.warn('if berjalan');
					await AsyncStorage.setItem('user', String(loginInfo.user));
					await AsyncStorage.setItem('token', loginInfo.token);
					await AsyncStorage.setItem('refreshToken', loginInfo.refreshToken);
					console.warn('berhasil asynctorage');
					this.props.navigation.navigate('Home')
				}
				else if(loginInfo.status === 'already'){
					Alert.alert("Ups", loginInfo.message)
				}
				else if(loginInfo.status === 'error'){
					Alert.alert("Ups", loginInfo.message)
				}
				else{
					Alert.alert("Error", "An error occurred, please try again later.")
				}
			}catch(e){
				console.warn(e.response);
			}
		}else{
			Alert.alert("Wrong Password", "You entered the Confirm Password incorrectly")
		}
		
	}
	
}


const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(Register)