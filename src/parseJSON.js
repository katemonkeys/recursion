// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;
// but you're not, so you'll write it from scratch:

// Same ridiculous example array as stringify:
//"{"a":[4,5,2,"panda"],"q":[1,2,3],"cats":[[1,2,3],[4,5,2,"panda"]],"germany":{"great":"scott"}}"

//Ditch the outer "" and check if/that the first and last remaining characters are {}.
//Look for the first string marking the first property: the regexp will be /"\w+":/
//Look for the string matching the first value: /:[\w,\d\[\]\{\}"]+/ taking off the first : and the last character only if it is a comma
//(using substrings) 
//"a":[4,5,2,"panda"], "q":[1,2,3], "cats":[[1,2,3],[4,5,2,"panda"]], "germany":{"great":"scott"}}

var parseJSON = function (json) {
	switch(json) {
		case (typeof json === "number") : return parseInt(json);
		case "null" : return null;
		case "true" : return true;
		case "false" : return false;
		case (json.charAt(0) === "[" && json.charAt(json.length-1) === "]") : function() {
		//the outermost element is an array and can be treated as such. 
		}
		case (json.charAt(0) === "{" && json.charAt(json.length-1) === "}") : function() {
		//the outermost element is an object and can be treated as such
		}
		default : return json;
	}
};


// "Hello world",
// [],
// [8],
// ["hi"],
// [8, "hi"],
// [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
// [8, [[],3,4]],
// [[[["foo"]]]],
// {},
// {"a": "apple"},
// {"foo": true, "bar": false, "baz": null},
// {"boolean, true": true, "boolean, false": false, "null": null },
// {"a":{"b":"c"}},
// {"a":["b", "c"]},
// [{"a":"b"}, {"c":"d"}],
// {"a":[],"c": {}, "b": true}