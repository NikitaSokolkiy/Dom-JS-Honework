//Get single item by class (use "." before class name)
const singleItem = document.querySelector('.tag-class');
//Get single item by id (use "#" before element id)
const singleItemID = document.querySelector("#elementID");
//Get single element by tag attribute
const singleItemAttribute = document.querySelector('input[name="user-name"]');

//Get multiple elements use querySelectorAll with similar markers
//Get multiple items by class (use "." before class name)
const multipleItems = document.querySelectorAll('.tag-class');
//Get multiple items by id (use "#" before element id)
const multipleItemsID = document.querySelectorAll("#elementID");
//Get multiple elements by tag attribute
const multipleItemsAttribute = document.querySelectorAll('input[name="user-name"]');


/*Add new element class*/
const singleItemNew = document.querySelector('.tag-class');
singleItemNew.classList.add('new-class');
//Remove class
singleItemNew.classList.remove('new-class');
//Check class
singleItemNew.classList.contains('new-class');
//If item has't class, it will be add, if item has class, he will be deleted
singleItemNew.classList.toggle('new-class');


//Create elements
//1. Option
const newItem = document.createElement('input');
newItem.classList.add('single-input');
newItem.setAttribute('name', 'user-name');
//2. Option
const newItemNew = `<input class="single-input" name="user-name">`


//Add new element on page
const fatherElement = document.querySelector('.fetch-block');
//Add new element before father element start
fatherElement.insertAdjacentElement('beforebegin', newItemNew);
//Add new element after father element start
fatherElement.insertAdjacentElement('afterbegin', newItemNew);
//Add new element before father element end
fatherElement.insertAdjacentElement('beforeend', newItemNew);
//Add new element after father element end
fatherElement.insertAdjacentElement('afterend', newItemNew);

//Clear all child items of element
fatherElement.innerHTML = '';
//Add text on tag
//1.Option if not input
const simplePTag = document.querySelector('p');
simplePTag.textContent = 'Some text';
//2. Option if tag is input
const simpleInputTag = document.querySelector('input');
simpleInputTag.value = 'Some simple text';
