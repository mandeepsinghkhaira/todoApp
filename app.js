//selectors
const userInput = document.querySelector("#userInput");
const ul = document.querySelector(".list-group");

//ul style changes
ul.style.margin = "auto";
ul.style.width = "50%";

//event listeners
function loadEventListeners() {
  userInput.addEventListener("keypress", addToList);
  ul.addEventListener("click", deleteTask);
}

loadEventListeners();

//functions for events
function addToList(e) {
  if (e.key === "Enter" && userInput.value != "") {
    if (userInput.value.length < 20) {
      let li = createLi();
      let span = createSpan();
      li.appendChild(span);
      ul.appendChild(li);
    } else {
      alert("Too many characters entered");
    }
    userInput.value = "";
  }
}

function createLi() {
  const li = document.createElement("li");
  li.innerText = userInput.value;
  li.className = "list-group-item list-group-item-dark";
  return li;
}

function createSpan() {
  const span = document.createElement("span");
  span.style.display = "inline";
  span.className = "badge badge-primary badge-pill";
  span.innerText = "X";
  span.style.float = "right";
  span.style.textAlign = "right";
  span.style.color = "black";
  return span;
}
//EVENT DELEGATION!!!!!!!!!!!!!!
function deleteTask(e) {
  var element = e.target;
  if (element.className == "badge badge-primary badge-pill") {
    element.parentElement.remove();
  }
}
