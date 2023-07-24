
const paragraph = document.querySelector("#myParagraph").innerText;
const cloud = document.querySelector("#myWordCloud");


const words = paragraph.split(" ");
const wordsObj = {};
for (let word of words) {
    if (wordsObj[word]) {
        wordsObj[word]++;
    } else {
        wordsObj[word] = 1;
    }
}
const sortWords = Object.keys(wordsObj).sort(function (a, b) {
    return wordsObj[b] - wordsObj[a];
});

for (let i = 0; i < 12; i++) {
    const word = sortWords[i];
    const count = wordsObj[word];
    const span = document.createElement("span");
    span.innerText = word;
    span.style.fontSize = `${64 - i * 4}px`;
    span.style.marginRight = "3px";
    span.style.color = "blue";
    span.style.fontWeight = "bold";
    span.style.opacity = count / sortWords.length;
    cloud.appendChild(span);
}