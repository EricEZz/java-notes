/* const form = document.querySelector("#form");
console.log(form);

const DOMSelectors = { 
    form:document.querySelector("#form"),
    firstName:document.querySelector(".first-name"),
    h2s:document.querySelectorAll("h2"),
//select the text box 
// select all the h2s in one property
};
//console.log(DOMSelectors.h2s);
DOMSelectors.form.addEventListener("submit",function(event){
   event.preventDefault();
   console.log(DOMSelectors.firstName.value);
   userobject
   cardobject 
   DOMSelectors.h2s.forEach(
    (el)=> (el.textContent = DOMSelectors.firstName.value)
   );
}); */
const DOMSelectors = {
    button: document.getElementById("btn"),
    box: document.getElementById("container-box"),
    input: document.querySelector('#input'),
};

DOMSelectors.box.insertAdjacentHTML("beforebegin",
'<h1>We are an H1</h1>');