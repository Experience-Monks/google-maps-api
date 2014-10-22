<a name="module_google-maps-api/geocode"></a>
#google-maps-api/streetviewservice
<a name="exp_module_google-maps-api/geocode"></a>
##module.exports([onComplete]) ⏏
This wraps the Google Maps Street View Service nicely.

https://developers.google.com/maps/documentation/javascript/reference#StreetViewService

**Params**

- req `google.maps.StreetViewService` - For more info on this visit 
                                          https://developers.google.com/maps/documentation/javascript/reference#StreetViewService  
- \[onComplete\] `function` - If you prefer not to use promises you can pass in a callback instead. The callback should be in the
                                form of ```function( err, data ) {}```  

**Returns**: `Promise` - This promise will return the result same as the onComplete  
**Example**  
```javascript
require( 'google-maps-api' )( 'your api key here' );

require( 'google-maps-api/streetviewservice' )()
.then( function( streetViewServiceInstance ) {
	// ...
});
```