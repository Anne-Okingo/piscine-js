export const generateLetters = () => {
    for (let index = 0; index < 120; index++) {
        let letterElement = document.createElement("div");
        letterElement.style.fontSize = `${11 + index}px`;
        letterElement.textContent = String.fromCharCode(
            65 + Math.floor(Math.random() * 26)
        );
        if (index < 40) {
            letterElement.style.fontWeight = "300";
        } else if (index < 80) {
            letterElement.style.fontWeight = "400";
        } else {
            letterElement.style.fontWeight = "600";
        }
        document.getElementsByTagName("body")[0].appendChild(letterElement);
    }
}
