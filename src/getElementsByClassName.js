// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (classname) {
  var where = document.documentElement;
  
  var searchChildren = function(location,classname) {
  	var nodeList = [];
	var seek = location.children;
  
  	for (var i=0; i<seek.length; i++) {
  		if (seek[i].className.match(classname) !== null) {
  			nodeList.push(seek[i]);
  			console.log(seek[i]);
  		}
  	}
  	if (seek.nodeType === 1 && seek.length > 0) {
  		searchChildren(seek,classname);
  	}
	return nodeList;
  };
   return searchChildren(where);

};