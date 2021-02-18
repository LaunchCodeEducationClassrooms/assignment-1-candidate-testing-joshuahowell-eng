const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = '';
let correctAnswer = '';
let candidateAnswer = '';
let questions = ['Who was the first American woman in space?', 'True or false: 5000 meters == 5 kilometers?', '(5 + 3)/2 * 10 = ?', "'Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?'" , 'What is the minimum crew size for the ISS?'];

let correctAnswers = ['Sally Ride', 'True', '40', 'Trajectory', '3'];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question('Name: ');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++){
candidateAnswers[i] = input.question(`${i+1}) ${questions[i]} `);
console.log(`Your answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`)
}
}


function gradeQuiz() {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

let correctCandidateAnswers = [];
for (let i = 0; i < candidateAnswers.length; i++){
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
correctCandidateAnswers.push(1);
  }
}
let grade = (correctCandidateAnswers.length/questions.length*100);
if (grade >= 80) {result = 'PASS'}
else{
  result='FAIL'
}
console.log(`>>> You got ${grade}%, (${correctCandidateAnswers.length} out of 5 responses correct)<<<\n>>> Status: ${result}<<<`)
; 

}
function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`\n\Hello ${candidateName}!\n`)
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  console.log(candidateAnswers)
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};