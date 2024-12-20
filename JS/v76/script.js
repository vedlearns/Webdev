const questionsContainer = [
  ["Which HTML tag is used to define a paragraph?", "p", "div", "span", "br"],
  [
    "Which property is used to change the background color in CSS?",
    "background-color",
    "color",
    "background",
    "fill-color",
  ],
  [
    "What does the <title> tag define in an HTML document?",
    "The title shown in the browser tab",
    "The main heading of the page",
    "The footer of the page",
    "The navigation bar",
  ],
  [
    "Which CSS property is used to make text bold?",
    "font-weight",
    "font-size",
    "text-transform",
    "font-style",
  ],
  [
    "What is the correct HTML for adding a hyperlink?",
    "<a href='url'>Text</a>",
    "<a url='url'>Text</a>",
    "<link href='url'>Text</link>",
    "<hyperlink href='url'>Text</hyperlink>",
  ],
  [
    "Which CSS property is used to control the space between lines of text?",
    "line-height",
    "letter-spacing",
    "text-spacing",
    "line-spacing",
  ],
  [
    "What is the default position of an HTML element in CSS?",
    "static",
    "fixed",
    "absolute",
    "relative",
  ],
  ["Which HTML tag is used to create a table row?", "tr", "th", "td", "row"],
  [
    "Which property is used to set the shadow around a text in CSS?",
    "text-shadow",
    "box-shadow",
    "shadow",
    "font-shadow",
  ],
  [
    "Which HTML attribute specifies an alternate text for an image?",
    "alt",
    "src",
    "title",
    "text",
  ],
];
let a = 1;
const Next = document.querySelector(".Next");
const question = document.querySelector("#question");
const o1 = document.querySelector("#q1");
const o2 = document.querySelector("#q2");
const o3 = document.querySelector("#q3");
const o4 = document.querySelector("#q4");
const index = document.querySelector("#indexNo");
let r = 2;
Next.addEventListener("click", () => {
  if (a < 10) {
    index.innerText = `${++a}/10`;
    question.innerText = questionsContainer[a - 1][0];
    o1.innerText = questionsContainer[a - 1][r++];
    if (r > 4) r = 1;
    o2.innerText = questionsContainer[a - 1][r++];
    if (r > 4) r = 1;
    o3.innerText = questionsContainer[a - 1][r++];
    if (r > 4) r = 1;
    o4.innerText = questionsContainer[a - 1][r++];
    if (r > 4) r = 1;
  }
});
const q1text = document.querySelector("#q1text");
const q2text = document.querySelector("#q2text");
const q3text = document.querySelector("#q3text");
const q4text = document.querySelector("#q4text");

o1.addEventListener("click", () => {
  if (o1.innerText == questionsContainer[a - 1][1]) {
    q1text.parentNode.classList.add("correct");
    q1text.innerText = "Correct";
  } else {q1text.innerText = "Incorrect";
    q1text.parentNode.classList.add("incorrect");
}});
o2.addEventListener("click", () => {
  if (o2.innerText == questionsContainer[a - 1][1]) {
    q2text.parentNode.classList.add("correct");
    q2text.innerText = "Correct";
  } else {q2text.innerText = "Incorrect";
    q2text.parentNode.classList.add("incorrect");
}
});
o3.addEventListener("click", () => {
  if (o3.innerText == questionsContainer[a - 1][1])
  { q3text.parentNode.classList.add("correct");
    q3text.innerText = "Correct";
  }
  else {q3text.innerText = "Incorrect";
    q3text.parentNode.classList.add("incorrect");
}
});
o4.addEventListener("click", () => {
  if (o4.innerText == questionsContainer[a - 1][1])
  {
    q4text.parentNode.classList.add("correct");
    q4text.innerText = "correct";
  }
    else {q4text.innerText = "Incorrect";
        q4text.parentNode.classList.add("incorrect");
    }
});
