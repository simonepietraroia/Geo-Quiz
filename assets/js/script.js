// This is going to contain all the questions //
const questions = [
    {
        question: "What is the capital of Italy?";,
        options: ["Rome", "Paris", "Madrid", "London"];,
        answer: 0;
    },

    {
        question: "What is the country with the largest population in Europe?";,
        options: ["Germany", "Russia", "England", "Poland"];,
        answer: 1;
    },

    {
        question: "How many states does the United States have?";,
        options: ["52", "49", "48", "50"];,
        answer: 3;
    },

    {
        question: "What is the capital of Japan?";,
        options: ["Bejing", "Tokyo", "Moscow", "Manila"];,
        answer: 1;
    },

    {
        question: "Select the country with the largest territory";,
        options: ["Canada", "South Africa", "Russia", "Brazil"];,
        answer: 2;
    },

    {
        question: "What country has the largest border with a french territory";,
        options: ["Brazil", "Monaco", "Belgium", "Switzerland"]
        answer: 0;
    },

    {
        question: "Who is the current prime minister of England?";,
        options: ["Rishi Sunak", "Boris Johnson", "Liz Truss", "Humza Yousaf"];,
        answer: 0;
    },

    {
        question: "What country invented Ice Cream?";,
        options: ["Italy", "United States", "Ethiopia", "China"];,
        answer: 3;
    },

    {
        question: "What is the longest non-stop commercial flight?";,
        options: ["Perth to London", " Houston to Sydney", "Singapore to New York", " Dubai to Auckland"];,
        answer: 2;
    }
]

let currentQuestion = 0;
let score = 0;

const questionElem = document.getElementById("question-display");
const optionElems = document.querySelectorAll("#options button");
const scoreElem = document.getElementById("score");

/**
 * This function goes through the questions listed in the questions variable and cycles through them.
 * The function also presents the options when the question is loaded.
 */
function displayQuestion() {
	let question = questions[currentQuestion];
	questionElem.innerText = question.question;
	for (let i = 0; i < 4; i++) {
		optionElems[i].innerText = question.options[i];
		optionElems[i].addEventListener("click", checkAnswer);
	}
}

function checkAnswer() {

}

displayQuestion();