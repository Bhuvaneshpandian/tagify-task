let bookList =["html","css","java","javascript"];
let tagBookList =[];

function onInputText(){
let input = document.getElementById("tagifyInput").value;
let dropDownList = document.getElementById("dropdownlist");
console.log(input);
if(input ==" "){
 dropDownList.innerHTML="";
 return;
}

let fillerBookList = bookList.filter((book)=>{

return book.toLowerCase().includes(input)

});

renderBook(fillerBookList)
}

function renderBook(fillerBookList){
    let dropDownList = document.getElementById("dropdownlist");
    let listItem = fillerBookList.map((item) => `<li class="book-list" book-name="${item}" onClick="onBookList(event)">
    <span class="books-name">${item}</span>
</li>`).join(" ");
dropDownList.innerHTML = `<ul class="dropdown_list">${listItem}</ul>`;
}

function onBookList(event){

    let selectedBook = event.currentTarget.getAttribute("book-name");
    tagBookList.push(selectedBook);
    renderTag();




    let input = document.getElementById("tagifyInput")
    input.value = "";
    bookList = bookList.filter((book) => book != selectedBook);
    onInputText();

}


function renderTag(){
let tagifyItems = document.getElementById("tagify-items");
    tagifyItems.innerHTML = tagBookList.map((item) => {
        return `<span id="tag" class="col-sm tag alignleft">
        <p>${item}</p>
        <i class="fa fa-times" id="trace" aria-hidden="true" onClick=onDeleteBook(event) book-name="${item}"></i>
                             </span>`}).join(" ");
   

}

function onDeleteBook(event) {
    let selectedBook = event.currentTarget.getAttribute("book-name");
    tagBookList = tagBookList.filter((item) => item != selectedBook);
    renderTag();

    bookList.unshift(selectedBook);
    onInputText();
} 