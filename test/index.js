var mapsapi = require( '../' )( require( './apikey' ) );

mapsapi().then( function( maps ) {

	console.log( maps );
});