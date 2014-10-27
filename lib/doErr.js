module.exports = function( msg, onErr, cb ) {

	var err = new Error( msg );

	onErr( err );

	if( cb )
		cb( err );
}