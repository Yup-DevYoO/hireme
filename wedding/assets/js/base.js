// const divtest = document.createElement("div");
const spinner = '<div class="text-center" id="spinner-div"><div style="margin-top:3.5rem;margin-bottom:2.5rem;"><div class="spinner-border" style="width: 3.2rem; height: 3.2rem;" role="status"></div></div></div>';
function showlocations(btnId,removeBtnId){
    const btn = document.getElementById(btnId).parentNode;
    const removeBtn = document.getElementById(removeBtnId).parentNode;
    // console.log(document.getElementById(btnId));
    removeBtn.style.display="none";
    document.getElementById(btnId).onclick=null;
    appentSpinner = document.getElementById("destination-col");
    appentSpinner.insertAdjacentHTML("beforeend", 
    spinner);
    setTimeout(function(){
        if(btnId="destinationBtn-1"){
            gettinglocations();
        }else{
            gettingotherlocations();
        } 
    }, 1500);
};
function gettinglocations(){
    console.log('called');
    var xys = document.getElementById('spinner-div');
    xys.innerHTML ='<div class="text-center"><nav class="shadow-sm bg-light d-inline-block w-100 py-2 px-2 px-md-4 m-2" style="width:10rem;border-radius: 4px;">Goa</nav><nav class="shadow-sm bg-light d-inline-block w-100 py-2 px-2 px-md-4 m-2" style="width:10rem;border-radius: 4px;">Delhi</nav><nav class="shadow-sm bg-light d-inline-block w-100 py-2 px-2 px-md-4 m-2" style="width:10rem;border-radius: 4px;">Bombey</nav><nav class="shadow-sm bg-light d-inline-block w-100 py-2 px-2 px-md-4 m-2" onclick="otherDes()" style="width:10rem;border-radius: 4px;">Other</nav></div>';
};

function otherDes(){
    const locnav = document.getElementById("spinner-div");
    locnav.innerHTML = spinner;
    setTimeout(function(){ 
        gettingotherlocations(); 
    }, 1500);
}

function gettingotherlocations(){
    var xys = document.getElementById('spinner-div');
    xys.innerHTML ='<div class="text-center py-4"><h3>our top suggestions</h3><nav class="shadow-sm bg-light d-inline-block w-100 py-2 px-2 px-md-4 m-2" style="width:10rem;border-radius: 4px;">Goa</nav><nav class="shadow-sm bg-light d-inline-block w-100 py-2 px-2 px-md-4 m-2" style="width:10rem;border-radius: 4px;">Delhi</nav><nav class="shadow-sm bg-light d-inline-block w-100 py-2 px-2 px-md-4 m-2" style="width:10rem;border-radius: 4px;">Bombey</nav><nav class="shadow-sm bg-light d-inline-block w-100 py-2 px-2 px-md-4 m-2" style="width:10rem;border-radius: 4px;">This will show all you want</nav></div>';
}





// const loadmore = document.getElementById('show-more-trainer');
// var remainingElement=0;
// const loadmoreparent = loadmore.parentNode.parentNode
// const divtest = document.createElement("div")
// console.log(loadmore.type);
// loadmore.addEventListener('click',  
    
//     function(){;
//         loadmorespinner = loadmoreparent.appendChild(divtest);
    
//         loadmore.parentElement.style.display = 'none';
//         loadmorespinner.innerHTML = '<div style="margin-top:3.5rem;margin-bottom:2.5rem;"><div class="spinner-border" style="width: 3.2rem; height: 3.2rem; " role="status"></div></div>';
//         setTimeout(function(){ 
//             gettingTeachersFunction(); 
//         }, 1500)
//     }
// );
// function gettingTeachersFunction() {
//     // let currentItems = 2;
//     loadmoreparent.removeChild(divtest);
//     loadmore.parentElement.style.display = 'inline-flex';
//     const elementList = [...document.querySelectorAll('.row .teachers-column')];
//     console.log(elementList.length);
//     for (let i = 0; i < 2; i++) {
//         if (elementList[i]) {
//             elementList[i].style.display = 'block';
//             elementList[i].classList.remove('teachers-column');
//             remainingElement++;
//         }
//     }
//     // Load more button will be hidden after list fully loaded
  
//     if (elementList.length-remainingElement <= 0) {
//         loadmore.parentElement.parentElement.style.display = 'none';
//     }
// }