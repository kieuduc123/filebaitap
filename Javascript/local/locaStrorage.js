// 1 localStorage.setItem ("key", "value");
// localStorage.setItem("name", "duc");
//2 localStorage.getItem("key")
// console.log(localStorage.getItem("name"));
//3. localStorage.removeItem("key")
//3. localStorage.removeItem("name");
//4 localStorage.clear();

// let arr =[ 1,2,3,4,5];
// localStorage.setItem("list", JSON.stringify(arr));
// const newArr = JSON.parse(localStorage.getItem("list"));
// console.log(newArr);

//bt todo

window.addEventListener("load",function(){
    //varibles doclaration
    const from = document.querySelector(".todo-from");
    const todoList = document.querySelector(".todo-list");
    let todos = 
       localStorage.length > 0 ? JSON.parse(localStorage.getItem("todoList")) : [];

    //    console.log("localStorage" ,localStorage);
    if(Array.isArray(todos) && todos.length > 0){
        [ ...todos].forEach((item) => creteTodoitem(item));
    }

    function creteTodoitem(title){
        const template = `<div class="todo-item">
        <span class="todo-text">${title}</span>
        <i class="fa fa-trash todo-remove"></i>
      </div>`
      todoList.insertAdjacentHTML("beforeend", template);
    }
    from.addEventListener("submit", function(e){
        e.preventDefault();
        const todoVal = this.elements["todo"].value;  
        if(!todoVal) return;
        //main code
        creteTodoitem(todoVal);
        todos.push(todoVal);
        console.log(todos);
        localStorage.length > 0 && localStorage.setItem("todoList", JSON.stringify(todos));
        //save to localStorage;
        // console.log(todoVal);
        this.elements["todo"].value = "";
    });
      ///handle remove todo
      todoList.addEventListener("click", function(e){
        if (e.target.matches(".todo-remove")) {
            const todo = e.target.parentNode;
            todo.parentNode.removeChild(todo);
            //remove todo localStorage

            const todoText = e.target.previousElementSibling.textContent;
            console.log(todoText);
            const newTodos = todos.filter((item) => item !== todoText);
            localStorage.setItem("todoList", JSON.stringify(newTodos));
        }
      });
});

