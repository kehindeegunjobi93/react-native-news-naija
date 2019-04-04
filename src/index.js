import React from 'react';
import HomeScreen   from './screens/home';
import Health  from './screens/health';
import Sport  from './screens/sport';
import Technology  from './screens/technology';
import Business  from './screens/business';
import SplashScreen from './screens/splash';
import {createMaterialTopTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';



const Tab = createMaterialTopTabNavigator({
    All: {screen: HomeScreen},
    Business: {screen: Business},
    Sport: {screen: Sport},
    Technology: {screen: Technology},  
    Health: {screen: Health},
}, {
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#ddd',
    scrollEnabled: true,
    style: {
      backgroundColor: 'green',
   },
   tabStyle: {
    width: 120,
  }
}
})

const Navigator  = createAppContainer(Tab)
export default Navigator;