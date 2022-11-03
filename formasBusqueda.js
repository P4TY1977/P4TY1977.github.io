// JavaScript Document
//Se oculta la forma de busqueda funcional y se manipulan sus valores a través de la forma visible que no es funcional
  document.getElementsByTagName("form")[1].style.display="none"
 

document.getElementsByTagName("form")[0][0].addEventListener("keypress", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementsByTagName("form")[0][1].click();
  }
});
  function buscar()
  {document.getElementsByTagName("form")[1][0].value=document.getElementsByTagName("form")[0][0].value; 
   document.getElementsByTagName("form")[1][1].click();
   }
   
   // document.getElementsByTagName("form")[0][0].addEventListener("keypress", buscar2, true);
   document.getElementsByTagName("form")[0][1].addEventListener("click", buscar, true);