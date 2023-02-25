let onclick_count = 0;
function switch_mode(){
    onclick_count += 1;
    document.body.classList.toggle("light-mode");
    if (onclick_count % 2 == 1){
        document.body.style.background="white";
        document.images[0].src="/Users/sarithwijesundera/Desktop/WDD_CW/Resources/w1912801_Suhas/Thumbnail/ThumbnailImages/logo_black.png";
    }else{
        document.body.style.background="rgb(26, 26, 26)";
        document.images[0].src="/Users/sarithwijesundera/Desktop/WDD_CW/Resources/w1912801_Suhas/Thumbnail/ThumbnailImages/logo_glow.gif";
    }
}

function background_colour(){
    if(document.getElementById('bg').value=='Black'){
        document.body.style.backgroundColor="black";
    }else if(document.getElementById('bg').value=='Gray'){
        document.body.style.backgroundColor="rgb(26,26,26)";
    }else if(document.getElementById('bg').value=='Purple'){
        document.body.style.backgroundColor="rgb(138, 43, 226)";
    }else if(document.getElementById('bg').value=='Light_Purple'){
        document.body.style.backgroundColor="rgb(230, 204, 255)";
    }
}



function text_colour(){
    if(document.getElementById('txt').value=='Black'){
        document.body.style.color="black";
        
        document.getElementById('card1').style.color="black";
        document.getElementById('card2').style.color="black";
        document.getElementById('card3').style.color="black";
        document.getElementById('card4').style.color="black";

        document.getElementById('head1').style.color="black";
        document.getElementById('head2').style.color="black";
        document.getElementById('head3').style.color="black";
        document.getElementById('head4').style.color="black";


    }else if(document.getElementById('txt').value=='Gray'){
        document.body.style.color="rgb(26,26,26)";

        document.getElementById('card1').style.color="rgb(26,26,26)";
        document.getElementById('card2').style.color="rgb(26,26,26)";
        document.getElementById('card3').style.color="rgb(26,26,26)";
        document.getElementById('card4').style.color="rgb(26,26,26)";

        document.getElementById('head1').style.color="rgb(26,26,26)";
        document.getElementById('head2').style.color="rgb(26,26,26)";
        document.getElementById('head3').style.color="rgb(26,26,26)";
        document.getElementById('head4').style.color="rgb(26,26,26)";


    }else if(document.getElementById('txt').value=='Purple'){
        document.body.style.color="rgb(138, 43, 226)";

        document.getElementById('card1').style.color="rgb(138, 43, 226)";
        document.getElementById('card2').style.color="rgb(138, 43, 226)";
        document.getElementById('card3').style.color="rgb(138, 43, 226)";
        document.getElementById('card4').style.color="rgb(138, 43, 226)";

        document.getElementById('head1').style.color="rgb(138, 43, 226)";
        document.getElementById('head2').style.color="rgb(138, 43, 226)";
        document.getElementById('head3').style.color="rgb(138, 43, 226)";
        document.getElementById('head4').style.color="rgb(138, 43, 226)";


    }else if(document.getElementById('txt').value=='Light_Purple'){
        document.body.style.color="rgb(230, 204, 255)";

        document.getElementById('card1').style.color="rgb(230, 204, 255)";
        document.getElementById('card2').style.color="rgb(230, 204, 255)";
        document.getElementById('card3').style.color="rgb(230, 204, 255)";
        document.getElementById('card4').style.color="rgb(230, 204, 255)";

        document.getElementById('head1').style.color="rgb(230, 204, 255)";
        document.getElementById('head2').style.color="rgb(230, 204, 255)";
        document.getElementById('head3').style.color="rgb(230, 204, 255)";
        document.getElementById('head4').style.color="rgb(230, 204, 255)";
    }


}