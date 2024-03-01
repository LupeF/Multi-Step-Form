const nameCard = document.querySelector('.name');
const emailCard = document.querySelector('.email');
const phoneCard = document.querySelector('.phone');
const barOne = document.querySelector('.color-one');
const barTwo = document.querySelector('.color-two');
const barThree = document.querySelector('.color-three');
const nextBtn = document.getElementById('next-button');
const nextTwo = document.getElementById('next-two');
const previousOne = document.getElementById('previous-one');
const previousTwo = document.getElementById('previous-two');
const submitBtn = document.getElementById('submit');
//Card One Event Listener
nextBtn.addEventListener('click',(e) =>{
    let inputValue = document.getElementById('input-value');
    let name = inputValue.value;
    if(name === ''){
        alert('Please type your name');
    }else{
        emailCard.style.zIndex = '4';
        barTwo.style.width = '60%'
    }
})

// Card Two Event Listeners
previousOne.addEventListener('click', (e)=>{
    emailCard.style.zIndex = '2'
})
nextTwo.addEventListener('click',(e) =>{
    let inputValue = document.getElementById('email-value');
    let name = inputValue.value;
    if(name === ''){
        alert('Please type your email');
    }else{
        phoneCard.style.zIndex = '5';
        barThree.style. width = '100%'
    }
})

//Card Three Event Listener
previousTwo.addEventListener('click',(e)=>{
    phoneCard.style.zIndex = '1';
})
submitBtn.addEventListener('click',(e)=>{
    let inputValue = document.getElementById('phone-value');
    let name = inputValue.value;
    if(name === ''){
        alert('Please type your Phone number');
    }else{
        phoneCard.style.zIndex = '5';
        barThree.style. width = '100%'
    }
})