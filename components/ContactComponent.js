import React, { Component } from 'react';
import { Text, View, ScrollView, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
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
                            <Text style={{color: 'white', fontSize: 20, left: 10}}>Schedule Your First Session</Text>
                            <View style={styles.underlineText}></View>
                            <View style={styles.form}>
                                <TextInput 
                                    style={styles.formText} 
                                    placeholder="First Name"
                                >

                                </TextInput>
                                <TextInput 
                                    style={styles.formText} 
                                    placeholder="Last Name"
                                >

                                </TextInput>
                                <TextInput 
                                    style={styles.formText} 
                                    placeholder="Contact Phone"
                                >

                                </TextInput>
                                <TextInput 
                                    style={styles.formText} 
                                    placeholder="Contact Email"
                                >

                                </TextInput>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>Schedule</Text>
                                </TouchableOpacity>
                            </View>
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
        height: 600,
        borderRadius: 10,
        marginTop: 30
    },
    content: {
        top: 10,
        left: 10
    },
    underlineText: {
        margin: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 0.5
    },
    form: {
        marginLeft: 10,
        marginRight: 100,
    },
    formText: {
        height: 40,
        color: 'white',
        marginTop: 12,
        marginBottom: 10,
        borderColor: 'white',
        borderWidth: 1.5,
        borderRadius: 10,
        paddingHorizontal: 10   //push the placeholder text in from the left TextInput border
    },
    button: {
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#53adc0',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default Contact;