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
            errorMessageIncrease = true;
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

// COMMENT SECTION TASK

const titleForm = document.getElementById('title2');
const bodyForm = document.getElementById('body2');
const ratingForm = document.getElementById('rating2');
const authorForm = document.getElementById('author2');
const commitButton = document.getElementById('comment-button');
const newArray = [];

commitButton.addEventListener("click", ()=>{
    const title = titleForm.value;
    const body = bodyForm.value;
    const rating = parseInt(ratingForm.value);
    const author = authorForm.value;

    if (!(title && body && !isNaN(rating) && author)){
        if (body.length >= 55){
            if (rating < 1 || rating >5){
                alert(" Рейтинг должен быть в пределах от 1 до 5");
            }
            let bodyMin = body.slice(0, 55) + "...";
            }
        alert("Поля должны быть заполонены");
        const comment = {
            id: newArray.length + 1,
            title,
            body,
            rating,
            author
        }
        let newComment = document.createElement("div");
        newComment.classList.add('comment');
        };

    let newComment = document.createElement("div");
    newComment.classList.add('comment');


})


