var mapsapi = require( '../' ),
	apikey = require( './apikey' );

mapsapi( apikey )()
.then( function( maps ) {

	console.log( 'via promise', maps );

	return maps;
});

mapsapi( apikey, function( maps ) {

	console.log( 'via callback', maps );
})();