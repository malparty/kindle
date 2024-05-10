var api_locParams = "q=Da Nang";
// or:
// var api_locParams = "lat=50.1243111&lon=14.4901953";

// This is a free key, consider creating your own on https://home.openweathermap.org/api_keys
// to get more free requests.
var api_appId = "9ac1a89f524a7a73f3d0149bc41abe9d";
var api_lang = "en"
var api_units = "metric";

var api_params = null;

// refresh time in miliseconds (default 30 mins)
var refreshTime = 2 * 60 * 1000;

// Browser in kindle paperwhite doesn't support rotation.
// You can override with this parameter 'll' and 'lr' for landscape left/right, 'up' for upside down.
var rotation = "lr";

// You can set night mode,
// "auto" - by sunrise and sunset,
// "HH-HH - like: ""22-06", from 22:00 to 06:00
// "on" - night mode all the day :)
var night_mode = "on";

// Timezone offset - kindle doesnt report correct local time to the kindle (always it is GMT),
// You can set custom GMT offset, in format "+08:00".
// You may need to set it again after winter/summer time change.
// Null is default
var utcOffset = null

