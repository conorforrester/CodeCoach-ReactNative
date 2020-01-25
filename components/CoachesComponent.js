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
                <View>
                    <View style={styles.coach}>
                        <Image source={coach.image} style={{height: 250, width: 250, padding: 30}}></Image>
                        <Text>{coach.name}</Text>
                    </View>
                </View>
            )
        });

        return (
            <ImageBackground source={require('../assets/img/carousel3.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.coachContainer}>
                {coach}
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    coachContainer: {
        flex: 1,
        padding: 30,
    },
    coach: {
        transform: [{scale: 1.1}],
        alignItems: 'center',
        margin: 30
    }
})

export default Coaches;