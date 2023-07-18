const yourQuestionInput = document.querySelector('[data-js="your-Question"]');
const yourAnswerInput = document.querySelector('[data-js="your-Answer"]');
const yourTagInput = document.querySelector('[data-js="your-Tag"]');
const yourSpacer = document.querySelector('[data-js="your-spacer"]');
const form = document.querySelector('[data-js="form"]');
const submitButton = document.querySelector('[data-js="submit-button"]');
const characterCounter = document.querySelector('[data-js="char_count0"]');
const characterCounter1 = document.querySelector('[data-js="char_count1"]');
const characterCounter2 = document.querySelector('[data-js="char_count2"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  if (yourQuestionInput.value) {
    const newQuestion = document.createElement("p");
    newQuestion.textContent = data["your-Question"];
    yourSpacer.append(newQuestion);
    newQuestion.classList.add("yourquestion__new");

    const sectionForButton = document.createElement("section");
    newQuestion.append(sectionForButton);
    sectionForButton.classList.add("question__button--justify");

    const showAnswer = document.createElement("button");
    showAnswer.textContent = "show answer";
    sectionForButton.append(showAnswer);
    showAnswer.classList.add("button-question");

    const hideAnswer = document.createElement("button");
    hideAnswer.textContent = "hide answer";
    sectionForButton.append(hideAnswer);
    hideAnswer.classList.add("button-question");

    const listForTag = document.createElement("ul");
    newQuestion.append(listForTag);

    const newTag = document.createElement("li");
    newTag.textContent = data["your-Tag"];
    listForTag.append(newTag);
    newTag.classList.add("yourQuestin_tag");

    showAnswer.addEventListener("click", () => {
      const newAnswer = document.createElement("p");
      newAnswer.textContent = data["your-Answer"];
      newQuestion.append(newAnswer);
      newAnswer.classList.add("show-answer");
      hideAnswer.addEventListener("click", () => {
        newAnswer.innerHTML = "";
        newAnswer.classList.remove("show-answer");
      });
    });
  }
});

const maxNumbOfChars = 0;

const countCharacters = (input, character) => {
  let numOfEnteredChars = input.value.length;
  let counter = maxNumbOfChars + numOfEnteredChars;
  character.textContent = counter + "/150";
};

yourQuestionInput.addEventListener("input", () => {
  countCharacters(yourQuestionInput, characterCounter);
});

yourAnswerInput.addEventListener("input", () => {
  countCharacters(yourAnswerInput, characterCounter1);
});

yourTagInput.addEventListener("input", () => {
  countCharacters(yourTagInput, characterCounter2);
});
