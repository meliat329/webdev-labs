/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const makeDesert = () => {
   document.querySelector("body").className = "desert";
};
const makeOcean = () => {
   document.querySelector("body").className = "ocean";
};
const makeHC = () => {
   document.querySelector("body").className = "high-contrast";
};
const makeEmpty = () => {
   document.querySelector("body").className = "";
};

document.querySelector("#default").addEventListener('click', makeEmpty);
document.querySelector("#desert").addEventListener('click', makeDesert);
document.querySelector("#ocean").addEventListener('click', makeOcean);
document.querySelector("#high-contrast").addEventListener('click', makeHC);
