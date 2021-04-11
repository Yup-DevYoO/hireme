// const selectFoil;
const width = document.getElementById("breedte");
const height = document.getElementById("hoogte");
const ammount = document.getElementById("aantal");
const meters = document.getElementsByClassName("meters")[0];
var foilPrice;
var wha;
var deliveryPrice;
var designPrice;
var squeezePrice;

var total = 0;

const selectFoilOption={'op-maat':25,'andere-vormen':30,'met-logo':40};
//if everthing above 0.5meter square selecteerFolieAbove + width*height*amount* selectFoilAboveMultiply
const selectFoilAboveMultiply={'op-maat':40,'andere-vormen':50,'met-logo':70}

// ########### plaatsing selection price
const areaSelection={0:false,'ANT-BE':50,'LIM-BE':100,'OOST-BE':100,'VLBR-BE':150,'WVLD-BE':150,'WABR-BE':150,'HENE-BE':170,'LUIK-BE':170,'LUX-BE':170,'NAMEN-BE':170,'GELD-NL':170,'LIM-NL':150,'NOBR-NL':150,'ZEE-NL':170,'ZUHO-NL':170}
// multiply with square meter + plaasting selection
const areaSelectionMultiply={0:false,'ANT-BE':20,'LIM-BE':30,'OOST-BE':30,'VLBR-BE':40,'WVLD-BE':40,'WABR-BE':40,'HENE-BE':40,'LUIK-BE':40,'LUX-BE':40,'NAMEN-BE':40,'GELD-NL':40,'LIM-NL':40,'NOBR-NL':40,'ZEE-NL':40,'ZUHO-NL':40}



const totalPriceBox = document.getElementsByClassName("car-rent-price")[0]


function checkVal(checkingValue){
    if (checkingValue.value != null && checkingValue.value != 0 && checkingValue.value != undefined){
        return true;
    }else{
        return false;
    }
}

// function foil(){
    
// }


function whaChecking(){
    if (checkVal(width) && width.value >= 1150 && checkVal(height) && height.value >= 1150){
        document.getElementById("width-msg").classList.remove("d-none");
    }else{
        document.getElementById("width-msg").classList.add("d-none");
    }
    
    if (checkVal(width) && checkVal(height) && checkVal(ammount)){
    wha = width.value * height.value * ammount.value;
    meters.innerHTML = wha/1000000+" m²";
    var selectedFoil = $('input[name=selected-foil]:checked').val();
    // console.log("amount"+wha+' and '+checkVal(width));
        if (wha/1000000 < 0.5){
            foilPrice = selectFoilOption[selectedFoil];
            // console.log(foilPrice);
        }else{
            foilPrice = selectFoilOption[selectedFoil] + (selectFoilAboveMultiply[selectedFoil] * (width.value * height.value / 1000000) );
            // console.log($('input[name=selected-foil]:checked').val()+'no');
        }
    // console.log(document.getElementById("deliver-option").getElementsByClassName("active")[0].getElementsByTagName("INPUT")[0].name);
    // .getElementsByClassName("active")[0].getElementsByTagName("INPUT")[0].name
    }else{
        foilPrice = 0
    }

    
}

function deliveryCal(){

    try{
        var deliverOp = document.getElementById("deliver-option").getElementsByClassName("active")[0].getElementsByTagName("INPUT")[0];
        // console.log("deliverOp="+deliverOp.name);
        if (deliverOp.name == "afhalen"){
            deliveryPrice = 0;
            document.getElementById("tab-content-area").classList.add("d-none");
            // console.log("deliverOp="+deliveryPrice);
        }else if(deliverOp.name == "levering"){
            var country = document.getElementById("land").value;
            if (country == "BE"){
                deliveryPrice = 15;
            }else if(country != 0){
                deliveryPrice = 20;
            }else{
                deliveryPrice=0;
            }
            document.getElementById("tab-content-area").classList.remove("d-none");
            // console.log("deliverOp else"+deliveryPrice);
        }else if(deliverOp.name == "plaatsing"){
            var area = document.getElementById("provincie").value;
            deliveryPrice = areaSelection[area] + areaSelectionMultiply[area] * width.value * height.value * ammount.value / 1000000;
            document.getElementById("tab-content-area").classList.remove("d-none");
            // console.log("deliverOp else2="+deliveryPrice);
        }else{
            document.getElementById("tab-content-area").classList.remove("d-none");
            // console.log("deliverOp elselast="+deliveryPrice);
            deliveryPrice = 0;
        }
    }catch{
        deliveryPrice = 0;
    }
}

function drawing(){
    try{
        var logoDrawing = document.getElementById("logo-drawing-op").getElementsByClassName("active")[0];
        // if (!logoDrawing){
        //     break;
        // }
        logoDrawing = logoDrawing.getElementsByTagName("INPUT")[0]
        // console.log("logoOp = "+logoDrawing.value);
        var pieces = document.getElementById("aantaltekeningen");
        // console.log("piece = "+pieces)
        if (logoDrawing.value == "logoja"){
            if (checkVal(pieces)){
                designPrice = 35 * pieces.value ;
            }else {
                designPrice = 0;
            }

        }else if(logoDrawing.value == "logonee"){
            designPrice = 0;
        }
        // console.log(designPrice);    
    }catch{
        designPrice = 0;
    }
}

function squeeze(){
    try{
        var squeezeOp = document.getElementById("squeeze").getElementsByClassName("active")[0].getElementsByTagName("INPUT")[0];
        // console.log("logoOp = "+logoDrawing.value);
        var squeeze = squeezeOp.value;
        if (squeeze == "Yes"){
            squeezePrice = 4;
        }else{
            squeezePrice = 0;
        }
    }catch{
        squeezePrice = 0
    }
}

// var foilPrice;
// var wha;
// var deliveryPrice;
// var designPrice;
// var squeezePrice;
window.addEventListener('keyup',function(e){
    // console.log("running")
    whaChecking();
    drawing();
    deliveryCal();
    squeeze();
    // var allPrice = [foilPrice,deliveryPrice,designPrice,squeezePrice]
    // console.log('fp='+foilPrice+", dp = "+deliveryPrice+", dsnP = "+designPrice+", sP = "+squeezePrice)
    // if (){
    // console.log("foilp= "+foilPrice+", deliverP"+deliveryPrice+", designP = "+designPrice+",squeeze"+squeezePrice);
    total = ((foilPrice+deliveryPrice+designPrice+squeezePrice)*1.21).toFixed(2);
    // console.log(total);
    totalPriceBox.innerHTML = "€"+total;
    // console.log(total = '+total+if');
    // }else{

        // for(i=0;i <= allPrice.length;i++){
        //     if(allPrice[i]==false || allPrice == undefined || allPrice == null){
        //         allPrice[i] = 0;
        //     }
        //     total += allPrice[i];
        //     console.log(allPrice[i]+', total = '+total+', allprice = '+allPrice+', i = '+i)
        //     // console.log(total);
        // }
        // totalPriceBox = "€"+ total;
    // }
    console.log('fp='+foilPrice+", dp = "+deliveryPrice+", dsnP = "+designPrice+", sP = "+squeezePrice+", total = "+total)
    // console.log(totalPriceBox.innerHTML);
})
window.addEventListener('click',function(e){
    // console.log("running")
    whaChecking();
    drawing();
    deliveryCal();
    squeeze();
    // var allPrice = [foilPrice,deliveryPrice,designPrice,squeezePrice]
    console.log('fp='+foilPrice+", dp = "+deliveryPrice+", dsnP = "+designPrice+", sP = "+squeezePrice)
    // if (){
    // console.log("foilp= "+foilPrice+", deliverP"+deliveryPrice+", designP = "+designPrice+",squeeze"+squeezePrice);
    total = ((foilPrice+deliveryPrice+designPrice+squeezePrice)*1.21).toFixed(2);
    // console.log(total);
    totalPriceBox.innerHTML = "€"+total;
    console.log('fp='+foilPrice+", dp = "+deliveryPrice+", dsnP = "+designPrice+", sP = "+squeezePrice+", total = "+total)
    // console.log(total = '+total+if');
    // }else{

        // for(i=0;i <= allPrice.length;i++){
        //     if(allPrice[i]==false || allPrice == undefined || allPrice == null){
        //         allPrice[i] = 0;
        //     }
        //     total += allPrice[i];
        //     console.log(allPrice[i]+', total = '+total+', allprice = '+allPrice+', i = '+i)
        //     // console.log(total);
        // }
        // totalPriceBox = "€"+ total;
    // }
    // console.log(totalPriceBox.innerHTML);
})
