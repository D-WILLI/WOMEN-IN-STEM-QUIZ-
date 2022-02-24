// Have to add in our code from HTML 
var challenge = document.querySelector("#challengeStart"); 
var  startQuiz = document.querySelector("#startQuiz"); 
var usersQuestions = document.querySelector (".selection"); 
var  question = document.querySelector ("#question"); 
var image= document.querySelector("#question-image"); 
var  buttonA = document.querySelector (".buttonA");
var  buttonB = document.querySelector (".buttonB");
var  buttonC = document.querySelector (".buttonC");
var  buttonD = document.querySelector (".buttonD");
var correct = document.querySelector ("#answertext"); 
var highscores = document.querySelector("#highscore"); 
var viewhighscore = document.querySelector ("#Highscores"); 
var finalPage = document.querySelector(".FinalScore"); 
var gameScore= document.querySelector(".gameScore"); 
var submit = document.querySelector(".submit"); 
var nextQuestion = document.querySelector(".next-question"); 
var img = document.querySelector("#images"); 



submit.innerHTML = "Hello"; 
console.log(submit); 

           // This is an array of questions and answers 
           const questions = [
            {
                // image:"https://media.nationalgeographic.org/assets/photos/669/8b7/6698b759-f30f-43d9-9cf1-b6350cdd39bd_r646x537.jpg?2391e3e2118844ef3fef9c236c4b14666e9bbdcd",

                question: 'The term "bug" commonly refers to an error, fault or flaw in any computer program or a hardware system. The term was first used in 1947 at Harvard when the Mark II was malfunctioning.What is the name of the woman technologist that found the first "bug" ',
                answers: [
                    "A - Ada Lovelace",
                    "B - js",
                    "C - Grace Hopper",
                    "D - scripting"],
                correctAnswer: "C - Grace Hopper"
            },
         
            {
                question: 'Who is considered the "first ever programmer" ',
                answers: [
                    "A - Ada Lovelace",
                    "B - Grace Hopper",
                    "C - Katherine Johnson",
                    "D - Margaret Hamilton"],
                correctAnswer: "A - Ada Lovelace"
            },
         
            {
                question: "African American women make up what percent of Computing Related jobs?",
                answers: [
                    "A-5%",
                    "B-1%",
                    "C-10%",
                    "D-3%"],

                correctAnswer: "D-3%"
            },
         
            {
                question: "Current COO of Facebook",
                answers: [
                    "A-Sheryl Sandberg",
                    "B-Marissa Mayer",
                    "C-Annie Easley",
                    "D-Adele Goldberg"],

                correctAnswer: "A-Sheryl Sandberg"
            },
         
            {
                question: "NASA credits the coining of the term Software Engineering to ",
                answers: [
                    "A-Katherine Johnson",
                    "B-Megan Smith",
                    "C-Adele Goldberg",
                    "D-Margaret Hamilton"],

                correctAnswer: "D-Margaret Hamilton"
            },

            {
                question: "The International Day of Women and Girls in Science is a day that allows us to honor achievements and place focus on girls entering Science, Technology, Engineering, and Mathematics (STEM) careers...What day is this celebrated? ",
                answers: [
                    "A-January 30th",
                    "B-February 11th",
                    "C-June 9th",
                    "D-March 16th"],

                correctAnswer: "B-February 11th"
            },
         
         
         ]
         
    function setQuestions(){
            question.innerHTML= questions[i].question; 
            buttonA.innerHTML=questions[i].answers[0];
            buttonB.innerHTML=questions[i].answers[1];
            buttonC.innerHTML=questions[i].answers[2];
            buttonD.innerHTML=questions[i].answers[3];
            nextQuestion.style.visibility = 'hidden'; 
            correct.style.visibility='hidden';
            
    }
   


    function nextQuestions(){
        i++;
        // image.innerHTML=questions[i].image; 
        question.innerHTML= questions[i].question; 
        buttonA.innerHTML=questions[i].answers[0];
        buttonB.innerHTML=questions[i].answers[1];
        buttonC.innerHTML=questions[i].answers[2];
        buttonD.innerHTML=questions[i].answers[3];
        nextQuestion.style.visibility = 'hidden';
        correct.style.visibility='hidden'; 
}




// This is the start quiz button also generates the question array 

startQuiz.addEventListener("click", function(){
     setQuestions();
     firstPage()  
     console.log("listening")
});

nextQuestion.addEventListener("click", function(){
    console.log ("next question"); 
    nextQuestions();
}); 

// This is the function to populate the questions from the array and moves to next questions 
let i = 0; 
let userScore = 0 ; 




if (questions[4] !== true ){
   console.log ("works");  
}
    //   console.log (questions[4])




// This is checks for the correct or incorrect answer and prints it to the screen


function answersOutput (event){
  

   if (event.target.textContent === questions[i].correctAnswer){
       correct.innerHTML= "Correct"; 
       correct.style.visibility='visible'; 
       userScore=userScore+20;
       console.log("SCORE",userScore); 
       
   } else {
       correct.innerHTML= "Incorrect Answer"; 
       correct.style.visibility='visible'; 
    }
  
}

// This is the button event listeners 

   buttonA.addEventListener("click", function(event){
       console.log(event.target.textContent); 
       answersOutput(event); 
       localStorage.setItem("userScore", JSON.stringify(userScore));
       nextQuestion.style.visibility = 'visible'; 
   });


   buttonB.addEventListener("click", function(event){
       console.log(event.target.textContent); 
       answersOutput(event); 
       localStorage.setItem("userScore", JSON.stringify(userScore));
       nextQuestion.style.visibility = 'visible'; 
   });



   buttonC.addEventListener("click", function(event){
       console.log(event.target.textContent);
       answersOutput(event);  
       localStorage.setItem("userScore", JSON.stringify(userScore));
       nextQuestion.style.visibility = 'visible'; 
   });




   buttonD.addEventListener("click", function(event){
       console.log(event.target.textContent); 
       answersOutput(event); 
       localStorage.setItem("userScore", JSON.stringify(userScore));
       nextQuestion.style.visibility = 'visible'; 
   });

   



// This allows for the first page to have the correct content it hides the intro page and high score page once the user click start quiz . 
function firstPage (){
   image.style.visibility='visible'; 
   challenge.style.visibility = 'hidden';
   buttonA.style.visibility = 'visible'; 
   buttonB.style.visibility = 'visible';
   buttonC.style.visibility = 'visible';
   buttonD.style.visibility = 'visible'; 
   viewhighscore.style.visibility = 'hidden'; 

}


   

// This allows the High Score Page to appear when the View Highscore button is clicked

highscores.addEventListener("click", function(){
   highScorePage() 
});

// This allows for the high score page to be viewable and hides buttons and start page
function highScorePage() {
   challenge.style.visibility = 'hidden';
   buttonA.style.visibility = 'hidden'; 
   buttonB.style.visibility = 'hidden';
   buttonC.style.visibility = 'hidden';
   buttonD.style.visibility = 'hidden';  
   viewhighscore.style.visibility = 'visible'; 
   question.style.visibility='hidden'; 
   correct.style.visibility='hidden';
}




// function finalScore (){
// finalPage.style.visibility='visible'; 
// gameScore.innerHTML = userScore; 
// localStorage.setItem("userName", JSON.stringify(finalPage));

// }

// finalScore(); 

// if (questions [5].question === false ) {
//    challenge.style.visibility = 'hidden';
//    buttonA.style.visibility = 'hidden'; 
//    buttonB.style.visibility = 'hidden';
//    buttonC.style.visibility = 'hidden';
//    buttonD.style.visibility = 'hidden';  
//    viewhighscore.style.visibility = 'hidden'; 
//    question.style.visibility='hidden'; 
//    correct.style.visibility='hidden';
// //    finalScore(); 
    
// }

/* Things to still work on 
       When user clicks on option there it quickly moves onto the next question
           1. We could possibly add a set time out function 
       Once the user is finished (not time runs out) the following should happen
           1. The user is moved to Final Score Page 
           2. User is given final Score  */ 




 
 
 
 
 
 

