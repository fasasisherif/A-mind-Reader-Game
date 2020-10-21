
function scaleOut (){
    document.querySelector(".intro-page").style.animation = "scale-out .4s ease forwards"

    document.querySelector(".page-2").style.left = "0"
    
}

const possibleQuestions = {
    life: "Does it have life?",
    noOfLegs: "How many legs does this creature possess?",
    canFly: "Can it fly?",
    canSee: "Can you see it?"
}

const possibleSequence = [
    {answer: "Human", life: true, noOfLegs: false, fly: false},
    {answer: "Animal", life: true, noOfLegs: false, fly: false},
    {answer: "Insect", life: true, noOfLegs: true, fly: true},
    {answer: "Object", life: false, noOfLegs: false, fly: false},
    {answer: "Abstract", life: false, noOfLegs: false, fly: false}
]

/* 2 legs => true,  4 legs => false*/

let possibleAnswers = []
let filteredAnswers;

let optionYes = document.querySelector(".yes")
let optionNo = document.querySelector(".no")
let AIquestion = document.querySelector(".AI-question")

function questionsAndOptions (fade, yesBackground, noBackground){
    AIquestion.style.opacity = fade
    optionYes.style.backgroundColor = yesBackground
    optionNo.style.backgroundColor = noBackground 
    document.querySelectorAll(".option").forEach(option => {
        option.style.opacity = fade
    })
   
} 

optionYes.addEventListener("click", () => {
    if (AIquestion.innerText == possibleQuestions.life) {
       questionsAndOptions("0.3", "rgba(250, 12, 218, .8)")

       setTimeout(function (){
            AIquestion.innerText = possibleQuestions.noOfLegs
            optionYes.querySelector(".four-legs").innerText = "4 or more legs"
            optionNo.querySelector(".two-legs").innerText = "2 legs or none"
            questionsAndOptions("1", "white")
            possibleSequence.forEach(sequence => {
                if (sequence.life){
                    possibleAnswers.push(sequence)
                }
            })
            // console.log(possibleAnswers)
       }, 700)
    }

    
    if (AIquestion.innerText == possibleQuestions.noOfLegs) {
        questionsAndOptions("0.3", "rgba(250, 12, 218, .8)")
 
        setTimeout(function (){
             AIquestion.innerText = possibleQuestions.canFly
             optionYes.querySelector(".four-legs").innerText = "Yes"
             optionNo.querySelector(".two-legs").innerText = "No"
             questionsAndOptions("1", "white")
           

            optionYes.addEventListener("click", () =>{
                if (AIquestion.innerText == possibleQuestions.canFly) {
                    questionsAndOptions("0.3", "rgba(250, 12, 218, .8)")
             
                    setTimeout(function (){
                         AIquestion.innerText = `You thought of an insect`
                         questionsAndOptions("0", "white")
                         AIquestion.style.opacity = 1
                    }, 700)
                }
            })

            optionNo.addEventListener("click", () =>{
                if (AIquestion.innerText == possibleQuestions.canFly) {
                    questionsAndOptions("0.3", "white", "rgba(250, 12, 218, .8)")
             
                    setTimeout(function (){
                         AIquestion.innerText = `You thought of a non-flying insects like spider, ants. I'm not powerful enough to pin it down`
                         questionsAndOptions("0", "white", "white")
                         AIquestion.style.opacity = 1
                    }, 700)
                }
            })
        }, 700)
    }
    

    


    if (AIquestion.innerText == possibleQuestions.canSee) {
        questionsAndOptions("0.3", "rgba(250, 12, 218, .8)", "white")
 
        setTimeout(function (){
            AIquestion.innerText = `You thought of an object`
            questionsAndOptions("0", "white", "white")
            AIquestion.style.opacity = 1
        }, 700)
     }

})



optionNo.addEventListener("click", () => {
    


    if (AIquestion.innerText == possibleQuestions.life) {
        questionsAndOptions("0.3", "white", "rgba(250, 12, 218, .8)")
 
        setTimeout(function (){
            AIquestion.innerText = possibleQuestions.canSee 
            questionsAndOptions("1", "white", "white")
        }, 700)
     }

     if (AIquestion.innerText == possibleQuestions.canSee) {
        questionsAndOptions("0.3", "white", "rgba(250, 12, 218, .8)")
 
        setTimeout(function (){
            AIquestion.innerText = `You thought of something abstract`
            questionsAndOptions("0", "white", "white")
            AIquestion.style.opacity = 1
        }, 700)
     }

     if (AIquestion.innerText == possibleQuestions.noOfLegs) {
        questionsAndOptions("0.3", "white", "rgba(250, 12, 218, .8)")
 
        setTimeout(function (){
             AIquestion.innerText = possibleQuestions.canFly
             optionYes.querySelector(".four-legs").innerText = "Yes"
             optionNo.querySelector(".two-legs").innerText = "No"
             questionsAndOptions("1", "white", "white")
            

            optionYes.addEventListener("click", () =>{
                if (AIquestion.innerText == possibleQuestions.canFly) {
                    questionsAndOptions("0.3", "rgba(250, 12, 218, .8)", "white")
             
                    setTimeout(function (){
                         AIquestion.innerText = `You thought of a bird`
                         questionsAndOptions("0", "white", "white")
                         AIquestion.style.opacity = 1
                    }, 700)
                }
            })

            optionNo.addEventListener("click", () =>{
                if (AIquestion.innerText == possibleQuestions.canFly) {
                    questionsAndOptions("0.3", "white", "rgba(250, 12, 218, .8)")
             
                    setTimeout(function (){
                         AIquestion.innerText = `You thought of a Human being`
                         questionsAndOptions("0", "white", "white")
                         AIquestion.style.opacity = 1
                    }, 700)
                }
            })
        }, 700)
    }




})



