let header = document.getElementById("header");

let mainButton = document.getElementById('btn-main');
let sliderButton = document.getElementById('btn-slider');



let showHanlder = (event) => {
   header.classList.remove('hide');
   header.classList.add('wareny');
}

let hideHandler = () => {
   header.classList.remove('wareny');
   header.classList.add('hide');
}


mainButton.addEventListener('click', showHanlder);

sliderButton.addEventListener('click', hideHandler);



