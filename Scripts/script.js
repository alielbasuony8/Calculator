function insert (buttton){
  document.querySelector("#result").value += buttton;
}

function equal(){
  let last = document.querySelector("#result").value;
  if(last){
    document.querySelector("#result").value = eval(last);
  }
}

function clearAll(){
  document.querySelector("#result").value = "";
}

function convert(){
  if(document.querySelector("#result").value !== ''){
    document.querySelector("#result").value *= -1;
  }
}

function removeLast(){
  let last = document.querySelector("#result").value;
  document.querySelector("#result").value = last.substring(0,last.length-1);
}

const toggle = document.querySelector(".toggle");
toggle.onclick = () =>{
  toggle.classList.toggle("toggle--isLight");
  document.querySelector("body").classList.toggle("toggle--isLight")
  document.querySelector(".calculator").classList.toggle("toggle--isLight");
  document.querySelector("#result").classList.toggle("toggle--isLight");
  document.querySelector("p").classList.toggle("toggle--isLight");
  document.querySelectorAll(".btn").forEach((Element) =>{
    Element.classList.toggle("toggle--isLight")
  })
  
}