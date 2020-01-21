import React, { Component } from 'react';
import { Text, View, ScrollView, ImageBackground} from 'react-native';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {

    render() {
        return (
            <ImageBackground source={require('../assets/img/carousel3.jpg')} style={{width: '100%', height: '100%'}}>
                <ScrollView>
                    <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>

                    </Animatable.View>
                </ScrollView>
            </ImageBackground>
        );
    }

    static navigationOptions = {
        title: 'Contact Us'
    };
}

export default Contact;