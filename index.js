/** @module google-maps-api */

var script = require( 'scriptjs' ),
	promise = require( 'promise' );

var maps = null,
	callBacks = [];

window.$$mapsCB = function() {

	maps = google.maps;

	for( var i = 0, len = callBacks.length; i < len; i++ ) {

		resolve.apply( undefined, callBacks[ i ] );
	}
};

function resolve( onOk, onComplete ) {

	onOk( maps );

	if( onComplete )
		onComplete( maps );
}

/** 
 * Load a Google Maps API Object asynchronously. This module will return a Promise.
 * Which will on resolved will return the "google.maps" object.
 *
 * Or if you prefer you can simply use the callback instead.
 * 
 * @param  {String} apikey Your Google Maps API Key
 * @param  {Function} [onComplete] A callback which will return the google.maps object
 * @return {Promise} When this promise resolves it will return the google.maps object
 *
 * @example using via promise
 *
 * ```javascript
 * var mapsapi = require( 'google-maps-api' )( 'your api key' );
 *
 * mapsapi().then( function( maps ) {
 *
 * 	//use the google.maps object as you please
 * });
 * ```
 *
 * @example using via callback
 * ```javascript
 * require( 'google-maps-api' )( 'your api key', function( maps ) {
 *
 * 	//use the google.maps object as you please
 * })
 * ```
 */
module.exports = function( apikey, onComplete ) {

	return function() {

		return new promise( function( onOk, onErr ) {

			if( maps ) {

				resolve( onOk, onComplete );
			} else {

				callBacks.push( [ onOk, onComplete ] );
				
				if( callBacks.length == 1 ){

					script( 'https://maps.googleapis.com/maps/api/js?callback=$$mapsCB&key=' + apikey );
				}
			}
		});
	};	
};