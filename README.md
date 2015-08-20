<a name="module_google-maps-api"></a>
#google-maps-api
<a name="exp_module_google-maps-api"></a>
Load a Google Maps API Object asynchronously. This module will return a Promise.
Which will on resolved will return the "google.maps" object.

Or if you prefer you can simply use the callback instead.

This module also includes utility modules to be able to use parts of the maps api quickly:

[geocode](geocode/)

## Example 

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
including external google maps libraries
```javascript
require( 'google-maps-api' )( 'your api key', ['places'], function( maps ) {

  //the google.maps object will now have the places api (google.maps.places)
})
```


## API

- apikey `String | Object` - Your Google Maps API Key or an object of the form `{ client: 'APIClientName', channel: 'APIClientChannel' }`
- \[libraries\] `Array` -  Optional array of libraries to load such as `[ 'places' ]`
- \[onComplete\] `function` - Optional callback which will return the google.maps object

**Returns**: `Promise` - When this promise resolves it will return the google.maps object