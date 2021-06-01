// console.log(document.forms); вывод формы

// let isLoading = false;
// function sendForm() {
//     const formEl = document.forms['test1'];
//     // formEl.submit();
//     isLoading=true;
//     console.log("clicked");
//     setTimeout(()=> {
//         isLoading=false;
//         console.log('done')
//     },5000)
// }

// function resetForm(){
//     const formEl=document.forms['test1'];
//     formEl.reset()
// }
// function doSomething(){
//     const formEl = document.forms['test1']
//     console.log(formEl.elements)
//     console.log(formEl.elements[0].value)
//     console.log(formEl.elements[1].value)
//     formEl.elements[0].setAttribute('type','date')
//     console.log(formEl.elements[0].required)
//     console.log(formEl.elements[0].type)
//     formEl.elements[0].value="test1"
//     formEl.elements["password"].focus() работа с формами

// }
// function selectText(event){
//     console.log(event);                        просмотр свойств ивента,
//     const inputEl=document.forms[0].elements[0]; 
//     console.log(inputEl.selectionStart);
//     console.log(inputEl.selectionEnd);         
// }           
const inputEl = document.forms[0].elements[0];
inputEl.focus();
inputEl.setSelectionRange(3,5) 