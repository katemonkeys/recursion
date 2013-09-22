// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	var totalString = "";

	if (typeof obj === "number" || typeof obj === "boolean" || obj === null) {
		totalString += obj;	
	}
	else if (typeof obj === "string") {
		totalString = "\""+obj+"\"";
	}
	else if (obj instanceof Array) {
		var metaArray = [];
		for (var i=0; i<obj.length; i++) {
			metaArray.push(stringifyJSON(obj[i]));
		}
		return "["+metaArray.join(",")+"]";
	}
	else {
		var metaProperty = [];
		var metaValue = [];
		var metaCombined = [];
		for (property in obj) {
			metaProperty.push(stringifyJSON(property));
			metaValue.push(stringifyJSON(obj[property]));
		}
		for (var j=0; j<metaProperty.length; j++) {
			metaCombined.push(metaProperty[j]+":"+metaValue[j]);
		}
		return "{"+metaCombined.join(",")+"}";
	}

	return totalString;
};
