const questions = [
	{
		question: "Какой язык работает в браузере?",
		answers: ["Java", "C", "Python", "JavaScript"],
		correct: 4,
	},
	{
		question: "Что означает CSS?",
		answers: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		],
		correct: 2,
	},
	{
		question: "Что означает HTML?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 1,
	},
	{
		question: "В каком году был создан JavaScript?",
		answers: ["1996", "1995", "1994", "все ответы неверные"],
		correct: 2,
	},
];


// find element
const headerContainer = document.querySelector('#header')
const listContainer = document.querySelector('#list')
const submitBtn = document.querySelector('#submit')

//variables of game
let score = 0; //qty of right answers
let questionIndex = 0; // current question


clearPage()
showQuestion()
submitBtn.onclick = checkAnswer;


function clearPage(){
headerContainer.innerHTML = '';
listContainer.innerHTML = '';	
}

function showQuestion(){

	// question
	const headerTample = `<h2 class="title">%title%</h2>`;
	const title = headerTample.replace('%title%', questions[questionIndex]['question'])
	headerContainer.innerHTML = title;
	

	//answers
	//for ([index, answerText] of questions[questionIndex]['answers'].entries()) {
	let answerNumber = 1;
	
	for (answerText of questions[questionIndex]['answers']) {
	console.log(answerNumber, answerText)
	//	console.log(index+1, answerText)

	const questionTamplate = 
		`<li>
			<label>
				<input value="%number%" type="radio" class="answer" name="answer" />
				<span>%answer%</span>
			</label>
		</li>`;
		let answerHTML = questionTamplate.replace('%answer%', answerText)
		

		answerHTML = answerHTML.replace('%number%', answerNumber)

		listContainer.innerHTML += answerHTML;
		answerNumber++
	console.log(answerHTML);
	}
	
}

function checkAnswer(){
	console.log('checkanswer started');

	// find choosen radio btn
	const checkedRadio = listContainer.querySelector('input[type="radio"]:checked')
	console.log(checkedRadio);
	
	// if answer was not choosen, escape function
	if(!checkedRadio){
		submitBtn.blur();
		return
	}
		
}


