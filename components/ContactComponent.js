import React, { Component } from 'react';
import { Text, View, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {

    render() {
        return (
            <ImageBackground source={require('../assets/img/carousel3.jpg')} style={{width: '100%', height: '100%'}}>
                <ScrollView>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <View style={styles.contactContainer}>
                            <View style={styles.content}>
                                <Text style={{color: 'white', fontSize: 20, marginBottom: 10}}>Contact Information</Text>
                                <Text style={{color: 'white'}}>5 Coach St.</Text>
                                <Text style={{color: 'white'}}>Palo Alto, CA 87905</Text>
                                <Text style = {{marginBottom: 10, color: 'white'}}>U.S.A.</Text>
                                <Text style={{color: 'white'}}>Phone: 1-123-456-7890</Text>
                                <Text style={{color: 'white', marginBottom: 50}}>Email: codecoach@coach.co</Text>
                            </View>
                            <Text style={{color: 'white', fontSize: 25, left: 20}}>Schedule Your First Session</Text>
                            <View style={styles.underlineText}></View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }

    static navigationOptions = {
        title: 'Contact Us'
    };
}

const styles = StyleSheet.create({
    contactContainer: {
        backgroundColor: '#133975',
        opacity: 0.85,
        width: 350,
        height: 400,
        borderRadius: 10,
        marginTop: 50
    },
    content: {
        top: 10,
        left: 10
    },
    underlineText: {
        margin: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
})

export default Contact;