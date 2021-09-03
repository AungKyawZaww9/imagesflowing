// UI

const imageslides = document.querySelectorAll('.imageslide img');
// console.log(imageslides);
// console.log(imageslides.length);

const inputimage = document.getElementById('replaceimage');
// console.log(inputimage);

let idx = 0;
let number = 0;

// inputimage.src = `img/${number}.jpg`;


//add inputimage
function add(){
    // number++;

    // if(number > 6){
    //     number = 1;
    // }

    // inputimage.src = `img/${number}.jpg`;
    inputimage.src = `${url}${getallnumber()}`;
    // console.log(number);
}

//setinterval for inputimage
setInterval(add,1500);



//Link API
// let url = 'https://source.unsplash.com/1600x900/?car';
let url = 'https://source.unsplash.com';


function getramdomnumber(){
    return Math.floor(Math.random() * 10) + 300;
}
// console.log(getramdomnumber());



function getallnumber(){
    return `/${getramdomnumber()}x${getramdomnumber()}/?plants`;
}
// console.log(getallnumber());



//Change image
function changeimage(){
    if(idx > imageslides.length){
        idx = 0;
    }else if(idx < 0){
        idx = imageslides.length;
    }

    imageslides.forEach((imageslide)=>{
        // console.log(imageslide);
        imageslide.style.transform = `translate(${-idx * 120}%)`;
        imageslide.src = `${url}${getallnumber()}`;
        
    });   
    
}

changeimage();
setInterval(imgrun,1500);

function imgrun(){
    idx++;
    changeimage();
    add();
}

