import React from 'react';
import { View, Text } from 'native-base';

const Numpad = ({pressed}) => (
	<View style={{flex : 1, flexDirection: 'column', paddingHorizontal: 50, paddingVertical: 30}}>
		<View style={{flex: 1, flexDirection: 'row' }}>
			<View onPress={() => pressed} style={{borderColor: '#fff', borderWidth: 1, borderRadius: 100, marginVertical: 10, marginHorizontal: 10, flex : 3,height : 90, width: 100, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{color: '#fff', fontSize: 30}}>1</Text>
			</View>
			<View onPress={() => pressed} style={{borderColor: '#fff', borderWidth: 1, borderRadius: 100, marginVertical: 10, marginHorizontal: 10, flex : 3,height : 90, width: 100, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{color: '#fff', fontSize: 30}}>2</Text>
			</View>
			<View onPress={() => pressed} style={{borderColor: '#fff', borderWidth: 1, borderRadius: 100, marginVertical: 10, marginHorizontal: 10, flex : 3,height : 90, width: 100, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{color: '#fff', fontSize: 30}}>3</Text>
			</View>
		</View>
		<View style={{flex: 1, flexDirection: 'row' }}>
			<View onPress={() => pressed} style={{borderColor: '#fff', borderWidth: 1, borderRadius: 100, marginVertical: 10, marginHorizontal: 10, flex : 3,height : 90, width: 100, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{color: '#fff', fontSize: 30}}>4</Text>
			</View>
			<View onPress={() => pressed} style={{borderColor: '#fff', borderWidth: 1, borderRadius: 100, marginVertical: 10, marginHorizontal: 10, flex : 3,height : 90, width: 100, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{color: '#fff', fontSize: 30}}>5</Text>
			</View>
			<View onPress={() => pressed} style={{borderColor: '#fff', borderWidth: 1, borderRadius: 100, marginVertical: 10, marginHorizontal: 10, flex : 3,height : 90, width: 100, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{color: '#fff', fontSize: 30}}>6</Text>
			</View>
		</View>
		<View style={{flex: 1, flexDirection: 'row' }}>
			<View onPress={() => pressed} style={{borderColor: '#fff', borderWidth: 1, borderRadius: 100, marginVertical: 10, marginHorizontal: 10, flex : 3,height : 90, width: 100, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{color: '#fff', fontSize: 30}}>7</Text>
			</View>
			<View onPress={() => pressed} style={{borderColor: '#fff', borderWidth: 1, borderRadius: 100, marginVertical: 10, marginHorizontal: 10, flex : 3,height : 90, width: 100, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{color: '#fff', fontSize: 30}}>8</Text>
			</View>
			<View onPress={() => pressed} style={{borderColor: '#fff', borderWidth: 1, borderRadius: 100, marginVertical: 10, marginHorizontal: 10, flex : 3,height : 90, width: 100, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{color: '#fff', fontSize: 30}}>9</Text>
			</View>
		</View>
		<View style={{flex: 1, flexDirection: 'row' }}>
			<View style={{marginVertical: 10, marginHorizontal: 10, flex : 3,height : 90, width: 100}}>
			</View>
			<View onPress={() => pressed} style={{borderColor: '#fff', borderWidth: 1, borderRadius: 100, marginVertical: 10, marginHorizontal: 10, flex : 3,height : 90, width: 100, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{color: '#fff', fontSize: 30}}>0</Text>
			</View>
			<View style={{marginVertical: 10, marginHorizontal: 10, flex : 3,height : 90, width: 100}}>
			</View>
		</View>
	</View>
)

export default Numpad;