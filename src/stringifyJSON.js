// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

//A ridiculous object has been stringified here to remind you where the quotes go:
//"{"a":[4,5,2,"panda"],"q":[1,2,3],"cats":[[1,2,3],[4,5,2,"panda"]],"germany":{"great":"scott"}}"
//Other examples:

//JSON.stringify({}) === '{}';
//JSON.stringify(true) === 'true';
//JSON.stringify("foo") === '"foo"';
//JSON.stringify([1, "false", false]) === '[1,"false",false]';
//JSON.stringify({ x: 5 }) === '{"x":5}';
//JSON.stringify({x: 5, y: 6}); // '{"x":5,"y":6}' or '{"y":6,"x":5}' (object order not guaranteed!)


// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	var totalString = "";
	if (typeof obj === "number" || typeof obj === "boolean") {
		totalString += obj;	
	}
	else if (typeof obj === "string") {
		totalString = "\""+obj+"\"";
	}

	
	if (typeof obj === "object") {
		for (property in obj) {
			if (typeof property === "string" || typeof property === "number") {
				totalString += property + ":";
			}
			if (typeof obj[property] === "string" || typeof obj[property] === "number") {
				totalString += obj[property] + ",";
			}
		}
	}
	return totalString;
};


//Strategy:
//Find out the type of both the property and the values for each key in the object if it is even an object
//If they are strings or numbers, print them as such. 
//If they are arrays, find out the type of each index within the array: for any arrays, do it again, for objects, call stringify
//If they are objects, call stringifyJSON again. 
//Then wrap them in { ... } and join with commas.
//Only on the outermost loop, wrap them in "" 
