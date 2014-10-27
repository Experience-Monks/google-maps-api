<a name="module_google-maps-api/geocode"></a>
#google-maps-api/geocode
<a name="exp_module_google-maps-api/geocode"></a>
##module.exports(opts, [onComplete]) ⏏
This wraps the Google Maps Map. 

The first parameter you pass in an option object:
```javascript
{
	///REQUIRED///
	element: someDivElement, // You must pass in a div element in which the map's contents will be loaded
	
	center: '43.670906,-79.393331', // This is the center of the map. This can be in a few different 
									// formats which is parsed by:
			 					 	// https://www.npmjs.org/package/latlng

	///OPTIONAL///
	zoom: 14 // This will be how zoomed in the map will be. 0 is where you 
        	  // can see the entire world, 21 is where you see streets. 14 is default

	// For more options check out
	// https://developers.google.com/maps/documentation/javascript/reference#MapOptions
}
```

**Params**

- opts `Object` - An option object. See above for variables that should be passed in.  
- \[onComplete\] `function` - If you prefer not to use promises you can pass in a callback instead. The callback should be in the
                                form of ```function( err, data ) {}```  

**Returns**: `Promise` - This promise will return the result same as the onComplete  
**Example**  
```javascript
require( 'google-maps-api' )( 'your api key here' );

require( 'google-maps-api/map' )( {
	element: document.getElementById( 'some-div' ),
	center: '43.670906,-79.393331'
})
.then( function( map ) {

	// do something with the map here
});
```

