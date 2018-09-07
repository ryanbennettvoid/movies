import React from 'react';
import { 
  StyleSheet, Text, View, FlatList, 
  TouchableOpacity, Button, Linking
} from 'react-native';

const pageUrl = 'https://www.meetup.com/LA-Mobile-App-Developers-React-Native/';

export default class AboutScreen extends React.Component {

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>This app was created on September 7th, 2018 by Ryan Bennett for the LA Mobile App Developers React Native meetup group.</Text>
        <Button
          title='Go To Meetup Page'
          onPress={ () => {
            Linking.openURL(pageUrl).catch(console.log)
          } }
        />
      </View>
    );
  }

}

const styles = StyleSheet.create( {

  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20
  },

  text: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20
  },

} );