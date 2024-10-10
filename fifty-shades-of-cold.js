import { colors as coldColors } from "./fifty-shades-of-cold.data.js";

export const generateClasses = () => {
    const headElement = document.getElementsByTagName("head")[0];
    const styleElement = document.createElement("style");
    coldColors.forEach((color) => {
        styleElement.innerHTML += `.${color} {\n  background: ${color};\n }\n\n`;
    });
    console.log(styleElement.innerHTML);
    headElement.appendChild(styleElement);
}

export const generateColdShades = () => {
    const bodyElement = document.getElementsByTagName("body")[0];
    coldColors.forEach((color) => {
        if (
            color.match(/(aqua|blue|turquoise|green|cyan|navy|purple)/) !== null
        ) {
            const colorDiv = document.createElement("div");
            colorDiv.classList.add(color);
            colorDiv.innerHTML = color;
            bodyElement.appendChild(colorDiv);
        }
    });
}

export const choseShade = (selectedShade) => {
    document.querySelectorAll("div").forEach((div) => {
        div.className = selectedShade;
    });
}
