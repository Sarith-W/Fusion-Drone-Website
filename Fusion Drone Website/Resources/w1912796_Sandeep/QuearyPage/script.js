//This function is to validate the form inputs and calling the other functions.
function validate(event){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let select = document.getElementById("select").value;
    let contNum = document.getElementById("contactNumber").value;
    let message = document.getElementById("message").value;
    let contNumformat = /^\d*\.?\d+$/;
    
    if(name.trim() == ""){
        alert("The field Name cannot be empty");
        event.preventDefault();
    }
    else if(/\d/.test(name)){
        alert("The field Name cannot have numbers");
        event.preventDefault()
    } 
    else if (name.trim().length < 3){
        alert("name must have more than 2 letters")
        event.preventDefault();
    }

    else if (email.trim() == ""){
        alert("The field E-mail cannot be empty");
        event.preventDefault();
    }
    
    else if (select.trim() == "default"){
        alert("Please select a subject");
        event.preventDefault();
    }
    else if (contNum.trim() == ""){
        alert("The field Contact Number cannot be empty...");
        event.preventDefault();
    }
    else if (contNumformat.test(contNum.trim()) == false){
        alert("Invalid Contact Number");
        event.preventDefault();

    }else if (message.trim() == ""){
        alert("The field Message cannot be empty");
        event.preventDefault();
    }else{
        hideFormSection_1();
        displaySummary();
        summaryContents(name, email,select,contNum,message);
        event.preventDefault();
    }
}

//This function is to hide the form.
function hideFormSection_1(){
    document.getElementById("section1").classList.add("hide");
}

//This function is to display the summary.
function displaySummary(){
    document.getElementById("summary").classList.remove("hide");
}

//This function is to create the summary using inner html.
function summaryContents(name,email,select,contactNumber,message){
    let summary = ("<h2 id = title>VIEW SUMMARY</h2><br><br>NAME : &ensp;" + name + "<br>EMAIL : &ensp;\
    " + email + "<br>SUBJECT : &ensp;" + select + "<br>CONTACT NUMBER : &ensp;" + contactNumber + "<br>\
    <p id = 'messageTopic'><br><br>MESSAGE<p><br>&emsp;&emsp;<p id ='paragraph' >" + message + "</p>") ;

    document.getElementById("summaryMessage").innerHTML = summary;
}

//This function is to hide summary and showing the form.
function editButton(event){
    document.getElementById("summary").classList.add("hide");
    document.getElementById("section1").classList.remove("hide");
    event.preventDefault();
}

//This function is to submitting and resetting the form.
function submitButton(event){
    alert("Your query will be submitted for us");
    document.getElementById("mainForm").submit();
    document.getElementById("mainForm").reset();
    editButton(event);
    openPopup();
}

//This function is to control the dark theme and light theme.
let onclick_count = 0;
function switch_mode(){
    onclick_count += 1;
    document.body.classList.toggle("light-mode");
    if (onclick_count % 2 == 1){
        document.body.style.background="white";
        document.images[0].src="Resources/w1912796_Sandeep/QuearyPage/images/logo_black.png";
    }else{
        document.body.style.background="rgb(47, 43, 43)";
        document.images[0].src="Resources/w1912796_Sandeep/QuearyPage/images/logo_glow.gif";
    }
}

//This function is to show the popup message.
function openPopup(){
    popup.classList.add("open-popup");
}

//This function is to close the popup message.
function closePopup(){
    popup.classList.remove("open-popup");
}