// COUNTER TASK
const decreaseBtn = document.querySelector('.decrease-btn');
const increaseBtn = document.querySelector('.increase-btn');
const counter = document.querySelector('.increase-decrease');
let errorMessageDecrease = false;
let errorMessageIncrease = false

increaseBtn.addEventListener("click", increaseCounter);
decreaseBtn.addEventListener("click", decreaseCounter);


function increaseCounter (){
    if (parseInt(counter.value) >= 10){
        if(!errorMessageIncrease) {
            alert("Значение не может быть больше 10!");
            errorMessageIncrease = true;
        }
        increaseBtn.disabled;

    } else {
        counter.value = parseInt(counter.value) + 1;
    }
}
function decreaseCounter (){
    if (parseInt(counter.value) <= 0){
        if(!errorMessageDecrease) {
            alert("Значение не может быть меньше 0!");
            errorMessageDecrease = true;
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
const allCommentsAuthor = [...document.querySelectorAll('.comment-author')]
const newArray = [];

commitButton.addEventListener("click", ()=>{
    const title = titleForm.value;
    let body = bodyForm.value;
    const rating = parseInt(ratingForm.value);
    const author = authorForm.value;

    if(title && body && !isNaN(rating) && author){
        if (body.length >= 55){
            if (rating < 1 || rating >5){alert(" Рейтинг должен быть в пределах от 1 до 5");}
            body = body.slice(0, 55) + "...";
            }
        console.log(body)
        const comment = {
            id: newArray.length + 1,
            title,
            body: body.length >= 55 ? body.slice(0, 55) + '...' : body,
            rating: allCommentsAuthor.find(item => item.textContent === author) ? 5 : rating,
            author
        }
        titleForm.value = '';
        ratingForm.value = '';
        bodyForm.value = '';
        authorForm.value = '';
        newArray.push(comment)

        const newComment = `
            <div class="comment">
                <p class="comment-title">${newArray[newArray.length -1].title}</p>
                <p class="comment-body">${newArray[newArray.length -1].body}</p>
                <div class="comment-info">
                    <p class="comment-id">Id: ${newArray[newArray.length -1].id}</p>
                    <p class="comment-id">Rating: ${newArray[newArray.length -1].rating}</p>
                    <p class="comment-author">${newArray[newArray.length -1].author}</p>
                </div>
            </div>
        `
        document.querySelector('.comments').insertAdjacentHTML('afterend', newComment);
        }
    else{alert("Поля должны быть заполонены");
    }
})

// NEWS TASK
const newsArray = [
    {
        userId: 1,
        id: 1,
        title: "Заголовок для Алекса",
        author: 'Alex',
        body: "Текст для Алекса"
    },
    {
        userId: 2,
        id: 2,
        title: "Заголовок для Анны",
        author: 'Anna',
        body: "Текст для Анны"
    },
    {
        userId: 3,
        id: 3,
        title: "Заголовок для Нины",
        author: 'Nina',
        body: "Текст для Нины"
    },
    {
        userId: 2,
        id: 4,
        title: "Заголовок для Алекса2",
        author: 'Anna',
        body: "Текст для Анны"
    },
]

const getPostBtn = document.querySelector('.get-posts');
getPostBtn.addEventListener('click', () => {
    newsArray.reverse().forEach(item => {
        const newPost = `
            <div class='post'>
                <p class="post-title">${item.title}</p>
                <p class="post-body">${item.body}</p>
                <p class="post-author">${item.author}</p>
            </div>
        `
        document.querySelector('.news').insertAdjacentHTML('afterbegin', newPost);
    });
});
const getSortBtn = document.querySelector('.sort-title');
getSortBtn.addEventListener("click", ()=>{
    const newsArraySort = newsArray.sort((a, b) => {
        if (a.author > b.author){
            return -1
        } else if (a.author < b.author){
            return 1
        } else {
            return 0
        }
    });
    newsArraySort.forEach(item =>{
        const newArray = `
            <div class='post'>
                <p class="post-title">${item.title}</p>
                <p class="post-body">${item.body}</p>
                <p class="post-author">${item.author}</p>
            </div>
        `
        document.querySelector('.news').insertAdjacentHTML('afterbegin', newArray);
    })
});

const selectNameBtn = document.querySelector('.select-name');
selectNameBtn.addEventListener("change", ()=>{
    document.querySelector('.news').innerHTML = "";
    const names = document.querySelector('.select-name').value;

    const filteredPeople = names === 'all' ? newsArray : newsArray.filter(person => person.author === names);

    filteredPeople.forEach(item =>{
        const newArray = `
                    <div class='post'>
                        <p class="post-title">${item.title}</p>
                        <p class="post-body">${item.body}</p>
                        <p class="post-author">${item.author}</p>
                    </div>
        `
        document.querySelector('.news').insertAdjacentHTML('afterbegin', newArray);
    });

})
const deleteBtn = document.querySelector('.delete-all');

deleteBtn.addEventListener('click', ()=>{
    document.querySelector('.news').innerHTML = '';
})
