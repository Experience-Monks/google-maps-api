<a name="module_google-maps-api/geocode"></a>
#google-maps-api/geocode
<a name="exp_module_google-maps-api/geocode"></a>
##module.exports(req, [onComplete]) ⏏
This wraps the Google Maps Geocoder nicely. 

The first parameter you pass in an object which represents your request
to the Google Maps Geocoder. For more info visit:

https://developers.google.com/maps/documentation/javascript/reference#GeocoderRequest

## Example
```javascript
require( 'google-maps-api' )( 'your api key here' );

require( 'google-maps-api/geocode' )( {
  address: 'Springfield'
})
.then( function( result ) {

  console.log( result );
});
```

## API

- req `google.maps.GeocoderRequest` - For more info on this visit 
                                          https://developers.google.com/maps/documentation/javascript/reference#GeocoderRequest  
- \[onComplete\] `function` - If you prefer not to use promises you can pass in a callback instead. The callback should be in the
                                form of ```function( err, data ) {}```  

**Returns**: `Promise` - This promise will return the result same as the onComplete  