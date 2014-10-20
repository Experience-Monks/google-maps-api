var mapsapi = require( '../' ),
	apikey = require( './apikey' ),
	geocode = require( '../geocode' );

mapsapi( apikey )()
.then( function( maps ) {

	console.log( 'via promise', maps );

	geocode( {

		address: 'chernobyl'
	})
	.then( function( result ) {

		console.log( 'geocode:', result );
	})
	.catch( function( err ) {

		console.log( err.stack );
	});

	return maps;
});

mapsapi( apikey, function( err, maps ) {

	if( err ) 
		console.log( err );
	else	
		console.log( 'via callback', maps );
})();