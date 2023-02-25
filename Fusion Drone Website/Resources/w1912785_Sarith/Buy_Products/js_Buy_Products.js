//Function to switch between the dark mode and the light mode
let onclick_count = 0;
function switch_mode(){
    onclick_count += 1;
    document.body.classList.toggle("light-mode");
    if (onclick_count % 2 == 1){
        document.images[0].src="/Users/sarithwijesundera/Desktop/WDD_CW/Resources/w1912785_Sarith/Buy_Products/logo_black.png";
        document.images[1].src="/Users/sarithwijesundera/Desktop/WDD_CW/Resources/w1912785_Sarith/Buy_Products/logo_black.png";
        document.images[19].src="/Users/sarithwijesundera/Desktop/WDD_CW/Resources/w1912785_Sarith/Buy_Products/logo_black.png";
        document.body.style.background="white";
    }else{
        document.images[0].src="/Users/sarithwijesundera/Desktop/WDD_CW/Resources/w1912785_Sarith/Buy_Products/logo_glow.gif";
        document.images[1].src="/Users/sarithwijesundera/Desktop/WDD_CW/Resources/w1912785_Sarith/Buy_Products/logo_white.png";
        document.images[19].src="/Users/sarithwijesundera/Desktop/WDD_CW/Resources/w1912785_Sarith/Buy_Products/logo_white.png";
        document.body.style.background="rgb(26, 26, 26)";
    }
}


//To find the active colour button
var btns = document.body.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", active_button);
}

function active_button(){
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
        current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
}


//Initializing the arrays and the variables
const items = [];
let counter = 0;
let total_quantity = 0, quantity = 0, update;
let item1_product = "Fusion I Drone  &nbsp   &nbsp ", item1_colour, item1_quantity, item1_price;
let item2_product = "Fusion II Drone &nbsp&nbsp", item2_colour, item2_quantity, item2_price;
let item3_product = "Fusion Sky Drone", item3_colour, item3_quantity, item3_price;
let item4_product = "Fusion Ultra &nbsp &nbsp &nbsp &nbsp", item4_colour, item4_quantity, item4_price;


//Validating the add to the cart button in the item 1
function item_1(){
    item1_quantity = 0;
    item1_price = 299;
    let colour1 = document.getElementById('item1_colour1').classList.contains('active');
    let colour2 = document.getElementById('item1_colour2').classList.contains('active');
    let colour3 = document.getElementById('item1_colour3').classList.contains('active');
    let colour4 = document.getElementById('item1_colour4').classList.contains('active');
    if (colour1 == true){
        item1_colour = "White &nbsp";
    }else if(colour2 == true){
        item1_colour = "Black &nbsp";
    }else if(colour3 == true){
        item1_colour = "Red &nbsp&nbsp&nbsp ";
    }else if(colour4 == true){
        item1_colour = "Yellow";
    }

    if ((colour1 || colour2 || colour3 || colour4) == false){
        alert("Please Choose a Colour!");
        update = false;
    }else if(items.length >= 10){
        alert("Oops...The Cart is Full...Please checkout these items and come back again!");
        update = false;
    }else{
        item1_quantity = document.getElementById("quantity_input1").value;
        item1_price *= item1_quantity;
        items.push([item1_product, item1_colour, item1_quantity, item1_price, counter])
        update = true;
    }
    quantity = item1_quantity;
}


//Validating the add to the cart button in the item 2
function item_2(){
    item2_quantity = 0;
    item2_price = 499;
    let colour1 = document.getElementById('item2_colour1').classList.contains('active');
    let colour2 = document.getElementById('item2_colour2').classList.contains('active');
    let colour3 = document.getElementById('item2_colour3').classList.contains('active');
    let colour4 = document.getElementById('item2_colour4').classList.contains('active');
    if (colour1 == true){
        item2_colour = "Grey &nbsp&nbsp ";
    }else if(colour2 == true){
        item2_colour = "Black &nbsp";
    }else if(colour3 == true){
        item2_colour = "Red &nbsp&nbsp&nbsp ";
    }else if(colour4 == true){
        item2_colour = "Blue &nbsp&nbsp ";
    }

    if ((colour1 || colour2 || colour3 || colour4) == false){
        alert("Please Choose a Colour!");
        update = false;
    }else if(items.length >= 10){
        alert("Oops...The Cart is Full...Please checkout these items and come back again!");
        update = false;
    }else{
        item2_quantity = document.getElementById("quantity_input2").value;
        item2_price *= item2_quantity;
        items.push([item2_product, item2_colour, item2_quantity, item2_price, counter])
        update = true;
    }
    quantity = item2_quantity;
}


//Validating the add to the cart button in the item 3
function item_3(){
    item3_quantity = 0;
    item3_price = 699;
    let colour1 = document.getElementById('item3_colour1').classList.contains('active');
    let colour2 = document.getElementById('item3_colour2').classList.contains('active');
    let colour3 = document.getElementById('item3_colour3').classList.contains('active');
    let colour4 = document.getElementById('item3_colour4').classList.contains('active');
    if (colour1 == true){
        item3_colour = "Black &nbsp";
    }else if(colour2 == true){
        item3_colour = "Purple&nbsp";
    }else if(colour3 == true){
        item3_colour = "Green &nbsp";
    }else if(colour4 == true){
        item3_colour = "Gold &nbsp ";
    }

    if ((colour1 || colour2 || colour3 || colour4) == false){
        alert("Please Choose a Colour!");
        update = false;
    }else if(items.length >= 10){
        alert("Oops...The Cart is Full...Please checkout these items and come back again!");
        update = false;
    }else{
        item3_quantity = document.getElementById("quantity_input3").value;
        item3_price *= item3_quantity;
        items.push([item3_product, item3_colour, item3_quantity, item3_price, counter])
        update = true;
    }
    quantity = item3_quantity;
}


//Validating the add to the cart button in the item 4
function item_4(){
    item4_quantity = 0;
    item4_price = 999;
    let colour1 = document.getElementById('item4_colour1').classList.contains('active');
    let colour2 = document.getElementById('item4_colour2').classList.contains('active');
    let colour3 = document.getElementById('item4_colour3').classList.contains('active');
    let colour4 = document.getElementById('item4_colour4').classList.contains('active');
    if (colour1 == true){
        item4_colour = "Orange ";
    }else if(colour2 == true){
        item4_colour = "Black &nbsp ";
    }else if(colour3 == true){
        item4_colour = "Yellow ";
    }else if(colour4 == true){
        item4_colour = "Blue &nbsp &nbsp ";
    }

    if ((colour1 || colour2 || colour3 || colour4) == false){
        alert("Please Choose a Colour!");
        update = false;
    }else if(items.length >= 10){
        alert("Oops...The Cart is Full...Please checkout these items and come back again!");
        update = false;
    }else{
        item4_quantity = document.getElementById("quantity_input4").value;
        item4_price *= item4_quantity;
        items.push([item4_product, item4_colour, item4_quantity, item4_price, counter])
        update = true;
    }
    quantity = item4_quantity;
}


//Function to find the total quantity of the items
function total_count(quantity){
    total_quantity = +total_quantity + +quantity;
}


//Function to find the total price of the items
var total_price;
function total(){
    total_price = 0;
    for (let j = 0; j < items.length; j++){
        total_price += items[j][3];
    }
    document.getElementById("price").innerHTML = "Total: $" + total_price;
    document.getElementById("cart_details").appendChild(price); 
}


//Function to add the items chosen by the user to the cart
function addToTheCart(){
    total_count(quantity);
    document.getElementsByClassName("count")[0].innerHTML = total_quantity;
    document.getElementsByClassName("count")[1].innerHTML = total_quantity;
    document.getElementsByClassName("count")[2].innerHTML = total_quantity;
    document.getElementsByClassName("count")[3].innerHTML = total_quantity;
    
    if(update == true){
        let p = document.createElement("p");
        p.setAttribute("id", counter);
        p.innerHTML = items[items.length-1][0] + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + items[items.length-1][1]+ "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + items[items.length-1][2]+ "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp$" + items[items.length-1][3];
        document.getElementById("cart_details").appendChild(p);

        let btn = document.createElement("button");
        btn.setAttribute("id", counter)
        btn.setAttribute("onclick","remove_element(this.id)");
        btn.innerHTML = "Remove";
        document.getElementById("cart_details").appendChild(btn);
        counter = +counter + +1;

        document.getElementById("cart_button").addEventListener("click", total());
    }
}


//Function to remove the items in the cart
function remove_element(id){
    document.getElementById(id).remove();
    document.getElementById(id).remove();

    let index;
    for(let i = 0; i < items.length; i++){
        if (items[i][4] == parseInt(id)){
            index = i;
        } 
    }

    total_quantity -= items[index][2];
    items.splice(index, 1);
    document.getElementsByClassName("count")[0].innerHTML = total_quantity;
    document.getElementsByClassName("count")[1].innerHTML = total_quantity;
    document.getElementsByClassName("count")[2].innerHTML = total_quantity;
    document.getElementsByClassName("count")[3].innerHTML = total_quantity;

    document.getElementById("cart_button").addEventListener("click", total());
}


//Function allocated to the reset button which clears the data in the form as well as in the invoice
let submit_time = 0, reset_time = 1;
function update_reset_count(){
    reset_time = Date.now();
    let table_reset = document.getElementById("items_table");
    let row_count = table_reset.rows.length;
    for (let i = row_count-1; i > 0; i--){
        table_reset.deleteRow(i);
    }
    document.getElementById("order_number").innerHTML = "";
    document.getElementById("customer_name").innerHTML = "";
    document.getElementById("customer_number").innerHTML = "";
    document.getElementById("customer_email").innerHTML = "";
    document.getElementById("customer_address").innerHTML = "";
    document.getElementById("items_total").innerHTML = "";
    document.getElementById("success_message").innerHTML = "Oops...You haven't placed an order yet";
    document.getElementById("success_message").style.color="red";
}


//Function to validate the user inputs in the form
function check_validity(field, event){
    if (field.fname.value == ""){
        alert("First Name field must be filled out!");
        event.preventDefault();
    }else if (field.lname.value == ""){
        alert("Last Name field must be filled out!");
        event.preventDefault();
    }else if (field.address.value == ""){
        alert("Address field must be filled out!");
        event.preventDefault();
    }else if (field.phone.value == ""){
        alert("Contact Number field must be filled out!");
        event.preventDefault();
    }else if (field.email.value == ""){
        alert("Email field must be filled out!");
        event.preventDefault();
    }else if (!field.email.value.includes("@")){
        alert("Email field must contain '@' character");
        event.preventDefault();
    }else if ((field.email.value.indexOf('@')+1) == field.email.value.length){
        alert("Email field must contain some characters following '@'");
        event.preventDefault();
    }else if (field.email.value.indexOf('@') == 0){
        alert("Email field must contain some characters before '@'");
        event.preventDefault();
    }else if (field.card_number.value == ""){
        alert("Card Number field must be filled out!");
        event.preventDefault();
    }else if (field.cvv.value == ""){
        alert("CVV field must be filled out!");
        event.preventDefault();
    }else if (field.expiration.value == ""){
        alert("Expiration field must be filled out!");
        event.preventDefault();
    }else if (!field.terms.checked){
        alert("Please put a tick to the terms and conditions!");
        event.preventDefault();
    }else if (items.length == 0){
        alert("Oops...Your Cart is Empty")
        event.preventDefault();
    }else{ 
        if (reset_time > submit_time){
            alert("The Order was Placed Successfully!"); 
            thank_you_message();
            invoice();
            location.href = "#invoice_container"; 
            submit_time = Date.now(); 
        }else{
            alert("You have already placed an order. Please reset the form if you want to place another order.")
        }
        return false;
    }
}


//Function to update the invoice when the submit button is clicked
var items_total = 0;
function invoice(){
    document.getElementById("order_number").innerHTML = "Order Number : " + Date.now();
    document.getElementById("customer_name").innerHTML = "<span class='customer'>Customer Name &nbsp; &nbsp;:</span> &nbsp; " + document.getElementById("fname").value + " " + document.getElementById("lname").value;
    document.getElementById("customer_number").innerHTML = "<span class='customer'>Phone Number &nbsp; &nbsp; :</span> &nbsp; " + document.getElementById("phone").value;
    document.getElementById("customer_email").innerHTML = "<span class='customer'>E-mail Address &nbsp;&nbsp;:</span> &nbsp; " + document.getElementById("email").value;
    document.getElementById("customer_address").innerHTML = "<span class='customer'>Shipping Address :</span> &nbsp; " + document.getElementById("address").value + "<br><br><hr>";

    let table = document.getElementById("items_table");
    for (let i = 0; i < items.length; i++){
        let row = table.insertRow(-1);
        let cell_1 = row.insertCell(0);
        let cell_2 = row.insertCell(1);
        let cell_3 = row.insertCell(2);
        let cell_4 = row.insertCell(3);
        let cell_5 = row.insertCell(4);
        cell_1.innerHTML = i+1;
        cell_2.innerHTML = items[i][0];
        cell_3.innerHTML = items[i][1];
        cell_4.innerHTML = items[i][2];
        cell_5.innerHTML = items[i][3];
    }
    document.getElementById("items_total").innerHTML = "Total Bill: $" + total_price;
}



//Function to add a thank you message when the order was placed
function thank_you_message(){
    document.getElementById("welcome").innerHTML = "Thanks for Shopping with us!"
    document.getElementById("success_message").innerHTML = "The order has been placed successfully!";
    document.getElementById("success_message").style.color="rgb(9, 255, 0)";
}



