import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Coaches from './CoachesComponent';
import { LinearGradient } from 'expo-linear-gradient';
import {View, Platform, StyleSheet, Text, ScrollView, Image} from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems} from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import { Icon } from 'react-native-elements';
import { COACHES } from '../shared/coaches'

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#53adc0'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#53adc0'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='info-circle'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const CoachesNavigator = createStackNavigator(
    {
        Coaches: { screen: Coaches }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#53adc0'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='rocket'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#53adc0'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='address-card'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const CustomDrawerContentComponent = props => (
    <LinearGradient
        colors={['#133975', '#53adc0', '#53adc0', '#53adc0']}
        style={styles.gradient}
    >
        <ScrollView>
            <SafeAreaView 
                style={styles.container}
                forceInset={{top: 'always', horizontal: 'never'}}>
                <View style={styles.drawerHeader}>
                    <View style={{flex: 2}}>
                        <Text style={styles.drawerHeaderText}>Code Coach</Text>
                    </View>
                </View>
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    </LinearGradient>
);

const MainNavigator = createDrawerNavigator(
//wrap these components through the StackNavigator, so we set the screens to the navigators, not the screens themselves
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: () => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color='black'
                    />
                )
            }
        },
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'About Us',
                drawerIcon: () => (
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color='black'
                    />
                )
            }
        },
        Coaches: {
            screen: CoachesNavigator,
            navigationOptions: {
                drawerLabel: 'Coaches',
                drawerIcon: () => (
                    <Icon
                        name='rocket'
                        type='font-awesome'
                        size={24}
                        color='black'
                    />
                )
            }
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Us',
                drawerIcon: () => (
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        color='black'
                    />
                )
            }
        }
        },
    {
        drawerBackgroundColor: '#CEC8FF',
        contentComponent: CustomDrawerContentComponent
    }
);


class Main extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         coaches: COACHES
    //     }
    // }

    render () {
        return (
            <View 
                style={{flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <MainNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1
    },
    drawerHeader: {
        marginLeft: 20,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});


export default Main;
