
const { tmdb_api_key } = require( '../../config.json' );

const qs = require( 'querystringify' );

const BASE_URL = `https://api.themoviedb.org/3`;

const request = ( method, endpoint, params ) => {
  return new Promise( async ( resolve, reject ) => {
    try {

      const p = {
        ...params,
        api_key: tmdb_api_key
      }

      const url = `${BASE_URL}${endpoint}${qs.stringify(p,true)}`;
      console.log( 'req: ', url );

      const res = await fetch( url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        }
      } );

      if ( !res.ok ) {
        const err = await res.text();
        throw new Error( err );
      }

      const json = await res.json();
      console.log( 'json: ', json );

      resolve( json );

    } catch ( e ) {
      reject( e );
    }
  } );
};;

export default {

  getPopularMovies: ( { page } ) => {
    return request( 'GET', '/movie/popular', { page } );
  }

};