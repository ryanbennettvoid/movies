
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const screenWidth = Dimensions.get( 'window' ).width;

export default ( { data } ) => {
  const { title, backdrop_path } = data;
  const uri = `https://image.tmdb.org/t/p/w1280${backdrop_path}`;
  return (
    <View style={ styles.container }>
      <Image
        style={ styles.backdrop }
        source={ { uri } }
        imageResizeMode='cover'
      />
      <View style={ styles.backdropOverlay } />
      <View style={ styles.infoOverlay }>
        <Text style={ styles.title }>{ title }</Text>
      </View>
    </View>
  );
};

const itemWidth = screenWidth;
const itemHeight = 200;

const styles = StyleSheet.create( {

  container: {
    width: itemWidth,
    height: itemHeight,
    backgroundColor: 'black'
  },

  backdrop: {
    width: itemWidth,
    height: itemHeight,
  },

  backdropOverlay: {
    position: 'absolute',
    width: itemWidth,
    height: itemHeight,
    backgroundColor: 'black',
    opacity: 0.5
  },

  infoOverlay: {
    position: 'absolute',
    width: itemWidth,
    height: itemHeight,
    padding: 20
  },

  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: '100'
  }

} );