var addpopupbtn = document.getElementById("add-popup-btn");
var overlay = document.querySelector(".overlay")
var popupbox = document.querySelector(".popup-box")
addpopupbtn.addEventListener("click", function () {
    popupbox.style.display = "block"
    overlay.style.display = "block"

})

var cancelbtn = document.getElementById("cancel-btn")
cancelbtn.addEventListener("click", function (event) {
    event.preventDefault()
    popupbox.style.display = "none"
    overlay.style.display = "none"
})

var container = document.querySelector(".container")
var addbookbtn = document.getElementById("add-bookbtn")
var titleinput = document.getElementById("work-title-input")
var timeinput = document.getElementById("time-input")
var whattodo = document.getElementById("whattodo")

addbookbtn.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "bookcontainer")
    div.innerHTML = `<h2>${titleinput.value}</h2>
            <h5>${timeinput.value}</h5>
            <p>${whattodo.value} </p>
            <button onclick="deleteitem(event)">delete</button>`
    container.append(div)
    titleinput.value="";
    timeinput.value="";
    whattodo.value =""

    popupbox.style.display = "none"
    overlay.style.display = "none"

    
})

function deleteitem(event) {
    event.target.parentElement.remove()
}
