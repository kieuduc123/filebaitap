// const temple = `<div class="modal">
// <div class="modal-content">
// <i class="fa fa-times modal-close"></i>
// <div class="modal-desc">text là một chuỗi string hoặc chuỗi HTML dùng để chèn.
// position là vị trí chèn, được xác định bởi bốn vị trí chính xác như sau:
// beforebegin - phía trước element
// afterbegin - nằm phía trong element, đằng trước node con đầu tiên
// beforeend - nằm phía trong, đằng sau node con cuối cùng.
// afterend - nằm sau element.
// <div class="modal-action">
// <button class="modal-submit">Confirm</button>
// <button class="modal-cancel">Cancel</button>
// </div>

// </div>
// </div>
// </div> `
// const body = document.body;
// body.insertAdjacentHTML("afterbegin",temple);

// const modal = document.querySelector(".modal");
// if(modal){
//     setTimeout(function(){
//         modal.classList.add("is-show")
//     },3000);
// }

// const modal = document.createElement("div");
// modal.classList.add("modal");

// const modalContent = document.createElement("div");
// modalContent.classList.add("modal-content");
// modal.appendChild(modalContent);

// const modalSubmit = document.createElement("button");
// modalSubmit.className = "modal-submit";
// modalSubmit.textContent = "Confind"
// modalContent.appendChild(modalSubmit);

// const modalClose = document.createElement("i");
// modalClose.className ="fa fa-times modal-close";
// modalContent.appendChild(modalClose);
 
// const modalDesc = document.createElement("div");
// modalDesc.classList.add("modal-desc");
// modalDesc.textContent = "text text là một chuỗi string hoặc chuỗi HTML dùng để chèn.position là vị trí chèn, được xác định bởi bốn vị trí chính xác như sau:   beforebegin - phía trước elementafterbegin - nằm phía trong element, đằng trước node con đầu tiênbeforeend - nằm phía trong, đằng sau node con cuối cùng.afterend - nằm sau element."
// modalContent.appendChild(modalDesc);

// const modalAction = document.createElement("div");
// modalAction.classList.add("modal-action")
// modalDesc.appendChild(modalAction);

// document.body.appendChild(modal);

// tao 1 function
 function creteNotification (title= "Welcome to notification"){
    const template = `<div class="noti">
    <img src="https://images.unsplash.com/photo-1683446297911-f4a1fa8e62dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="" class="noti-image">
    <div class="noti-container">
        <h3 class="noti-title">${title}</h3>
        <p class="noti-desc"> beforeend - nằm phía trong, đằng sau node con cuối cùng.</p>
    </div>
</div>`;
//hien thi trươc element
  document.body.insertAdjacentHTML("afterbegin", template);
 }
 const randomDate = [
   "Welcome to Ha Noi ",
   "Welcome to Vinh Phuc ",
   "Welcome to Phu Tho ",
   "Welcome to HCM ",
 ];
  let lastTitle;
 //
 const timer = setInterval(function(){
    //xoa class khi tao xong
    const item = document.querySelector(".noti");
    if(item) item.parentNode.removeChild(item);
    //lấy ra random title trong mangr Data;
    const title = randomDate[Math.floor(Math.random()* randomDate.length)];
    if (lastTitle !== title){
        creteNotification(title); 
    }
    lastTitle = title;
 },4000);

