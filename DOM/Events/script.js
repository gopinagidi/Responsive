//select element
//addEventListener() ==> it is takes two parameaters
// 1.event Name
// 2.callback function
// what event,what to do

const head = document.querySelector("h3");
const btn = document.querySelector(".btn");

// btn.addEventListener('click',function(){
//     console.log('hello good night');
// })

// head.addEventListener('mouseover',function(){
//     head.style.color = 'blue'
// })

function changeColor() {
  const hasColor = head.classList.contains("head");
  //   if (hasColor) {
  //     head.classList.remove("head");
  //   } else {
  //     head.classList.add("head");
  //   }

  //   head.classList.toggle("head");

  hasColor ? head.classList.remove("head") : head.classList.add("head");
}

btn.addEventListener("click", changeColor);
