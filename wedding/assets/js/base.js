// const divtest = document.createElement("div");
const spinner = '<div class="text-center" id="spinner-div"><div style="margin-top:3.5rem;margin-bottom:2.5rem;"><div class="spinner-border" style="width: 3.2rem; height: 3.2rem;" role="status"></div></div></div>';

function showlocations(btnId,removeBtnId){
    const btn = document.getElementById(btnId).parentNode;
    const removeBtn = document.getElementById(removeBtnId).parentNode;
    // console.log(document.getElementById(btnId));
    // removeBtn.style.display="none";
    const xys = document.getElementById('spinner-div');
    document.getElementById(btnId).onclick=null;
    if (xys==null){
        console.log('true')
        appentSpinner = document.getElementById("destination-col");
        appentSpinner.insertAdjacentHTML("beforeend", 
    spinner);
    }else if(xys!=null){
        document.getElementById(removeBtnId).onclick=function(){showlocations(removeBtnId,btnId)};

        xys.innerHTML = '<div style="margin-top:3.5rem;margin-bottom:2.5rem;"><div class="spinner-border" style="width: 3.2rem; height: 3.2rem;" role="status"></div></div></div>';
    }
    
    setTimeout(function(){
        console.log(btnId)
        if(btnId=="destinationBtn-1"){
            gettinglocations();
        }else{
            console.log('else')
            gettingotherlocations();
        } 
    }, 1500);
};
function gettinglocations(){
    const xys = document.getElementById('spinner-div');
    console.log('called');
    xys.innerHTML ='<div class="text-center"><nav class="shadow-sm bg-light d-inline-block w-100 py-2 px-2 px-md-4 m-2 city-nav" style="width:10rem;border-radius: 4px;"  city="goa" onclick="cityNav(this)">Goa</nav><nav class="shadow-sm bg-light d-inline-block w-100 py-2 px-2 px-md-4 m-2 city-nav" style="width:10rem;border-radius: 4px;" city="delhi" onclick="cityNav(this)">Delhi</nav><nav class="shadow-sm bg-light d-inline-block w-100 py-2 px-2 px-md-4 m-2 city-nav" city="bombey" style="width:10rem;border-radius: 4px;" onclick="cityNav(this)">Bombey</nav><nav class="shadow-sm bg-light d-inline-block w-100 py-2 px-2 px-md-4 m-2" onclick="otherDes()" style="width:10rem;border-radius: 4px;">Other</nav></div>';
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
    xys.innerHTML ='<div class="text-center py-4"><h3>our top suggestions</h3><nav class="shadow-sm bg-light d-inline-block w-100 py-2 px-2 px-md-4 m-2 city-nav" onclick="cityNav(this)" city="goa" style="width:10rem;border-radius: 4px;">Goa</nav><nav class="shadow-sm bg-light d-inline-block w-100 py-2 px-2 px-md-4 m-2 city-nav" city="delhi" style="width:10rem;border-radius: 4px;" onclick="cityNav(this)">Delhi</nav><nav class="shadow-sm bg-light d-inline-block w-100 py-2 px-2 px-md-4 m-2 city-nav" city="bombey" style="width:10rem;border-radius: 4px;" onclick="cityNav(this)">Bombey</nav><nav class="shadow-sm bg-light d-inline-block w-100 py-2 px-2 px-md-4 m-2" style="width:10rem;border-radius: 4px;" onclick="cityNavAll(this)" >All</nav></div>';
}

// saving into session and adding class
function saveIt(sessionName,sessionVal,object,className){
    console.log(sessionVal)
    if (sessionVal==null){
        console.log(object.classList)
        object.classList.add(className)
    }else{
        const classCheck=object.parentNode.parentNode.parentNode.getElementsByClassName(className)
        if(classCheck.length>0){
            classCheck[0].classList.remove(className)
            // classCheck.classList.remove(className);
        }
        object.classList.add(className)
    }
    sessionStorage.setItem(sessionName, sessionVal);
    console.log(sessionVal)
}
function cityNav(object){
    console.log(object.getAttribute("city"));
    const objectCity = object.getAttribute("city");
    const topHotel = document.getElementById("tophotel");
    const hotels = topHotel.getElementsByClassName("owl-item");
    const citynav = document.getElementsByClassName("city-nav");
    for(var i=0;i<citynav.length;i++){
        citynav[i].classList.remove("bg-danger");
    }
    for(i=0;i<hotels.length;i++ ){
        if(hotels[i].firstChild.getAttribute('city')==objectCity){
            hotels[i].style.display="block";
            // hotels[i].classList.remove("bg-danger")
        }else{
            hotels[i].style.display="none";
        }
    }
    object.classList.add('bg-danger');

}
function cityNavAll(object){
    const topHotel = document.getElementById("tophotel");
    const hotels = topHotel.getElementsByClassName("owl-item");
    const citynav = document.getElementsByClassName("city-nav");
    for(var i=0;i<citynav.length;i++){
        citynav[i].classList.remove("bg-danger");
    }
    for(i=0;i<hotels.length;i++ ){
        hotels[i].style.display="block";

    }
    object.classList.add('bg-danger');
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