import React, { Component } from 'react';
import { Text, View, ScrollView, ImageBackground, StyleSheet, Picker, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coach: ''
        };
    }

    static navigationOptions = {
        title: 'Contact Us'
    };

    resetForm() {
        this.setState({
            coach: ''
        });
    }
    
    render() {

        return (
            <ImageBackground source={require('../assets/img/carousel3.jpg')} style={{width: '100%', height: '100%'}}>
                <ScrollView contentContainerStyle={{paddingBottom: 20}}>
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
                                <Text style={{color: 'white', fontSize: 15, marginTop: 20, marginBottom: 8, fontWeight: 'bold'}}>Select Your Coach</Text>
                                <View style={styles.pickerView}>
                                    <Picker
                                        style={styles.picker}
                                        selectedValue={this.state.coach}
                                        onValueChange={itemValue => this.setState({coach: itemValue})}
                                        >
                                        <Picker.Item label="Susan Ashcroft" value="1" />
                                        <Picker.Item label="Mark Wang" value="2" />
                                        <Picker.Item label="Farah Amin" value="3" />
                                        <Picker.Item label="Bobby Johnson" value="4" />
                                    </Picker>
                                </View>
                                <Text style={{color: 'white', fontSize: 15, marginTop: 10, marginBottom: 8, fontWeight: 'bold'}}>Your Message</Text>
                                <View></View>
                                <TextInput 
                                    style={styles.message}
                                    multiline
                                    numberOfLines={5}
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
}

const styles = StyleSheet.create({
    contactContainer: {
        backgroundColor: '#133975',
        opacity: 0.85,
        width: 270,
        height: 850,
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
        marginRight: 10,
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
    },
    pickerView: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 5
    },
    picker: {
        color: 'white',
        backgroundColor: 'transparent'      //gets rid of the dropdown arrow
    },
    message: {
        height: 40,
        color: 'white',
        marginBottom: 50,
        borderColor: 'white',
        borderWidth: 1.5,
        borderRadius: 10,
        height: 100,
        textAlignVertical: 'top',
        paddingHorizontal: 10,
        paddingVertical: 10
    }
})

export default Contact;