//selecting popup, overlay and button
var popup=document.querySelector(".popup-input")
var overlay=document.querySelector(".overlay")
var addpopupbutton=document.getElementById("add-popup")

addpopupbutton.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.display="block"
})
//select cancel butt
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault
    overlay.style.display="none"
    popup.style.display="none"
})

//select the container,add-book,book-title-input,book-author-input,book-descript-input
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var bookdes = document.getElementById("book-descript-input")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${booktitle.value}</h2>
        <h3>${bookauthor.value}</h3>
        <p>${bookdes.value}</p>
        <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popup.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}