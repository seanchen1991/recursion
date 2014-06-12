// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var t = typeof obj;
  //checks for and handles simple datatypes
  if (t != "object" || obj === null) {
  	if (t == "string") {
      obj = '"' + obj + '"';
  		return String(obj);
  	} else {
      return String(obj);
    }
  } else {
  	//recurse for arrays or objects
  	var n, v, json = [];
  	var arr = (obj && obj.constructor == Array);  //checks whether obj's type is 'array'; arr is a boolean
  	for (n in obj) {
  		v = obj[n];
  		t = typeof v;
      if (n === "functions" || undefined) {  //stringifyJSON does not work on functions or undefined values
        return '{}'; 
  		} else if (t == "string") {
  			v = '"' + v + '"';
  		} else if (t == "object" && v !== null) {
  			v = stringifyJSON(v);
  		}
  		json.push((arr ? "" : '"' + n + '":') + String(v)); //if arr is true, push "" + String(v) to json array, else push "n": + String(v) to json array
  	}
  	return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");  //if arr is true, return [String(json)], else return {String(json)}
  }
};


