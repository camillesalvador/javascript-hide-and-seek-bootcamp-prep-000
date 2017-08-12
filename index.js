function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(".target")
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll(".ranked-list")

  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i] + n)
  }
}

function deepestChild() {
  var curr = document.querySelector("div#grand-node")
  var next
  while(curr) {
    if(curr.children.length === 0) {
      return curr
    }

    curr = curr.children[0]
  }
  return null
}
