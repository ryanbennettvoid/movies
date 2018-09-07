
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import api from '../lib/api'
import MovieItem from '../components/MovieItem'

export default class HomeScreen extends React.Component {

  constructor( props ) {

    super( props );

    this.state = {
      loading: false,
      movies: [],
      lastPage: 0
    };

  }

  componentDidMount() {
    this.loadNextPage();
  }

  refresh = async () => {

    if ( this.state.loading ) return;

    this.setState( { loading: true } );

    const response = await api.getPopularMovies( { page: 1 } );
    const { results } = response;

    this.setState( {
      loading: false,
      movies: [ ...results ],
      lastPage: 1
    } );

  }

  loadNextPage = async () => {

    if ( this.state.loading ) return;

    const page = this.state.lastPage + 1;

    this.setState( { loading: true } );

    const response = await api.getPopularMovies( { page } );
    const { results } = response;

    this.setState( {
      loading: false,
      movies: [ ...this.state.movies, ...results ],
      lastPage: page
    } );

  }

  goToMovie( movie ) {
    this.props.navigation.push( 'MovieDetail', movie );
  }

  render() {
    return (
      <View style={ styles.container }>
        <FlatList
          style={ styles.list }
          data={ this.state.movies }
          renderItem={ ( { item } ) => (
            <TouchableOpacity onPress={ this.goToMovie.bind( this, item ) }>
              <MovieItem data={item} />
            </TouchableOpacity>
          ) }
          keyExtractor={ ( item ) => `k${item.id}` }
          onEndReached={ this.loadNextPage.bind( this ) }
          onRefresh={ this.refresh.bind( this ) }
          refreshing={ this.state.loading }
        />
      </View>
    );
  }

}

const styles = StyleSheet.create( {

  container: {
    flex: 1,
  },

  list: {
    flex: 1,
  }

} );