console.disableYellowBox = true;

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createTabNavigator, createStackNavigator } from 'react-navigation'

import api from './lib/api'

import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import MovieDetailScreen from './screens/MovieDetailScreen'

class Dummy extends React.Component {
  render() {
    return <View/>
  }
}

const Tabs = createTabNavigator( {
  Home: {
    screen: createStackNavigator( {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          title: 'Movies'
        }
      },
      MovieDetail: {
        screen: MovieDetailScreen,
        navigationOptions: ( { navigation } ) => {
          return {
            title: navigation.state.params.title
          };
        }
      }
    } ),
    navigationOptions: {
      title: 'Movies',
      tabBarIcon: ( { tintColor } ) => {
        return <Image
          style={ [ styles.icon, { tintColor } ] }
          source={ require( './images/home.png' ) }
        />;
      }
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'About',
      tabBarIcon: ( { tintColor } ) => {
        return <Image
          style={ [ styles.icon, { tintColor } ] }
          source={ require( './images/about.png' ) }
        />;
      }
    }
  }
} )

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Tabs/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  icon: {
    width: 25,
    height: 25
  }
});
