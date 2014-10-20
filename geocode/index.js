/** @module google-maps-api/geocode */

var promise = require( 'promise' ),
	maps = require( '../' )(),
	geocoder;

/**
 * This wraps the Google Maps Geocoder nicely. 
 * 
 * The first parameter you pass in an object which represents your request
 * to the Google Maps Geocoder. For more info visit:
 * 
 * https://developers.google.com/maps/documentation/javascript/reference#GeocoderRequest
 * 
 * @param  {google.maps.GeocoderRequest} req For more info on this visit 
 *                                           https://developers.google.com/maps/documentation/javascript/reference#GeocoderRequest
 * @param  {Function} [onComplete] If you prefer not to use promises you can pass in a callback instead. The callback should be in the
 *                                 form of ```function( err, data ) {}```
 * @return {Promise} This promise will return the result same as the onComplete
 *
 * @example
 * require( 'google-maps-api' )( 'your api key here' );
 *
 * require( 'google-maps-api/geocode' )( {
 * 	address: 'Springfield'
 * })
 * .then( function( result ) {
 * 
 * 	console.log( result );
 * });
 */
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