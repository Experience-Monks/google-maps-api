var maps = require( '../../' ), //this should be: require( 'google-maps-api' )
	geocode = require( '../../geocode' ); //this should be: require( 'google-maps-api/geocode' )

maps( require( '../../test/apikey' ) ); //drop in your API key here instead

geocode( {

	address: '2236 Queen Street East'
})
.then( function( result ) {

	console.log( result );
});