/** @module google-maps-api */

var script = require( 'scriptjs' ),
  promise = require( 'promise' );

var maps = null,
  callBacks = [],
  key;

window.$$mapsCB = function() {

  maps = google.maps;

  for( var i = 0, len = callBacks.length; i < len; i++ ) {

    resolve.apply( undefined, callBacks[ i ] );
  }
};

function resolve( onOk, onErr, onComplete, err ) {

  if( !err ) {

    onOk( maps );

    if( onComplete )
      onComplete( undefined, maps );
  } else {

    onErr( err );

    if( onComplete )
      onComplete( err );
  }
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
 *  //use the google.maps object as you please
 * });
 * ```
 *
 * @example using via callback
 * ```javascript
 * require( 'google-maps-api' )( 'your api key', function( maps ) {
 *
 *  //use the google.maps object as you please
 * })
 * ```
 */
module.exports = function( apikey, libraries, onComplete ) {

  key = apikey || key;
  if (typeof libraries == 'function') {
    onComplete = libraries;
    libraries = [];
  }

  return function() {

    return new promise( function( onOk, onErr ) {

      if( !key ) {

        resolve( onOk, onErr, onComplete, new Error( 'No API key passed to require(\'google-maps-api\')' ) );
      } else {

        if( maps ) {

          resolve( onOk, onErr, onComplete );
        } else {

          callBacks.push( [ onOk, onErr, onComplete ] );

          if (callBacks.length == 1) {
            var auth = '';
            if (typeof key == 'string') {

              auth = '&key=' + key;
            } else if (typeof key == 'object') {

              auth = '&' + Object.keys(key).map(function (k) {
                return k + '=' + encodeURIComponent(key[k]);
              }).join('&');
            }

            var url = 'https://maps.googleapis.com/maps/api/js?v=3&callback=$$mapsCB' + auth;
            if (Array.isArray(libraries) && libraries.length > 0) {
              url+='&libraries='+libraries.join(',');
            }
            script( url );
          }
        }
      }
    });
  };
};
