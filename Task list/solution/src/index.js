let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");
const selectClasses = ["border", "border-dark"];
let selected = false;
let visible = Array.from(document.querySelectorAll("li"));
let userItems = [];

const appendItem = (newItem) => {
  let li = document.createElement("li");
  li.innerHTML += `${newItem}`;
  li.classList.add("list-group-item");
  let btn = document.createElement("button");
  btn.classList.add("btn", "btn-danger", "btn-sm", "float-right", "delete");
  btn.innerHTML += "X";
  btn.addEventListener("click", removeItem);
  li.appendChild(btn);
  li.addEventListener("click", selectItem);
  itemList.appendChild(li);
};

const loadSaved = () => {
  const items = localStorage.getItem("items");
  if (items)
    items.split(",").forEach((item) => {
      appendItem(item);
      userItems.push(item);
    });
};

// Form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input value
  let newItem = document.getElementById("item").value;
  userItems.push(newItem);
  localStorage.setItem("items", userItems.join(","));
  appendItem(newItem);
});

// Filter event
filter.addEventListener("keyup", filterItems);

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      userItems = userItems.filter(
        (item) => e.target.parentElement.firstChild.textContent != item
      );
      localStorage.setItem("items", userItems.join(","));
      var li = e.target.parentElement;
      itemList.removeChild(li);
      visible = Array.from(
        document.querySelectorAll(".list-group-item")
      ).filter((e) => {
        return e.style.display != "none";
      });
    }
  }
}

// Filter Items
function filterItems(e) {
  if (selected) {
    selected = false;
    document.querySelector(".border").classList.remove(...selectClasses);
  }

  visible = [];
  var text = e.target.value.toLowerCase();
  var items = document.querySelectorAll("li");
  Array.from(items).forEach((el) => {
    if (el.firstChild.textContent.toLowerCase().indexOf(text) != -1) {
      visible.push(el);
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
}

// B dio
function selectItem(e) {
  if (e.target.tagName == "BUTTON") {
    return;
  }
  let listItemContent = e.target.firstChild.textContent;
  filter.value = listItemContent;
  filter.dispatchEvent(new KeyboardEvent("keyup"));
}

// C dio
document.onkeydown = checkKey;
function checkKey(e) {
  if (e.keyCode != "38" && e.keyCode != "40" && e.keyCode != 13) return;

  let visible = Array.from(
    document.querySelectorAll(".list-group-item")
  ).filter((e) => {
    return e.style.display != "none";
  });
  if (selected) {
    for (let i = 0; i < visible.length; i++) {
      if (visible[i].classList.contains("border")) {
        selectedIndex = i;
      }
    }

    e = e || window.event;
    if (e.keyCode == "38") {
      // UP
      visible[selectedIndex].classList.remove(...selectClasses);
      visible[
        selectedIndex == 0 ? visible.length - 1 : --selectedIndex
      ].classList.add(...selectClasses);
    } else if (e.keyCode == "40") {
      // DOWN
      visible[selectedIndex].classList.remove(...selectClasses);
      visible[
        selectedIndex == visible.length - 1 ? 0 : ++selectedIndex
      ].classList.add(...selectClasses);
    } else if (e.keyCode === 13) {
      visible[selectedIndex].click();
    }
  } else {
    selected = true;
    visible[0].classList.add(...selectClasses);
  }
}

(function () {
  loadSaved();
})();
