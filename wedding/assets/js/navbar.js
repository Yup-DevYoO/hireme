window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("navbar").style.cssText="top:0;box-shadow: rgb(0 0 0 / 8%) 0px 0.125rem 0.25rem;";
  } else if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.cssText="top:-80px;box-shadow: none;";
  }else{
    document.getElementById("navbar").style.cssText="top:0;box-shadow: none;";
  }
}



