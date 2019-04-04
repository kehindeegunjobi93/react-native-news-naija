import React, { Component } from 'react'
import { YellowBox } from 'react-native';
import Navigator from './src/index';
import AppName from './src/header';
import { Container } from 'native-base';

export default class Entry extends Component {
    constructor(){
        super();
        YellowBox.ignoreWarnings(['ViewPagerAndroid'])
    }
    render(){
        return(
            <Container>
              <AppName />        
              <Navigator /> 
            </Container>
            
        )
    }
}