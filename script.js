const boxes = document.querySelectorAll(".box");
const newColorsBtn = document.querySelector(".newColors");
const boxColors = [];
const h1 = document.querySelector("h1")
////////generating random RGB color////////

function generateRandomColor() {
    return [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255)
    ];
}

///////// adding colors to boxes ////////

function addRandomColors() {
    boxes.forEach(function (box) {
        var rgb = generateRandomColor();
        box.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

        boxColors.push(rgb);
    });
}

newColorsBtn.addEventListener("click", function () {
   /////clear//////
    boxColors.length = 0;

   addRandomColors();

   //// pick random color //////
    const randomElement = boxColors[Math.floor(Math.random() * boxColors.length)];
    console.log(randomElement);
});

 addRandomColors();