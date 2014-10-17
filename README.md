<a name="module_google-maps-api"></a>
#google-maps-api
<a name="exp_module_google-maps-api"></a>
##module.exports(apikey, [onComplete]) ⏏
Load a Google Maps API Object asynchronously. This module will return a Promise.
Which will on resolved will return the "google.maps" object.

Or if you prefer you can simply use the callback instead.

**Params**

- apikey `String` - Your Google Maps API Key  
- \[onComplete\] `function` - A callback which will return the google.maps object  

**Returns**: `Promise` - When this promise resolves it will return the google.maps object  

##Example 
using via promise

```javascript
var mapsapi = require( 'google-maps-api' )( 'your api key' );

mapsapi().then( function( maps ) {

	//use the google.maps object as you please
});
```

using via callback
```javascript
require( 'google-maps-api' )( 'your api key', function( maps ) {

	//use the google.maps object as you please
})
```