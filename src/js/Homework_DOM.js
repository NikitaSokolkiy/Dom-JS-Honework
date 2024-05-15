// COUNTER TASK
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

// TASK BLOCK

const titleInput = document.getElementById('title');
const bodyInput = document.getElementById('body');
const ratingInput = document.getElementById('rating');
const authorInput = document.getElementById('author');
const submitButton = document.querySelector('.form-comment-button');
const comments = [];
// console.log(submitButton);
// console.log(titleInput);
submitButton.addEventListener("click", ()=>{
    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();
    const rating = parseInt(ratingInput.value);
    const author = authorInput.value.trim();

    if(title && body && !isNaN(rating) && author){
        const comment = {
            id: comments.length + 1,
            title,
            body,
            rating,
            author
        };
        comments.push(comment);

        titleInput.value = '';
        ratingInput.value = '';
        bodyInput.value = '';
        authorInput.value = '';

        console.log(`Массив с комментариями:`, comments)
    } else {
        alert("Пожалуйста, заполните все поля корректно.");
    }
});
