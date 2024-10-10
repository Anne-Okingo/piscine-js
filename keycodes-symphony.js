document.addEventListener("keydown", function (event) {
    compose(event);
});

export const compose = (e) => {
    if (!e) {
        return;
    }

    const charCode = e.key.charCodeAt(0);
    const isLetter = [...Array(26).keys()].map((i) => i + 97).includes(charCode);

    if (isLetter) {
        const noteElement = document.createElement("div");
        const colorValue = (255 / 26) * (charCode - 97);
        noteElement.classList.add("note");
        noteElement.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
        noteElement.innerHTML = e.key;
        document.body.appendChild(noteElement);
    } else if (e.key === "Backspace") {
        const notes = document.getElementsByClassName("note");
        if (notes.length > 0) {
            notes[notes.length - 1].remove();
        }
    } else if (e.key === "Escape") {
        const notes = document.getElementsByClassName("note");
        while (notes.length > 0) {
            notes[0].remove();
        }
    }
}
