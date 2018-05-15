// children: [Array of Node]
// data: {id: value}
// depth:
// parent:
// height:?

function stratify(nodes, data) {
  var root = Node(data[0][0])
  nodes.set(data[0][0], root);
  for(var i=0; i<data.length; i++) {
    append(nodes, data[i]);
  }
  return root;
}

function Node(id) {
  return {
    id: id
  }
}

function addChild(parent, child) {
  if(!parent.children)
    parent.children = [];
  parent.children.push(child);
  child.parent = parent;
}

function append(nodes, list) {
  var i = 0;
  var node;
  while(nodes.get(list[i])) {
    i++;
  }
  node = nodes.get(list[i-1]);
  while(i<list.length) {
    var newNode = Node(list[i]);
    nodes.set(list[i], newNode);
    addChild(node, newNode);
    node = newNode;
    i++;
  }
}


