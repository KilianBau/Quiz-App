console.clear();

const bookmarkDefault = document.querySelector('[data-js="bookmark-default"]');
const bookmarkButton = document.querySelector('[data-js="toggle-bookmark"]');
const bookmarkDefault1 = document.querySelector(
  '[data-js="bookmark-default1"]'
);
const bookmarkButton1 = document.querySelector('[data-js="bookmark-default1"]');
const bookmarkDefault2 = document.querySelector(
  '[data-js="bookmark-default2"]'
);
const bookmarkButton2 = document.querySelector('[data-js="toggle-bookmark2"]');

const answer0 = document.querySelector('[data-js="answer0"]');
const answerSpace0 = document.querySelector('[data-js="answer0"]');
const question1 = document.querySelector('[data-js="question1"]');
const answerButton0 = document.querySelector('[data-js="show-answer0"]');
const hideButton0 = document.querySelector('[data-js="hide-answer0"]');
const answerButton1 = document.querySelector('[data-js="answer-button1"]');
const hideButton1 = document.querySelector('[data-js="hide-answer1"]');
const answerButton2 = document.querySelector('[data-js="answer-button2"]');
const hideButton2 = document.querySelector('[data-js="hide-answer2"]');
const answerSpace1 = document.querySelector('[data-js="answer1"]');
const answerSpace2 = document.querySelector('[data-js="answer2"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkDefault.classList.toggle("bookmark-icon__clicked");
});

bookmarkButton1.addEventListener("click", () => {
  bookmarkDefault1.classList.toggle("bookmark-icon__clicked");
});

bookmarkButton2.addEventListener("click", () => {
  bookmarkDefault2.classList.toggle("bookmark-icon__clicked");
});

const answer = document.createElement("p");

answerButton0.addEventListener("click", () => {
  answer.textContent = "flex-direction";
  answerSpace0.append(answer);
  answer.classList.add("show-answer");
});

hideButton0.addEventListener("click", () => {
  answer.innerHTML = "";
  answer.classList.remove("show-answer");
});

answerButton1.addEventListener("click", () => {
  answer.textContent = "Nice answer!";
  answerSpace1.append(answer);
  answer.classList.add("show-answer");
});

hideButton1.addEventListener("click", () => {
  answer.innerHTML = "";
  answer.classList.remove("show-answer");
});

answerButton2.addEventListener("click", () => {
  answer.textContent = "Cool answer!";
  answerSpace2.append(answer);
  answer.classList.add("show-answer");
});

hideButton2.addEventListener("click", () => {
  answer.innerHTML = "";
  answer.classList.remove("show-answer");
});
