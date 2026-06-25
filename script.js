const questions=[

{
question:"Де ми познайомилися?",
answers:["Кафе","Парк","Балкон гуртожитку","Школа"],
correct:2
},

{
question:"Хто написав першим?",
answers:["Я","Ти","Друг","Ніхто"],
correct:1
},

{
question:"Кого я люблю більше?",
answers:["Котіків","Сабачєк","Тебе","Маму"],
correct:2
},

{
question:"Як звали нашого мальчіка?",
answers:["Густав","Альберт","Мішаня","Я за хлібом"],
correct:1
},

{
question:"Перцо?",
answers:["Маловато","Многовато","Норм","Хз"],
correct:0
}

];


let currentQuestion=0;

const question=
document.getElementById("question");

const answers=
document.getElementById("answers");


loadQuestion();

function loadQuestion(){

question.innerText=
questions[currentQuestion]
.question;

answers.innerHTML="";


questions[currentQuestion]
.answers.forEach(

(answer,index)=>{

const button=
document.createElement("button");

button.innerText=
answer;

button.classList.add(
"answer-btn"
);

button.onclick=()=>{

checkAnswer(index)

};

answers.appendChild(
button
);

}

);

}


function checkAnswer(index){

if(
index===
questions[currentQuestion]
.correct
){

currentQuestion++;

if(
currentQuestion<
questions.length
){

loadQuestion();

}
else{

showFinal();

}

}
else{

alert(
"Неправильно ❤️ Спробуй ще"
)

}

}


function showFinal(){

document
.getElementById(
"quiz-container"
)
.classList.add(
"hidden"
);

document
.getElementById(
"final-section"
)
.classList.remove(
"hidden"
);

startTimer();

}


function startTimer(){

const startDate=
new Date(
"2025-06-27T09:00:00"
);

setInterval(()=>{

const now=
new Date();

const diff=
now-startDate;

const days=
Math.floor(
diff/
(1000*60*60*24)
);

const hours=
Math.floor(
(diff%
(1000*60*60*24))
/
(1000*60*60)
);

const minutes=
Math.floor(
(diff%
(1000*60*60))
/
(1000*60)
);

const seconds=
Math.floor(
(diff%
(1000*60))
/
1000
);

document
.getElementById(
"timer"
)
.innerHTML=`

${days} днів ❤️ <br>
${hours} годин ❤️ <br>
${minutes} хвилин ❤️ <br>
${seconds} секунд

`;

},1000);

}



setInterval(()=>{

const heart=
document.createElement(
"div"
);

heart.innerHTML="❤️";

heart.classList.add(
"heart"
);

heart.style.left=
Math.random()*100
+"vw";

heart.style.animationDuration=
Math.random()*4+2
+"s";

document.body.appendChild(
heart
);

setTimeout(()=>{

heart.remove()

},5000)

},300);