const questions = [
    {
        question: "¿Cuál es el nombre del colegio al que asiste Harry Potter?",
        options: ["Durmstrang", "Beauxbatons", "Hogwarts", "Ilvermorny"],
        answer: "Hogwarts"
    },
    {
        question: "¿Quién es el director de Hogwarts durante la mayor parte de la serie?",
        options: ["Severus Snape", "Albus Dumbledore", "Minerva McGonagall", "Gellert Grindelwald"],
        answer: "Albus Dumbledore"
    },
    {
        question: "¿Qué criatura mágica es conocida por su capacidad de hacer que los humanos se olviden de cosas?",
        options: ["Basilisco", "Dementor", "Thestral", "Boggart"],
        answer: "Dementor"
    },
    {
        question: "¿Cuál es el nombre de la tienda de varitas en Diagon Alley?",
        options: ["Ollivanders", "Florean Fortescue's", "Weasleys' Wizard Wheezes", "Borgin and Burkes"],
        answer: "Ollivanders"
    },
    {
        question: "¿Quién es el mejor amigo de Harry Potter?",
        options: ["Ron Weasley", "Draco Malfoy", "Neville Longbottom", "Cedric Diggory"],
        answer: "Ron Weasley"
    },
    {
        question: "¿Qué animal representa a la casa de Gryffindor?",
        options: ["Serpiente", "León", "Águila", "Tejón"],
        answer: "León"
    },
    {
        question: "¿Cómo se llama el hermano de Ron Weasley que es un famoso jugador de Quidditch?",
        options: ["Fred", "George", "Bill", "Charlie"],
        answer: "Bill"
    },
    {
        question: "¿Cuál es la poción que permite a quien la bebe asumir la apariencia de otra persona?",
        options: ["Felix Felicis", "Amortentia", "Polyjuice Potion", "Veritaserum"],
        answer: "Polyjuice Potion"
    },
    {
        question: "¿Qué materia enseña Severus Snape en Hogwarts?",
        options: ["Defensa Contra las Artes Oscuras", "Herbología", "Pociones", "Transformaciones"],
        answer: "Pociones"
    },
    {
        question: "¿Quién se convierte en el nuevo director de Hogwarts al final de la serie?",
        options: ["Severus Snape", "Minerva McGonagall", "Filius Flitwick", "Horace Slughorn"],
        answer: "Minerva McGonagall"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('next-button').classList.add('hidden');
    document.getElementById('result').innerText = '';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    document.getElementById('question').innerText = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.onclick = () => checkAnswer(option, question.answer);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption, correctAnswer) {
    const resultElement = document.getElementById('result');
    if (selectedOption === correctAnswer) {
        resultElement.innerText = "¡Correcto!";
        score++;
    } else {
        resultElement.innerText = "Incorrecto. La respuesta correcta es: " + correctAnswer;
    }
    document.getElementById('next-button').classList.remove('hidden');
}

document.getElementById('next-button').onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        document.getElementById('result').innerText = '';
    } else {
        document.getElementById('result').innerText = `¡Has terminado el cuestionario! Tu puntuación es: ${score} de ${questions.length}`;
        document.getElementById('next-button').classList.add('hidden');
    }
};

startGame();
