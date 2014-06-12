// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var nodeList = [];
  checkNodes(document.childNodes);

  function hasClass(node) {
    var foundClass = false;
    if (node.classList) {
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
      if (child.childNodes) {
        checkNodes(child.childNodes);
      } 
    })
  }
  return nodeList;
};
