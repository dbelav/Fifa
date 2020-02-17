let ball = document.getElementById('ball');
let container = document.getElementById('container');
let goal = document.getElementById('goal');

let heigthWindow = container.clientHeight;
let widthWindow = container.clientWidth;

(function ballCoordStart(e) {
    ball.style.left = `${container.clientWidth / 2 - ball.offsetHeight / 2}px`;
    ball.style.top = `${container.clientHeight *0.65}px`;

})();

(function ballCoordStrart(params) {
    document.onclick = (e) => {
        let goalHeight = goal.clientHeight;

        ball.style.top = `${e.clientY - goalHeight - ball.offsetHeight / 2}px`
        ball.style.left = `${e.clientX - ball.offsetWidth / 2}px`
    }

})();

(function randomGoalY(min, max) {
    let goalY = Math.floor(Math.random() * (+max - +min)) + min;
    goal.style.top = `${goalY}px`

})(0, +heigthWindow / 3);

(function randomGoalX(min, max) {
    let goalX = Math.floor(Math.random() * (+max - +min)) + min;
    console.log(goalX);
    goal.style.left = `${goalX}px`;

})(100, widthWindow - 100);