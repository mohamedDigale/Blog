

const element=document.querySelectorAll(".btn")
var like=document.getElementById("bu")
var h1=document.querySelectorAll("h2")
element.forEach(button => {
    button.addEventListener('click', () => {
      button.style.backgroundColor="#3f4";
      h1.style.color="#fa4";
    })
  })
  
