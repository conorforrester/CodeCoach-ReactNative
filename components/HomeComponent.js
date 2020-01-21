import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';


class Home extends Component {
    
    
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ImageBackground source={require('../assets/img/carousel3.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                    <View style={styles.homeCircle}>
                        <Text style={styles.homeCircleText}>One On One Learning</Text>
                    </View>
                    <View style={styles.homeCircle}>
                        <Text style={styles.homeCircleText}>Affordable Pricing Options</Text>
                    </View>
                    <View style={styles.homeCircle}>
                        <Text style={styles.homeCircleText}>Your Own Schedule</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles=StyleSheet.create({
    container: {    //give surrounding View flex:1 so children Views can use flexbox
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'    //centers all three bubbles in one group
    },
    homeCircle: {
        backgroundColor: '#133975',
        margin: 25,
        opacity: 0.85,
        borderRadius: 10,
        padding: 20,
        width: 350,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    homeCircleText: {
        color: 'white',
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        transform: [{scale: 1.1}]
    },
});

export default Home;