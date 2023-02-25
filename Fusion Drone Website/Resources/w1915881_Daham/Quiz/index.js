//Variables to write output to HTML
let startQuizbtn = document.querySelector('.start-quiz-btn');
let container = document.querySelector('.container');
let question = document.querySelector('.ques-text');
let option_list = document.querySelector(".option-div");
let time_line= document.querySelector(".time_line");
let TimeCount = document.querySelector('.time-left');
let next_ques_btn = document.querySelector('.next-ques-btn');
let topQuestionCounting = document.querySelector('.question-counter');
const result = document.querySelector('.result-div');
let correct_list = document.querySelector('.correct-div');
let wrong_list = document.querySelector('.wrong-div');
let TimeTaken = document.querySelector('.time-taken');
// Arrays to store data
let correctQuestions = []; 
let wrongQuestions = [];
//User score
let score = 0;
//Question Count
let question_count = 0;
//Top Bar Question Count
let ques_number = 1
let timeValue = 60;
let widthValue = 0;
let count;

next_ques_btn.style.display = 'none';

//Funtion to start the quiz on button click
startQuizbtn.onclick = () => {
    container.style.display = 'block';
    next_ques_btn.style.display = 'block';
    showQuestions(0);
    checkOption(getRadioValue());
    QuestionCounter(1);
    Timer();
    timerLine(0);
    startQuizbtn.style.display = 'none';
};

//If next btn click
next_ques_btn.onclick = ()=>{
    checkOption(getRadioValue()); 
    if(question_count < questions.length - 1){      
    question_count++;
    ques_number++;
    showQuestions(question_count);
    QuestionCounter(ques_number);
    }else{
      showQuestions(question_count); 
      userPerformance();
      showResult();
    }
    };

//Get radio value funtion used as mentioned in CW specification 
getRadioValue = (radioArray)=>{
    radioArray = document.getElementsByName('answer');
    for(let i = 0; i<radioArray.length; i++){
        if (radioArray[i].checked){
            return (radioArray[i].value);
        }
    }
    return"";
    }

//Funtion to display the questions and options in HTML
showQuestions=(index)=>{
    let question_tag =  `<span>`+questions[index].number + ". " + questions[index].question+`</span>`;

    let question_1 =  `<div class="option"><span><label class="radio-label" for="1.1"><input id="1.1" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[0]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="1.2"><input id="1.2" class="check-answer" type="radio" value="Correct" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[1]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="1.3"><input id="1.3" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[2]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="1.4"><input id="1.4" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[3]+`</label></span></div>`;                               
    
    let question_2 =  `<div class="option"><span><label class="radio-label" for="2.1"><input id="2.1" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[0]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="2.2"><input id="2.2" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[1]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="2.3"><input id="2.3" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[2]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="2.4"><input id="2.4" class="check-answer" type="radio" value="Correct" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[3]+`</label></span></div>`;                               

    let question_3 =  `<div class="option"><span><label class="radio-label" for="3.1"><input id="3.1" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[0]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="3.2"><input id="3.2" class="check-answer" type="radio" value="Correct" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[1]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="3.3"><input id="3.3" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[2]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="3.4"><input id="3.4" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[3]+`</label></span></div>`;                               

    let question_4 =  `<div class="option"><span><label class="radio-label" for="4.1"><input id="4.1" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[0]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="4.2"><input id="4.2" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[1]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="4.3"><input id="4.3" class="check-answer" type="radio" value="Correct" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[2]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="4.4"><input id="4.4" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[3]+`</label></span></div>`;                               

    let question_5 =  `<div class="option"><span><label class="radio-label" for="5.1"><input id="5.1" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[0]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="5.2"><input id="5.2" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[1]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="5.3"><input id="5.3" class="check-answer" type="radio" value="Correct" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[2]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="5.4"><input id="5.4" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[3]+`</label></span></div>`;                               

    let question_6 =  `<div class="option"><span><label class="radio-label" for="6.1"><input id="6.1" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[0]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="6.2"><input id="6.2" class="check-answer" type="radio" value="Correct" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[1]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="6.3"><input id="6.3" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[2]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="6.4"><input id="6.4" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[3]+`</label></span></div>`;                               
    
    let question_7 =  `<div class="option"><span><label class="radio-label" for="7.1"><input id="7.1" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[0]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="7.2"><input id="7.2" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[1]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="7.3"><input id="7.3" class="check-answer" type="radio" value="Correct" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[2]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="7.4"><input id="7.4" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[3]+`</label></span></div>`;                               

    let question_8 =  `<div class="option"><span><label class="radio-label" for="8.1"><input id="8.1" class="check-answer" type="radio" value="Correct" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[0]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="8.2"><input id="8.2" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[1]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="8.3"><input id="8.3" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[2]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="8.4"><input id="8.4" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[3]+`</label></span></div>`;                               

    let question_9 =  `<div class="option"><span><label class="radio-label" for="9.1"><input id="9.1" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[0]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="9.2"><input id="9.2" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[1]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="9.3"><input id="9.3" class="check-answer" type="radio" value="Correct" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[2]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="9.4"><input id="9.4" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[3]+`</label></span></div>`;                               

    let question_10 = `<div class="option"><span><label class="radio-label" for="10.1"><input id="10.1" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[0]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="10.2"><input id="10.2" class="check-answer" type="radio" value="Correct" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[1]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="10.3"><input id="10.3" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[2]+`</label></span></div>`+
                      `<div class="option"><span><label class="radio-label" for="10.4"><input id="10.4" class="check-answer" type="radio" value="Wrong" name="answer" onclick="getRadioValue()"><span class="checkmark"></span>`+questions[index].options[3]+`</label></span></div>`;    


        //Selecting Option Set
        switch(index+1) {
            case 1:
              option_tag = question_1;
              break;
            case 2:
              option_tag = question_2;
              break;
            case 3:
              option_tag = question_3;
              break;
            case 4:
              option_tag = question_4;
              break;
            case 5:
              option_tag = question_5;         
              break;
            case 6:
              option_tag = question_6;
              break;
            case 7:
              option_tag = question_7;
              break;
            case 8:
              option_tag = question_8;
              break;
            case 9:
              option_tag = question_9;
              break;
            case 10:
              option_tag = question_10;         
              break;  
          }
    //Writing selected questions and option set to html      
    question.innerHTML = question_tag;
    option_list.innerHTML = option_tag;       
    }
    
//funtion to check if selected answer is correct or wrong
checkOption = (radiovalue)=>{
    if (radiovalue==="Correct"){
        score += 2;  
        correctQuestions.push(questions[question_count].number);
    }
    else if (radiovalue==="Wrong"){
        if(score===0){
          score = 0;
        }else{score -= 1;}
        wrongQuestions.push(questions[question_count].number);
    }
}

//Showing Ques Number On Top
QuestionCounter = (index) => {
  let totalQuesCount =  `<span>`+index+`<span> of </span><span>`+questions.length+`</span> Question</span>`;
  topQuestionCounting.innerHTML = totalQuesCount;
  };


//variable to store time taken   
let time_taken = 0;
//funtion to create a one min count down timer
Timer=()=>{
  let seconds = 60;
  function tick() {
      seconds--;
      time_taken = 60 - seconds;
      TimeCount.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
      if( seconds > 0 ) {
        setTimeout(tick, 1000);
      } else {
          alert("Sorry!! Your Time is Up..");
          userPerformance();
          showResult();
      }
  }
    tick();
}


//Time Progress Bar
function timerLine(time){
  countLine = setInterval(timer,148)  
 function timer(){
time += 1;
time_line.style.width = time + "px";

 };
};


//Displaying The Answers User got Correct or wrong 
userPerformance = () => {
  if (score===20){
    correct_list.innerHTML = "All Your Answers Are Correct!!";
    //changing bg color according to user score
    document.body.style.backgroundColor = "#00FFAB";
  }else if(score===0){
    correct_list.innerHTML = "All Your Answers Are Incorrect!!";
    //changing bg color according to user score
    document.body.style.backgroundColor = "#FD5D5D";
  }else{
    correct_list.innerHTML = "Correct Answers - "+correctQuestions.join(", ");
    wrong_list.innerHTML = "Wrong Answers - "+wrongQuestions.join(", ");
    //changing bg color according to user score
    document.body.style.backgroundColor = "#FFE162";
  }
  TimeTaken.innerHTML = "Time Taken - "+time_taken+" Seconds";
  
}
//funtion to display users score          
showResult = () =>{
        container.style.display = 'none';
        result.style.display = 'block';
        let scoreText = document.querySelector('.score-div');
        if(score > 7){
        let scoreTag = `<span>Congrats! You scored `+score+` out of `+(questions.length*2)+` 🔥</span>`;  
        scoreText.innerHTML = scoreTag;
        console.log(scoreText);
        }else if(score > 3){
        let scoreTag = `<span>Nice! You scored ` + score + ` out of ` + (questions.length*2) + ` 🔥</span>`;
        scoreText.innerHTML = scoreTag;
        console.log(scoreText);       
        }else{
        let scoreTag = `<span>Sorry! You scored `+score+` out of `+(questions.length*2)+` 🔥</span>`;  
        scoreText.innerHTML = scoreTag;       
        console.log(scoreText);}
        };   



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