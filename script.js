
let mylibrary=[]


function Book(title,author,pages,isread){
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.isread=isread;
    this.book={
        title:this.title,
        author:this.author,
        pages:this.pages,
        isread:this.isread
    }
}
function addBookToLibrary(){
    const title=document.querySelector('.book_title_input').value;
    const author=document.querySelector('.book_author_input').value;
    const pages=document.querySelector('.book_pages_input').value;
    const isread=document.getElementById('read_check').checked;
    let read;
    if(title=='' || author=='' || pages==''){
        alert('Enter Values')
    }
    else{
        if(isread== true){
            read='Read'; 
            color='#9fff9c';
        }
        else if (isread== false) {
            read='Not Read';
            color='#ff9c9c';
        }

        let library=document.querySelector('.library');
        library.innerHTML+=`
        <div class="book">
            <h3 class="title">"${title}"</h3>
            <h3 class="author">${author}</h3>
            <h3 class="page">${pages}</h3>

            <input type="button" value="${read}" class="read_btn" style="background:${color}">
            <input type="button" value="Remove" class="remove">
        </div>
        `

        let read_list=document.querySelectorAll('.book .read_btn');
        console.log(read_list);
        for(let i=0;i<read_list.length;i++){
            read_list[i].onclick=function(){
                if(read_list[i].value=='Read'){
                    read_list[i].value='Not Read';
                    read_list[i].style.background='#ff9c9c';
                    mylibrary[i].isread='Not Read'
                }
                else if(read_list[i].value=='Not Read'){
                    read_list[i].value='Read';
                    read_list[i].style.background='#9fff9c';
                    mylibrary[i].isread='Read'
                }
            }
        }
        console.log(mylibrary);
        let remove_list=document.querySelectorAll('.remove');
        for(let j=0;j<remove_list.length;j++){
            remove_list[j].onclick=function(){
                this.parentNode.remove();
            }
        }

        let book=new Book(title,author,pages,read);
        mylibrary.push(book.book);
    }
}
