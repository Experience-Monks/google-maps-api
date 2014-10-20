var promise = require( 'promise' ),
	maps = require( '../' )(),
	geocoder;

module.exports = function( req, onComplete ) {

	return maps()
	.then( function( maps ) {

		if( !geocoder )
			geocoder = new maps.Geocoder();
	})
	.then( function() {

		return new promise( function( onOK, onErr ) {

			geocoder.geocode( req, function( result ) {

				if( onComplete ) {

					onComplete( result );
				}

				onOK( result );
			});
		});
	});
};