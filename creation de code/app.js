var modalBtn = document.querySelector('.ButtoN');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
var twoBtn = document.querySelector('.btn2');
var Cnfirm = document.querySelector('.btn1');
var cnfrm = document.querySelector('.conf-msg');
var OKbtn = document.querySelector('.OK');


modalBtn.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click',function(){
    modalBg.classList.remove('bg-active');
});
twoBtn.addEventListener('click',function(){
    modalBg.classList.remove('bg-active');
});
Cnfirm.addEventListener('click',function(){
    cnfrm.classList.add('bg-active2');
});
OKbtn.addEventListener('click',function(){
    cnfrm.classList.remove('bg-active2')
    modalBg.classList.remove('bg-active');;
});