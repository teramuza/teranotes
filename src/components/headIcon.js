import React from 'react';
import { Image } from 'react-native';
import { View, Text } from 'native-base';

const HeadIcon = () => (
	<View style={{alignItems: 'center', alignContent: 'center', paddingVertical: 30 }}>
		<Image style={{borderRadius: 50, height: 80, width: 80}} source={require('../assets/img/logo.png')} />
		<Text style={{color: '#999', paddingTop: 7, fontSize: 18 }}>t e r a n o t e s</Text>
	</View>
)

export default HeadIcon