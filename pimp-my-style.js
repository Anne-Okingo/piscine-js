import { styles as styleClasses } from "./pimp-my-style.data.js";
let styleCounter = 0;

export const pimp = () => {
    const buttonElement = document.querySelector("button.button");
    if (!buttonElement.classList.contains("unpimp")) {
        buttonElement.classList.add(styleClasses[styleCounter]);
        styleCounter++;
    } else {
        styleCounter--;
        buttonElement.classList.remove(styleClasses[styleCounter]);
        if (styleCounter === 0) {
            buttonElement.classList.toggle("unpimp");
        }
    }
    if (styleCounter === styleClasses.length) {
        buttonElement.classList.toggle("unpimp");
    }
}
