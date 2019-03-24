import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator,createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'native-base';
import { Provider } from 'react-redux';

import store from './src/redux/store';

//splash
import Splash from './src/screens/splash'

//;auth
import Login from './src/screens/auth/login'
import Register from './src/screens/auth/register'
import Pinlog from './src/screens/auth/pinlog'

//;contents
import Home from './src/screens/contents/home'
import Detail from './src/screens/contents/detail'
import AddNote from './src/screens/contents/addNote'
//;

const AppAuth = createStackNavigator({
    //authscreens here
    login : {
        screen : Login,
    },
    register : {
        screen : Register,
    },
    pinlog : {
        screen : Pinlog,
    }
})

const AppContents = createStackNavigator({
    //contentscreens here
    home : {
        screen : Home,
    },
    detail : {
        screen : Detail
    },
    addNote : {
        screen : AddNote
    }
})

const AppNavigator = createSwitchNavigator({
    splash : {
        screen : Splash,
    },
    auth : AppAuth,
    contents : AppContents,
})

const AppRoot = createAppContainer(AppNavigator);

export default class Root extends Component {
    render(){
        return(
            <Provider store={store}>
                <AppRoot />
            </Provider>
        )
    }
}
