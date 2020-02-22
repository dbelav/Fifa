(function fifa() {
    let ball = document.getElementById('ball');
    let container = document.getElementById('container');
    let goal = document.getElementById('goal');
    let heigthWindow = container.clientHeight;
    let widthWindow = container.clientWidth;
    let scoreOutput = document.getElementById('score');
    let score = 0;
    let maxScore = 0;

    (function goalClick() {
        document.addEventListener('click', (e) => {
            if (e.target.className == 'goal') {
                setTimeout(score++, 1000);
                if(score > maxScore){
                    maxScore = score;
                }
                ballOnGoal();
            } else {
                setTimeout(score -= 2, 1000)
                ballOnGoal();
                if(score < 0){     
                    score = 0;          
                    document.getElementById('max').innerHTML = 'Максимальный счет:' + maxScore;
                    setTimeout(() =>{
                        document.getElementById('lose').style.display = 'flex';
                        container.style.display = 'none';
                    }, 1000);
                }
            };
        })
    })();

    function ballOnGoal() {
        setTimeout(randomGoal, 1000);
        setTimeout(() => {
            ballCoordStart();
            scoreOutput.textContent = 'Ваши очки:' + score;
        }, 1000);
    }

    function ballCoordStart() {
        ball.style.left = '0';
        ball.style.top = '0';
        ball.style.left = `${container.clientWidth / 2 - ball.offsetHeight / 2}px`;
        ball.style.top = `${container.clientHeight *0.65}px`;
    };

    function ballCoordGo() {
        document.onclick = (e) => {
            let goalHeight = goal.clientHeight;
            ball.style.top = `${e.clientY - goalHeight - ball.offsetHeight / 2}px`
            ball.style.left = `${e.clientX - ball.offsetWidth / 2}px`
        }
    };

    function randomGoal() {
        (function randomGoalY(min, max) {
            let goalY = Math.floor(Math.random() * (+max - +min)) + min;
            goal.style.top = `${goalY}px`

        })(0, +heigthWindow / 3);

        (function randomGoalX(min, max) {
            let goalX = Math.floor(Math.random() * (+max - +min)) + min;
            console.log(goalX);
            goal.style.left = `${goalX}px`;

        })(100, widthWindow - 100);
    };

    ballCoordStart();
    ballCoordGo();
    randomGoal();
})();
    