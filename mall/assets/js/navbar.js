window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("navbar").style.top = "0px";
  } else if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.top = "-80px";
  }else{
    document.getElementById("navbar").style.top = "0";
  }
}

function navToggle(object) {
  let dataTarget = document.getElementById(object.getAttribute("data-target"));
  const navToggleSpan = object.getElementsByTagName('span');
  let dataTargetUl = dataTarget.childNodes[1];
  if (dataTargetUl.classList.contains('custom-show')){

    for(i=0;i<navToggleSpan.length;i++){navToggleSpan[i].classList.remove('span'+(i+1));}
    object.style.cssText=""
    dataTargetUl.classList.remove("custom-show");
    dataTarget.style.cssText="opacity:0;display:inherit;";
    setTimeout(function(){ dataTarget.style.display="none"; },200 );

  }else{

    dataTarget.style.display="inherit";
    for(i=0;i<navToggleSpan.length;i++){navToggleSpan[i].classList.add('span'+(i+1));}
    setTimeout(function(){ 
    dataTargetUl.classList.add("custom-show");
    dataTarget.style.cssText="display:inherit;opacity:1;"; },1 );

  }
}
function navToggleDiv(event, object) {
    if(screen.width < 900){
      let dataTargetUl = object.childNodes[1];
      const navToggleSpan = document.getElementsByClassName("navbar-toggler")[0].getElementsByTagName('span');
      if(dataTargetUl.classList.contains("custom-show") && event.target.nodeName=="DIV"){
        for(i=0;i<navToggleSpan.length;i++){navToggleSpan[i].classList.remove('span'+(i+1));}
        dataTargetUl.classList.remove("custom-show");
        object.style.opacity="0";
        setTimeout(function(){ object.style.display="none"; },200 );
      }
    } 
};
// document.getElementByClass("navbar-togler.custom-nav-tog").addEventListener("click",function(e){
//   console.log(e)
// });


