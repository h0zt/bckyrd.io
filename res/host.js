 /**NAVIGATION MOB MENU
  * **/
 function opnNAV() {
    var element = document.getElementById("navLNK")
    var element2 = document.getElementById("navMOB")
    element2.classList.toggle("change");
    element.classList.toggle("nav");
}

/**ON PAGE SCROLL
 */
const scrl2 = ScrollReveal({ 
  origin: 'left',distance:'200px',
  duration:400,reset:true
});
scrl2.reveal('h1,#_7 img',{interval:200});
const scrl = ScrollReveal({ 
    origin: 'top',distance:'200px',
    duration:400,reset:true
});
scrl.reveal('video,.img,#_7 h1',{interval:200});








/**ACCORDION
 */
function initAccordion(accordionElem){
  //when panel is clicked, handlePanelClick is called.          
  function handlePanelClick(event){
      showPanel(event.currentTarget);
  }
//Hide currentPanel and show new panel.  
  function showPanel(panel){
    //Hide current one. First time it will be null. 
      var expandedPanel = accordionElem.querySelector(".active");
      if (expandedPanel){expandedPanel.classList.remove("active");}
      //Show new one
      panel.classList.add("active");
  }
  var allPanelElems = accordionElem.querySelectorAll(".panel");
  for (var i = 0, len = allPanelElems.length; i < len; i++){
        allPanelElems[i].addEventListener("click", handlePanelClick);
  }
  //By Default Show first panel
  showPanel(allPanelElems[0])
}
initAccordion(document.getElementById("accordion"));







/***
 * SHUFFLE THE GALLERY 
 * MASONRY IMAGES
 */
 var counter = 0;
$('.brick img').each(function(i) {
   if (i == 0) {counter = 0;} else {counter++; }
   if (counter < 9) { $(this).addClass('show');
   } else { $(this).addClass('hide');}
});
function shuffleRandomLogos(remove, add) {
  const logo = $("."+remove).toArray();
  //const logo = $('.images'+remove).toArray();
  //const logo = $(".images img").toArray();
  const logoLength = logo.length;
  const randomNum = Math.floor(Math.random()*logoLength);
  const randomLogo = logo[randomNum];
  $(randomLogo).removeClass(remove);
  $(randomLogo).addClass(add);
}
window.setInterval(function(){
  // remove a cat
  shuffleRandomLogos("show", "hide");
  // display a cat
  shuffleRandomLogos("hide", "show");
}, 500);