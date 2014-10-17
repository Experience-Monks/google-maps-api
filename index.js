var ready = require( 'domready' ),
	script = require( 'scriptjs' ),
	promise = require( 'promise' );

module.exports = function( apikey, onComplete ) {

	var maps = null;

	return function() {

		return new promise( function( onOk, onErr ) {

			if( maps ) {

				resolve( onOk, onComplete );
			} else {

				// Google maps API tries to write to the dom therefore the dom needs to be ready
				ready( function( dom ) {

					window.$$mapsCB = function() {

						maps = google.maps;

						resolve( onOk, onComplete );
					};
					
					script( 'https://maps.googleapis.com/maps/api/js?callback=$$mapsCB&key=' + apikey );
				});
			}
		});
	};
	
	function resolve( onOk, onComplete ) {

		onOk( google.maps );

		if( onComplete )
			onComplete( google.maps );
	}	
};