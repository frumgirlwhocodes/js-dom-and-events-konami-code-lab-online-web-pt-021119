const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
 document.body.addEventListener('keydown', oneKeydown)
}

let index= 0
function oneKeyDown(e) {
 const key = parseInt(e.detail || e.which);
 
}