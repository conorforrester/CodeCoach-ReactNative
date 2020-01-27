import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-web-swiper';

function Mission () {
    return (
        <View style={styles.missionContainer}>
            <View style={styles.missionCircle}>
                <Text style={styles.missionTitle}>Our Journey, For You</Text>
                <Text style={styles.mission}>Code Coach was founded in 2019 for upcoming developers to be able to learn at their own pace. 
                                    We found most coding bootcamps offered great curriculum material but most graduates barely remembered what they learned.
                                    We aim to provide a platform to learn one on one with a coach of your choice and on your schedule. We have affordable options 
                                    to learn different tech stacks as well. See the Coaches section to learn more about the individual coaches and what they can teach you!
                </Text>
            </View>
        </View>
    );
}

function IconBubbles () {
    return (
        <View style={{flex: 1}}>
            <View style={styles.iconContainer}>
                <View style={styles.aboutIcon}>
                    <Text style={styles.aboutIconText}>Affordable</Text>
                    <Icon
                        style={styles.aboutIconText}
                        name='usd'
                        type='font-awesome'
                        color='white'
                        size={30}
                    />
                </View>
                <View style={styles.aboutIcon}>
                    <Text style={styles.aboutIconText}>Remote</Text>
                    <Icon
                        style={styles.aboutIconText}
                        name='laptop'
                        type='font-awesome'
                        color='white'
                        size={30}
                    />
                </View>
            </View>
            <View style={styles.iconContainer}>
                <View style={styles.aboutIcon}>
                    <Text style={styles.aboutIconText}>Calendar</Text>
                    <Icon
                        style={styles.aboutIconText}
                        name='calendar'
                        type='font-awesome'
                        color='white'
                        size={30}
                    />
                </View>
                <View style={styles.aboutIcon}>
                    <Text style={styles.aboutIconText}>One On One</Text>
                    <Icon
                        style={styles.aboutIconText}
                        name='handshake-o'
                        type='font-awesome'
                        color='white'
                        size={30}
                    />
                </View>
            </View>
        </View>
    );
}


class AboutCarousel extends Component {
    render() {
        return (
            <View style={{flex:1, height: 200}}>
                <View style={{flex:1}}>
                    <Swiper
                        from={1}
                        minDistanceForAction={0.1}
                        controlsProps={{
                        dotsTouchable: true
                        }}
                    >
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:'#133975'}}>
                          <Text style={{color: 'white', margin: 15, fontSize: 18}}>"Code Coach is amazing! I love how interactive it is."</Text>
                          <Text style={{color: 'white', margin: 15, }}>Albert Einstein, Code Coach Instructor</Text>
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:'#133975'}}>
                          <Text style={{color: 'white', margin: 15, fontSize: 18}}>"The inner enlightenment I received from Code Coach was truly spectacular!"</Text>
                          <Text style={{color: 'white', margin: 15, }}>Mahatma Ghandi, Code Coach Student</Text>
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:'#133975'}}>
                          <Text style={{color: 'white', margin: 15, fontSize: 18}}>"Scheduling my sessions with my coach couldn\'t be simpler."</Text>
                          <Text style={{color: 'white', margin: 15, }}>Michael Jordan, Code Coach Student</Text>
                      </View>
                  </Swiper>
                </View>   
            </View>
        )
    }
}

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    };

    render () {
        return (
            <ImageBackground source={require('../assets/img/carousel3.jpg')} style={{width: '100%', height: '100%'}}>
                <ScrollView>
                    <Animatable.View animation='fadeInDown' duration={1000} delay={1000}>
                        <Mission />
                    </Animatable.View>
                    <Animatable.View animation='fadeInUp' duration={1000} delay={1000}>
                        <IconBubbles />
                    </Animatable.View>
                    <AboutCarousel />
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    missionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    missionCircle: {
        backgroundColor: '#133975',
        opacity: 0.85,
        marginTop: 50,
        borderRadius: 10,
        width: 350,
        height: 280,
        justifyContent: 'center'
    },
    missionTitle: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    mission: {
        margin: 15,
        color: 'white',
        lineHeight: 20
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    aboutIcon: {
        backgroundColor: '#133975',
        opacity: 0.85,
        borderRadius: 150/2,
        height: 150,
        width: 150,
        textAlignVertical: 'center',
        justifyContent: 'center',
        margin: 22
    },
    aboutIconText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        margin: 7
    },
    carousel: {
        height: 200
    },
})


export default About;
