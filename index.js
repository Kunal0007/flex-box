document.querySelectorAll(".panel").forEach( panel => {
  panel.addEventListener("click" , function(){
    this.classList.toggle("open") ;
    this.classList.toggle("openactive") ;
});

});
