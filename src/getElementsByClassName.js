// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (classname) {
  var where = document.documentElement;
  var nodeList = [];

  var searchChildren = function(location) {
  	debugger;
  	var seek = location.children;
  	console.log(seek);
  	for (var i=0; i<seek.length; i++) {
  		if (seek[i].className === classname) {
  			nodeList.push(seek[i]);
  			console.log(seek[i]);
  		}
  	}
  	if (seek.length > 1) {
  		searchChildren(seek);
  	}
  };
  searchChildren(where);
  return nodeList;
};

//Internet:
// document.getElementsByClassName = function(cl) {
// var retnode = [];
// var myclass = new RegExp('\\b'+cl+'\\b');
// var elem = this.getElementsByTagName('*');
// for (var i = 0; i < elem.length; i++) {
// var classes = elem[i].className;
// if (myclass.test(classes)) retnode.push(elem[i]);
// }
// return retnode;
// }; 

// var htmlStrings = [
//   "<p class='targetClassName'></p>",
//   "<p class='otherClassName targetClassName'></p>",
//   "<p><p class='targetClassName'></p></p>",
//   "<p><p class='targetClassName'><p class='targetClassName'></p></p></p>",
//   "<p><p></p><p><p class='targetClassName'></p></p></p>",
//   "<p><p class='targetClassName'></p><p class='targetClassName'></p></p>",
//   "<p><div class='somediv'><div class='innerdiv'><span class='targetClassName'>yay</span></div></div></p>"
// ];