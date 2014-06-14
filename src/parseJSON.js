// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (json === "") {  //if json object is empty, return an empty string
  	json = '""';
  }
  eval("var parsed =" + json + ";");  //the eval function evaluates JS strings
  return parsed;	
};

/*create a string with json inside, then call eval on this string and returns the 
object corresponding to the passed in JSON text
*/
