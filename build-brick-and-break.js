export const build = (n) => {
    let container = document.getElementsByTagName("body")[0];
    let count = 1;
    let timer = setInterval(() => {
        let brickElement = document.createElement("div");
        brickElement.setAttribute("id", "brick-" + count);
        count % 3 === 2 ? (brickElement.dataset.foundation = true) : null;
        container.appendChild(brickElement);
        count++;
        count > n ? clearInterval(timer) : ''
    }, 100);
}

export const repair = (...ids) => {
    ids.forEach((id) => {
        let brick = document.getElementById(id);
        brick.getAttribute("foundation") ? (brick.dataset.repaired = "in progress") : (brick.dataset.repaired = true);
    });
}

export const destroy = () => {
    let bricks = document.getElementsByTagName("div");
    bricks[bricks.length - 1].remove();
}
