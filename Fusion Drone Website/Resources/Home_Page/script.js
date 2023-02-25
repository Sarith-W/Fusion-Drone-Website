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