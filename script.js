const startBtn = document.getElementById("btn-start");
const btnContainer= document.getElementById('btn-container').children;
const quesContainter = document.getElementById("question-container")
const nextBtn = document.getElementById("btn-next");
const qeuSpace = document.getElementById("que-space")
const scoreDiv = document.getElementById("scoreDiv");
const scoreSpace = document.getElementById("scoreSpace");

let scoreValue = 0; 
let increValus=0;








startBtn.addEventListener('click', ()=>{toStart(increValus,scoreValue)});
nextBtn.addEventListener('click', next);



function toStart(incre,score){
    scoreDiv.style.display ="block";
    setBack(btnContainer);
    quesContainter.classList.remove('hide');
    nextBtn.classList.remove('hide');
    giveQuestion(btnContainer);
    incre = 1;
    score = 0;
   
    increValus = incre;
    scoreValue = score;
   
    displayFun(increValus,scoreValue);
    nextBtn.removeEventListener('click', next);
   

}











function giveQuestion(btnArr){
   
    
    const selectedQues = question[Math.floor(Math.random() * question.length )];
    qeuSpace.innerText = selectedQues.question;
    selectedQues.answer.map((option,index)=>{
        const theBtn = btnArr[index];
        
        theBtn.dataset.correct = option.correct;
        theBtn.innerText = option.option;
        theBtn.classList.remove("hide");
        theBtn.removeEventListener('click',afterPicking);
        theBtn.addEventListener('click',afterPicking);
        
     
        }

    );
    
} 



function afterPicking(){
    console.log("eary", scoreValue);
    
    let clickedBtn = event.target.dataset.correct;
    console.log(clickedBtn); 
    const theLength = btnContainer.length;
    for(let i =0; i< theLength; i++){
        let btn = btnContainer[i];
        btn.removeEventListener('click',afterPicking);
        //btn.removeEventListener('click',()=>{afterPicking(btnA)}); // to disable the answer btn after an answer has been selected;
        if("correct" in btn.dataset === true){
           if(btn.dataset.correct === "true"){
              btn.classList.add('right')
           }else{
               btn.classList.add('wrong')
           }
        }
    }

    
    if(clickedBtn==='true'){   
        scoreValue++;
       
        displayFun(increValus,scoreValue);
    }
    nextBtn.addEventListener('click', next);


}


function next(){
    
   
    setBack(btnContainer);
    giveQuestion(btnContainer);
    
    increValus= increValus + 1;
   
    displayFun(increValus,scoreValue);
    nextBtn.removeEventListener('click', next);

}

function setBack(btn){
    document.body.style.backgroundColor = "yellow";
    const theLength = btn.length;
    for(let i =0; i< theLength; i++){
        let btnA = btn[i];
        btnA.classList.add('hide'); 
        btnA.classList.remove('right');
        btnA.classList.remove('wrong');
    }  
}

function displayFun(incre,score){
    ;
    
    let appearScore = `${score}/${incre}`
    

    scoreSpace.innerText = appearScore;

}



const question = [
    {question: "lines of for are called?",
     answer: [
         {option:"Electric Field", correct:false},
         {option:"potential Difference", correct:false},
         {option:"Electric flus", correct:true}
         ]
    
    },

    {question: "The followig are proprties of electric line of force except?",
     answer: [
         {option:"Line of force are imaginary", correct:false},
         {option:"they repel each other side ways", correct:false},
         {option:"they sparkels", correct:true},
         {option:"line of force do not intersect", correct:false}]
    
    },

    {question: "The following are insulators except?",
     answer: [
         {option:"glass", correct:false},
         {option:"dry wood", correct:false},
         {option:"water", correct:true},
         {option:"plastic", correct:false}]
    
    }
        
        


        ]

