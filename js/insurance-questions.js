const questions = document.querySelectorAll(
  ".insurance__questions__box button"
);

function activateQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("activate");
  const activate = answer.classList.contains("activate");
  question.setAttribute("aria-expanded", activate);
}

function eventQuestions(question) {
  question.addEventListener("click", activateQuestion);
}

questions.forEach(eventQuestions);
