let fdw_drop = 0;
let rdw_drop = 0;
let tuning_drop = 0;

let blackcarmat = document.getElementById("blackcolor");
let beigecarmat = document.getElementById("beigecolor");
let carmatimage = document.getElementById("carmatsimage");
let blackcolorclick = document.getElementById('blackcolorclick');
let beigecolorclick = document.getElementById('beigecolorclick');

let fdw_dropdown = document.getElementById('fdw-dropdown');
let rdw_dropdown = document.getElementById('rdw-dropdown');
let tuning_shop_goods = document.getElementById('tuning-shop-goods');

let blackcarrim = document.getElementById("blackcolorrim");
let bronzecarrim = document.getElementById("bronzecolor");
let silvercarrim = document.getElementById("silvercolor");
let blackcarrimclick = document.getElementById("blackcolorrimclick");
let bronzecarrimclick = document.getElementById("bronzecolorclick");
let silvercarrimclick = document.getElementById("silvercolorclick");
let carrimimage = document.getElementById("carrimim")


fdw_dropdown.onclick = function(){
    if(fdw_drop == 0){
        fdw_dropdown.style.backgroundColor = 'rgb(225, 225, 225)';
        document.getElementById('fdproducts').style.display = 'flex';
        fdw_drop +=1;
        console.log(fdw_drop)
    }
    else if(fdw_drop==1){
        document.getElementById('fdproducts').style.display = 'none';
        fdw_dropdown.style.backgroundColor = 'white';
        fdw_drop = 0;
        console.log(fdw_drop)
    }
}

rdw_dropdown.onclick = function(){
    if(rdw_drop == 0){
        rdw_dropdown.backgroundColor = 'rgb(225, 225, 225)';
        document.getElementById('rdproducts').style.display = 'flex';
        rdw_drop +=1;
    }
    else if(rdw_drop==1){
        document.getElementById('rdproducts').style.display = 'none';
        rdw_dropdown.style.backgroundColor = 'white';
        rdw_drop = 0;
    }
}

tuning_shop_goods.onclick = function(){
    if(tuning_drop == 0){
        tuning_shop_goods.backgroundColor = 'rgb(225, 225, 225)';
        document.getElementById('carmats').style.display = 'flex';
        document.getElementById('carrims').style.display = 'flex';
        document.getElementById('steeringwheel').style.display = 'flex';
        document.getElementById('taillight').style.display = 'flex';
        tuning_drop +=1;
    }
    else if(tuning_drop==1){
        document.getElementById('carmats').style.display = 'none';
        document.getElementById('carrims').style.display = 'none';
        document.getElementById('steeringwheel').style.display = 'none';
        document.getElementById('taillight').style.display = 'none';
        tuning_shop_goods.style.backgroundColor = 'white';
        tuning_drop = 0;
    }
}

blackcarmat.onclick = function(){
    // blackcarmat.style.width = '3%';
    // blackcarmat.style.height = '80%';
    // blackcarmat.style.marginRight = '11px';   
    // blackcarmat.style.border = '3px solid green';
    // blackcarmat.style.boxShadow = 'none';
    blackcolorclick.style.display = 'block';
    beigecarmat.style.display = 'block';
    blackcarmat.style.display = 'none';
    beigecolorclick.style.display = 'none';
    carmatsimage.src = './images_videos/car_mats.jfif'
}

beigecarmat.onclick = function(){
    // beigecarmat.style.width = '3%';
    // beigecarmat.style.height = '80%';
    // beigecarmat.style.marginRight = '11px';   
    // beigecarmat.style.border = '3px solid green';
    // beigecarmat.style.boxShadow = 'none';
    blackcolorclick.style.display = 'none';
    beigecarmat.style.display = 'none';
    blackcarmat.style.display = 'block';
    beigecolorclick.style.display = 'block';
    carmatimage.src = './images_videos/beige_car_mats.jpg';
}

blackcarrim.onclick = function(){
    // blackcarmat.style.width = '3%';
    // blackcarmat.style.height = '80%';
    // blackcarmat.style.marginRight = '11px';   
    // blackcarmat.style.border = '3px solid green';
    // blackcarmat.style.boxShadow = 'none';
    blackcarrimclick.style.display = 'block';
    bronzecarrim.style.display = 'block';
    silvercarrim.style.display = 'block';
    blackcarrim.style.display = 'none';
    bronzecarrimclick.style.display = 'none';
    silvercarrimclick.style.display = 'none';
    carrimimage.src = './images_videos/car_rims.jfif'
}

bronzecarrim.onclick = function(){
    // beigecarmat.style.width = '3%';
    // beigecarmat.style.height = '80%';
    // beigecarmat.style.marginRight = '11px';   
    // beigecarmat.style.border = '3px solid green';
    // beigecarmat.style.boxShadow = 'none';
    blackcarrimclick.style.display = 'none';
    bronzecarrim.style.display = 'none';
    silvercarrim.style.display = 'block';
    blackcarrim.style.display = 'block';
    bronzecarrimclick.style.display = 'block';
    silvercarrimclick.style.display = 'none';
    carrimimage.src = './images_videos/car_rims_brown.jpg';
}

silvercarrim.onclick = function(){
    // beigecarmat.style.width = '3%';
    // beigecarmat.style.height = '80%';
    // beigecarmat.style.marginRight = '11px';   
    // beigecarmat.style.border = '3px solid green';
    // beigecarmat.style.boxShadow = 'none';
    blackcarrimclick.style.display = 'none';
    bronzecarrim.style.display = 'block';
    silvercarrim.style.display = 'none';
    blackcarrim.style.display = 'block';
    bronzecarrimclick.style.display = 'none';
    silvercarrimclick.style.display = 'block';
    carrimimage.src = './images_videos/car_rims_silver.jfif';
}

// blackcarmat.addEventListener("click", blackcarm);
// beigecarmat.addEventListener("click", beigecarm);

// function blackcarm(){
//     blackcarmat.style.width = '3%';
//     blackcarmat.style.height = '80%';
//     blackcarmat.style.marginRight = '11px';   
//     blackcarmat.style.border = '3px solid green';
//     blackcarmat.style.boxShadow = 'none';
//     carmatsimage.src = './images_videos/car_mats.jfif'
// }

// function beigecarm(){
//     beigecarmat.style.width = '3%';
//     beigecarmat.style.height = '80%';
//     beigecarmat.style.marginRight = '11px';   
//     beigecarmat.style.border = '3px solid green';
//     beigecarmat.style.boxShadow = 'none';
//     carmatsimage.src = './images_videos/beige_car_mats.jpg'
// }


