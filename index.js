var script = require( 'scriptjs' ),
	promise = require( 'promise' );

var maps = null;

module.exports = function( apikey, onComplete ) {

	return function() {

		return new promise( function( onOk, onErr ) {

			if( maps ) {

				resolve( onOk, onComplete );
			} else {

				window.$$mapsCB = function() {

					maps = google.maps;

					resolve( onOk, onComplete );
				};
				
				script( 'https://maps.googleapis.com/maps/api/js?callback=$$mapsCB&key=' + apikey );
			}
		});
	};
	
	function resolve( onOk, onComplete ) {

		onOk( google.maps );

		if( onComplete )
			onComplete( google.maps );
	}	
};