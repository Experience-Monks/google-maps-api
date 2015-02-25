var test = require( 'prova' ),
	mapsapi = require( '../../' ),
	apikey = require( '../apikey' ),
	map = require( '../../map' ),
	div = document.createElement( 'div' );


document.body.appendChild( div );

// test getting google maps
test( 'Get Google Maps', function( t ) {

	t.plan( 2 );

	mapsapi( apikey, function( err, maps ) {

		t.ok( maps, 'via callback' );
	})();

	mapsapi( apikey )()
	.then( function( maps ) {

		t.ok( maps, 'via promise' );

		// do a test for Map
		test( 'Map', function( t ) {

			t.plan( 1 );
			
			map( {

				element: div,
				center: '43.670906,-79.393331'
			})
			.then( function( result ) {

				t.ok( result, 'received map' );
			})
			.catch( function( e ) {

				t.fail( e.message );
			});
		});
	});
});