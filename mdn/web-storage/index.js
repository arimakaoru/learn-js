// 必要な定数を作ります。
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');


// ボタンが押されたときにフォームが送信することをやめさせます。
form.addEventListener('submit', function(e) {
    e.preventDefault();
  });


// 'Say hello'ボタンがクリックされたら関数を実行
submitBtn.addEventListener('click', function(){
    localStorage.setItem('name', nameInput.value);
    nameDisplayCheck();
});


// 'Forget'ボタンがクリックされたら関数を実行
forgetBtn.addEventListener('click', function(){
    localStorage.removeItem('name');
    nameDisplayCheck();
});


function nameDisplayCheck() {
    if(localStorage.getItem('name')){
        let name = localStorage.getItem('name');
        h1.textContent = 'Welcome, ' + name;
        personalGreeting.textContent = 'Welcome to our website, ' + name + '! We hope you have fun while you are here.';
        forgetDiv.style.display = 'block';
        rememberDiv.style.display = 'none';
    }else{
        h1.textContent = 'Welcome to our website ';
        personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.';
        forgetDiv.style.display = 'none';
        rememberDiv.style.display = 'block';
    }
}


document.body.onload = nameDisplayCheck;