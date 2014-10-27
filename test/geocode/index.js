var test = require( 'tape' ),
	mapsapi = require( '../../' ),
	apikey = require( '../apikey' ),
	geocode = require( '../../geocode' );

// test getting google maps
test( 'Get Google Maps', function( t ) {

	t.plan( 2 );

	mapsapi( apikey, function( err, maps ) {

		t.ok( maps, 'via callback' );
	})();

	mapsapi( apikey )()
	.then( function( maps ) {

		t.ok( maps, 'via promise' );

		// do a test for Geocoding
		test( 'Geocode', function( t ) {

			t.plan( 1 );

			geocode( {

				address: 'Seinäjoki'
			})
			.then( function( result ) {

				t.ok( result, 'received geocode result' );
			});
		});
	});
});