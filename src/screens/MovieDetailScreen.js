
import React from 'react';
import { 
  StyleSheet, Text, View, Dimensions, 
  Image, ScrollView
} from 'react-native';
import api from '../lib/api';
import moment from 'moment';

const screenWidth = Dimensions.get( 'window' ).width;

export default class MovieDetailScreen extends React.Component {

  render() {

    const { title, release_date, overview, backdrop_path } = this.props.navigation.state.params;
    const uri = `https://image.tmdb.org/t/p/original${backdrop_path}`;

    return (
      <ScrollView style={ styles.container }>
        <Image style={ styles.image } source={ { uri } } />
        <View style={ styles.infoContainer }>
          <Text style={ styles.title }>{ title }</Text>
          <Text style={ styles.release_date }>{ moment(release_date).format('MMM DD, YYYY') }</Text>
          <Text style={ styles.overview }>{ overview }</Text>
        </View>
      </ScrollView>
    );
  }

}

const itemSize = screenWidth;

const styles = StyleSheet.create( {

  container: {
    flex: 1,
    backgroundColor: '#333'
  },

  image: {
    width: itemSize,
    height: itemSize,
  },

  infoContainer: {
    padding: 10
  },

  title: {
    color: 'white',
    fontSize: 25
  },

  release_date: {
    color: '#888',
    fontSize: 20
  },

  overview: {
    color: 'white',
    fontSize: 15
  }

} );