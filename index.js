const questions = [
{
	question: "What is the capital city of Kenya?",
	answers: [
		{text: "Mombasa", correct: false},
		{text: "Nairobi", correct: true},
		{text: "Kisumu", correct: false},
		{text: "Eldoret", correct: false},
	]
},
{
	question: "What is the stapple food Kenya?",
	answers: [
		{text: "Ugali", correct: true},
		{text: "Pizza", correct: false},
		{text: "Changarawe", correct: false},
		{text: "Bugger", correct: false},
	]
},
{
	question: "Where is Kenya located in Africa?",
	answers: [
		{text: "North", correct: false},
		{text: "South", correct: false},
		{text: "West", correct: false},
		{text: "East", correct: true},
	]
},
{
	question: "What is the nation languege in Kenya?",
	answers: [
		{text: "Kiswahili", correct: true},
		{text: "French", correct: false},
		{text: "Arabic", correct: false},
		{text: "Portugues", correct: false},
	]
},
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Next";
	showQuestion();
}

function showQuestion(){
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + "." + currentQuestion.question;

	answerButton.innerHTML = '';

	currentQuestion.answers.forEach(answer => {
		const button = document.createElement("button");
		button. innerHTML = answer.text;
		button.classList.add("btn");
		answerButton.appendChild(button);
		if(answer.correct){
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", selectAnswer);
	});
}

function selectAnswer(e){
	const selectBtn = e.target;
	const isCorrect = selectBtn.dataset.correct === "true";
	if(isCorrect){
		selectBtn.classList.add("correct");
		score++;
	}else{
		selectBtn.classList.add("incorrect");
	}
	Array.from(answerButton.children).forEach(button =>{
		if(button.dataset.correct === "true"){
			button.classList.add("correct");
		}
		button.disabled = true;
	});
	nextButton.style.display = "block";
}

function showScore(){

	answerButton.innerHTML = '';

	questionElement.innerHTML = `Your score is ${score} out of ${questions.length}!`;
	nextButton.innerHTML = "Play Again";
	nextButton.style.display = "block";
}

function handleNextButton(){
	currentQuestionIndex++;
	if(currentQuestionIndex < questions.length){
		showQuestion();
	}else{
		showScore();
	}
}

nextButton.addEventListener("click", ()=>{
	if (currentQuestionIndex < questions.length) {
		handleNextButton();
	}else{
		startQuiz();
	}
})

startQuiz();