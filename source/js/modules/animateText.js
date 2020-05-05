export default function prePareText(elementSelector, timer = 500, delay = 0) {
  let timeOffset = delay + 20;
  const element = document.querySelector(elementSelector);
  if (!element) {
    return;
  }
  const text = element.textContent.trim().split(` `).filter((latter)=>latter !== ``);

  const content = text.reduce((fragmentParent, word) => {
    const wordElement = Array.from(word).reduce((fragment, latter, index) => {
      if (index % 2 === 0) {
        timeOffset += 40;
      } else {
        timeOffset -= 20;
      }
      fragment.appendChild(createElement(latter, timeOffset, timer));
      return fragment;
    }, document.createDocumentFragment());
    const wordContainer = document.createElement(`span`);
    wordContainer.classList.add(`word`);
    wordContainer.appendChild(wordElement);
    fragmentParent.appendChild(wordContainer);
    return fragmentParent;
  }, document.createDocumentFragment());

  element.innerHTML = ``;
  element.appendChild(content);
}

function createElement(letter, timeOffset, timer) {
  const span = document.createElement(`span`);
  span.textContent = letter;
  span.style.animationDelay = `${timeOffset}ms`;
  span.style.animationDuration = `${timer}ms`;
  return span;
}
