/*ID Selector 
=============
==> select the element or group of elements the we want
==> Decide the effect we want to apply to the selection
*/

// ID ==> document.getElementById('idname')

const heading = document.getElementById("heading");
heading.style.color = "red";

const btn = document.getElementById("btn");
btn.style.color = "#fff";
btn.style.backgroundColor = "blue";

/* Tag Name Selector
=====================
==>  It is used to we can select the tags
==>  It gives HtmlCollection it is like a array
==>  we can use index,length,forEach() method but not use array methods
 */

// TAG ==> document.getElementsByTagName('tagname')

const tag = document.getElementsByTagName("h2");
// console.log(tag.length);
// console.log(tag);
tag[1].style.color = "blue";

const ul = document.getElementsByTagName("ul");
// console.log(ul);

const items = document.getElementsByTagName("li");
// console.log(items);
items[2].style.color = "orange";

const betterItems = [...items];
betterItems.forEach(function (item) {
  //   console.log(item);
});
console.log(betterItems);

/* 
Class Name Selector
===================
==> select the element or group of elements the we want
==> Decide the effect we want to apply to the selection
*/

//Class = getElementsByClassName('classname');
const special = document.getElementsByClassName("special");
// console.log(special);
special[1].style.color = "darkgreen";

/* querySelector and querySelector all
======================================
==> select the element or group of elements the we want
==> Decide the effect we want to apply to the selection
 */

//querySelector('any css'); - selects single
//querySelectorAll('any css'); - selects all

const result = document.querySelector("#result");
result.style.backgroundColor = "rgba(0,0,0,0.2)";
// result.style.color='red'

const banana = document.querySelector("ul li:nth-child(4)");
banana.style.color = "yellow";
// console.log(banana);

// console.log(result);

/* querySelectorAll()
===================
==>it is used in most cases
==> NodeList - objects are collections of nodes
==> can run foreach() 
==> turn them into array - spread operator[...]
==> after that can use any array properties and methods
*/

const normal = document.querySelectorAll(".normal");
// console.log(normal);
normal.forEach((item) => {
  item.style.color = "tomato";
});
