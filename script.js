(function() {
    function buildQuiz() {

      const output = [];

      myQuestions.forEach((currentQuestion, questionNumber) => {

        const answers = [];

        for (letter in currentQuestion.answers) {

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });

      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {

      const answerContainers = quizContainer.querySelectorAll(".answers");

      let numCorrect = 0;

      myQuestions.forEach((currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;
          answerContainers[questionNumber].style.color = "darkgreen";
        } else {
          answerContainers[questionNumber].style.color = "red";
        }
      });
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("result");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: "What was Australia's former name?",
        answers: {
          a: "Bosnia",
          b: "New Holland",
          c: "New Amsterdam",
          d: "Andorra"
        },
        correctAnswer: "b"
      },
      {
        question: "What is the name of the medical condition whereby people randomly develop a foreign accent?",
        answers: {
          a: "Frenchy Flu",
          b: "Foreign Accent Syndrome",
          c: "Accentus Developas",
          d: "Insomnia"
        },
        correctAnswer: "b"
      },
      {
        question: "What does the word 'noisome' mean?",
        answers: {
            a: "Loud, raucous",
            b: "Something which has the potential for noise",
            c: "Possessing an extraordinarily offensive odor",
            d: "Possessing Great Beauty"
        },
        correctAnswer: "c"
      },
      {
        question: "Cabbage contains what percentage of water?",
        answers: {
            a: "32 percent",
            b: "91 percent",
            c: "15 percent",
            d: "2 percent"
        },
        correctAnswer: "b"
      },
      {
        question: "What does 'bardolatry' mean?",
        answers: {
            a: "Love for the game of billards",
            b: "Praise of terrible poetry",
            c: "Hypocritical written language",
            d: "Unrestrained adulation for Shakespeare"
        },
        correctAnswer: "d"
      },
      {
        question: "On average, how many minutes of total action are played in the game of baseball?",
        answers: {
            a: "30",
            b: "62",
            c: "18",
            d: "90"
        },
        correctAnswer: "c"
      },
      {
        question: "According to statistics, you'll probably live the longest in which U.S. state?",
        answers: {
            a: "New York",
            b: "Maryland",
            c: "Illinois",
            d: "Hawaii"
        },
        correctAnswer: "d"
      },
      {
        question: "Who are the 'digerati'?",
        answers: {
            a: "Fans of the push-button phone",
            b: "A band of struggling opera singers",
            c: "New-age dancers",
            d: "Information technology experts"
        },
        correctAnswer: "d"
      },
      {
        question: "What was the first name for the hashtag symbol (#)?",
        answers: {
            a: "Octothorp",
            b: "Pound Sign",
            c: "Zed Mark",
            d: "Number Sign"
        },
        correctAnswer: "a"
      },
      {
        question: "Where is the world's largest rotating globe located?",
        answers: {
            a: "Ohio",
            b: "Louisiana",
            c: "Maine",
            d: "Oregon"
        },
        correctAnswer: "c"
      },
      {
        question: "On average, how many minutes of total action are played in the game of baseball?",
        answers: {
            a: "30",
            b: "62",
            c: "18",
            d: "90"
        },
        correctAnswer: "c"
      },
      {
        question: "What is the national animal of Scotland?",
        answers: {
            a: "Unicorn",
            b: "Rabbit",
            c: "Turtle",
            d: "Raven"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the best-selling musical instrument in the world?",
        answers: {
            a: "Harmonica",
            b: "Drums",
            c: "Flute",
            d: "Accordion"
        },
        correctAnswer: "a"
      },
      {
        question: "How many French fries does the average American eat each year?",
        answers: {
            a: "Less than 2 pounds",
            b: "More than 50 pounds",
            c: "12 pounds",
            d: "30 pounds"
        },
        correctAnswer: "d"
      },
      {
        question: "Which country has competed in the most Summer Olympic games without winning a medal?",
        answers: {
            a: "Japan",
            b: "India",
            c: "Vietnam",
            d: "Leichenstein"
        },
        correctAnswer: "d"
      }
    ];

    buildQuiz();

    submitButton.addEventListener("click", showResults);
  })();