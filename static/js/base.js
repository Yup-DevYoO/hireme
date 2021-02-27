const loadmore = document.getElementById('show-more-trainer');
var remainingElement=0;
const loadmoreparent = loadmore.parentNode.parentNode
const divtest = document.createElement("div")
console.log(loadmore.type);
loadmore.addEventListener('click',  
    
    function(){;
        loadmorespinner = loadmoreparent.appendChild(divtest);
    
        loadmore.parentElement.style.display = 'none';
        loadmorespinner.innerHTML = '<div style="margin-top:3.5rem;margin-bottom:2.5rem;"><div class="spinner-border" style="width: 3.2rem; height: 3.2rem; " role="status"></div></div>';
        setTimeout(function(){ 
            gettingTeachersFunction(); 
        }, 1500)
    }
);
function gettingTeachersFunction() {
    // let currentItems = 2;
    loadmoreparent.removeChild(divtest);
    loadmore.parentElement.style.display = 'inline-flex';
    const elementList = [...document.querySelectorAll('.row .teachers-column')];
    console.log(elementList.length);
    for (let i = 0; i < 2; i++) {
        if (elementList[i]) {
            elementList[i].style.display = 'block';
            elementList[i].classList.remove('teachers-column');
            remainingElement++;
        }
    }
    // Load more button will be hidden after list fully loaded
  
    if (elementList.length-remainingElement <= 0) {
        loadmore.parentElement.parentElement.style.display = 'none';
    }
}