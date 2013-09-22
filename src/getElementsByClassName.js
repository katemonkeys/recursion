// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (classname) {
  var where = document.documentElement;
  var nodeList = [];

  var searchChildren = function(location,classname,nodeList) {	
  	var seek = location.children;
		if (location.className.split(" ").indexOf(classname) > -1) {
  			nodeList.push(location);
    }
    for (var i=0; i<seek.length; i++) {
  		searchChildren(seek[i],classname,nodeList);
    }
  	return nodeList;
  };
  searchChildren(where,classname,nodeList);
  return nodeList;
};