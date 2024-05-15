
const decreaseBtn = document.querySelector('.decrease-btn');
const increaseBtn = document.querySelector('.increase-btn');
const counter = document.querySelector('.increase-decrease');
let errorMessageDecrese = false;
let errorMessageIncrease = false

increaseBtn.addEventListener("click", increaseCounter);
decreaseBtn.addEventListener("click", decreaseCounter);


function increaseCounter (){
    if (parseInt(counter.value) >= 10){
        if(!errorMessageIncrease) {
            alert("Значение не может быть больше 10!");
            errorMessageDecrese = true;
        }
    } else {
        counter.value = parseInt(counter.value) + 1;
    }
}
function decreaseCounter (){
    if (parseInt(counter.value) <= 0){
        if(!errorMessageDecrese) {
            alert("Значение не может быть меньше 0!");
            errorMessageDecrese = true;
        }
    } else {
        counter.value = parseInt(counter.value) - 1;
    }
}

