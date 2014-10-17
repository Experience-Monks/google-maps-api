require( '../' )( require( './apikey' ), function( maps ) {

	console.log( 'via callback', maps );
})().then( function( maps ) {

	console.log( 'via promise', maps );	
});