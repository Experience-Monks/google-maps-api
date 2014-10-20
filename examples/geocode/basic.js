var maps = require( '../../' ),
	geocode = require( '../../geocode' );

maps( require( '../../test/apikey' ) ); //drop in your API key here instead

geocode( {

	address: '2236 Queen Street East'
})
.then( function( result ) {

	console.log( result );
});