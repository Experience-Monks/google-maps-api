/** @module google-maps-api/geocode */

var promise = require( 'promise' ),
	latlng = require( 'latlng' ),
	doErr = require( '../lib/doErr' );
	maps = require( '../' )();

/**
 * This wraps the Google Maps Map. 
 * 
 * The first parameter you pass in an option object:
 * ```javascript
 * {
 * 	///REQUIRED///
 * 	element: someDivElement, // You must pass in a div element in which the map's contents will be loaded
 * 	
 * 	center: '43.670906,-79.393331', // This is the center of the map. This can be in a few different 
 * 									// formats which is parsed by:
 * 			 					 	// https://www.npmjs.org/package/latlng
 *
 * 	///OPTIONAL///
 * 	zoom: 14 // This will be how zoomed in the map will be. 0 is where you 
 *         	  // can see the entire world, 21 is where you see streets. 14 is default
 *
 *	// For more options check out
 *	// https://developers.google.com/maps/documentation/javascript/reference#MapOptions
 * }
 * ```
 * 
 * @param  {Object} opts An option object. See above for variables that should be passed in.
 * @param  {Function} [onComplete] If you prefer not to use promises you can pass in a callback instead. The callback should be in the
 *                                 form of ```function( err, data ) {}```
 * @return {Promise} This promise will return the result same as the onComplete
 *
 * @example
 * ```javascript
 * require( 'google-maps-api' )( 'your api key here' );
 *
 * require( 'google-maps-api/map' )( {
 * 	element: document.getElementById( 'some-div' ),
 * 	center: '43.670906,-79.393331'
 * })
 * .then( function( map ) {
 * 
 * 	// do something with the map here
 * });
 * ```
 */
module.exports = function( opts, onComplete ) {

	opts.zoom = opts.zoom !== undefined ? opts.zoom : 14;

	return maps()
	.then( function( maps ) {

		return new promise( function( onOK, onErr ) {

			if( opts.element === undefined )
				doErr( 'You must pass in an div element which will contain the map', onErr, onComplete );
			else if( opts.center === undefined )
				doErr( 'You must pass in an center value for the map', onErr, onComplete );
			else {

				var node = opts.element,
					center = opts.center,
					centerVal = latlng( center );

				delete opts.element;

				opts.center = new maps.LatLng( centerVal.lat, centerVal.lng );

				onOK( new maps.Map( node, opts ) );

				// return settings to original values
				opts.element = node; 
				opts.center = center;
			}
		});
	});
};