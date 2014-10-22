/** @module google-maps-api/geocode */

var promise = require( 'promise' ),
	maps = require( '../' )(),
	streetViewService;

/**
 * This wraps the Google Maps Street View Service nicely. 
 * 
 * 
 * https://developers.google.com/maps/documentation/javascript/reference#StreetViewService
 *
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
module.exports = function( onComplete ) {

	return maps()
	.then( function( maps ) {

		if( !streetViewService )
			streetViewService = new maps.StreetViewService();
	})
	.then( function() {

		return new promise( function( onOK, onErr ) {

			if( onComplete ) {
				onComplete( streetViewService );
			}

			onOK( streetViewService );

		});
	});
	
};