import React, { Component } from 'react';
import { View, ImageBackground, Text, Card, ScrollView, StyleSheet } from 'react-native'
import { Image } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { COACHES } from '../shared/coaches';


class Coaches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coaches: COACHES
        };
    }

    static navigationOptions = {
        title: 'Coaches'
    };

    render() {
        const coach = this.state.coaches.map(coach => {
            return (
                <View style={styles.coachContainer}>
                    <View style={styles.coachImage}>
                        <Image 
                            source={coach.image} 
                            borderRadius = {250/2}
                            borderColor = '#133975'
                            borderWidth = {5}
                            style={{height: 250, width: 250}}
                        >      
                        </Image>
                    </View>
                    <View style={styles.coachText}>
                        <Text style={{color: 'white', fontSize: 25, margin: 10}}>{coach.name}</Text>
                        <Text style={{color: 'white', fontSize: 18, marginLeft: 10}}>{coach.skills}</Text>
                        <Text style={{color: 'white', fontSize: 18, marginLeft: 10}}>{coach.worked}</Text>
                        <Text style={{color: 'white', fontSize: 18, marginLeft: 10}}>{coach.experience}</Text>
                        <Text style={{color: 'white', fontSize: 18, marginLeft: 10, marginBottom: 10}}>{coach.funfact}</Text>
                    </View>
                </View>
            )
        });

        return (
            <ImageBackground source={require('../assets/img/carousel3.jpg')} style={{width: '100%', height: '100%'}}>
                <ScrollView>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        {coach}
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    coachContainer: {
        padding: 30,
    },
    coachImage: {
        alignItems: 'center',
        margin: 10,
    },
    coachText: {
        backgroundColor: '#133975',
        marginTop: 20,
        width: 300,
        borderRadius: 30,
        opacity: 0.85,
        padding: 10,
    }
})

export default Coaches;