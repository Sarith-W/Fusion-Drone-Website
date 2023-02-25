// Declaring variables
const buttonClick = document.querySelectorAll('button');

//Function which listens and toggles the answers.
function onButtonClick(buttonClick){
    buttonClick.forEach( button =>{
        button.addEventListener('click',()=>{
            const question = button.nextElementSibling;
            const icon = button.children[1];

            question.classList.toggle('show');
            icon.classList.toggle('rotate');
        })
    })
}

//Calling the onButtonClick function
onButtonClick(buttonClick);

//Dark/light Mode
let onclick_count = 0;
function switch_mode(){
    onclick_count += 1;
    document.body.classList.toggle("light-mode");
    if (onclick_count % 2 == 1){
        document.body.style.background="white";
        document.images[0].src="/Users/sarithwijesundera/Desktop/WDD_CW/Resources/Home_Page/logo_black.png";
    }else{
        document.body.style.background="rgb(26, 26, 26)";
        document.images[0].src="/Users/sarithwijesundera/Desktop/WDD_CW/Resources/Home_Page/logo_glow.gif";
    }
}