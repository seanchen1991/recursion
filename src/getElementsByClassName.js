// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var nodeList = [];  //NodeList objects are collections of nodes such as those returned by Node.childNodes
  checkNodes(document.childNodes);  //Document.body returns the body or frameset node of the current document, or null if no such element exists

  function hasClass(node) {
    var foundClass = false;
    if (node.classList) {  //classList returns a token list of the class attribute of the element
      _.each(node.classList, function(element) {
        if (className == element) {
          foundClass = true;
        }
      })
    }
    return foundClass;
  }

  function checkNodes(children) {
    _.each(children, function(child) {
      if (hasClass(child)) {
        nodeList.push(child);
      }
      if (child.childNodes) {  //childNodes returns a collection of child nodes of the given element
        checkNodes(child.childNodes);
      } 
    })
  }
  return nodeList;
};
