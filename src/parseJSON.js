// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

// Same ridiculous array as stringify:
//"{"a":[4,5,2,"panda"],"q":[1,2,3],"cats":[[1,2,3],[4,5,2,"panda"]],"germany":{"great":"scott"}}"

//Ditch the outer "" and check if/that the first and last remaining characters are {}.
//Look for the first string marking the first property: the regexp will be /"\w+":/
//Look for the string matching the first value: /:[\w,\d\[\]\{\}"]+/ taking off the first : and the last character only if it is a comma
//(using substrings) 
//"a":[4,5,2,"panda"], "q":[1,2,3], "cats":[[1,2,3],[4,5,2,"panda"]], "germany":{"great":"scott"}}

var parseJSON = function (json) {

// I had intended for the following to chop off the first and last double quotes but length isn't a method even on strings,
//which JSON objects inherently are!!
//	var newString = json.toString();
//	var content = newString.substring(1, newString.length()-1);
//	if (json.charAt(0) === "{" && json.charAt(json.length-1) === "}") {
		//then it's an object and we can start going through it that way
//	}
  	return json;
};
