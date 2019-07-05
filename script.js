var gameScore = 0;

function start(){
      
    gameTime();
        
    //随机数生成及函数调用
    
    var popTime = Math.random()*200+800;
    setInterval("ratPop()",popTime);
    console.log(popTime); 
};

//老鼠出现及消失
function ratPop(){
    var ratNumber = Math.floor(Math.random()*9);
    var rats = document.getElementsByClassName('hitArea');
    rats[ratNumber].style.backgroundColor = 'red';
    rats[ratNumber].onclick = pointsCount  ;
    setTimeout(
        function(){
            rats[ratNumber].style.backgroundColor = 'white';
            rats[ratNumber].onclick = null  ;
            },1000
        );
};

//计时器
function gameTime(){
    var number = document.getElementById('timer');
    var count = 60;
    number.innerHTML = count;
    var colock = null;
    colock = setInterval(function(){
        if (count > 0){
            count = count - 1 ;
            number.innerHTML = count;
        }
        else {
            clearInterval(colock);
        }
    },1000);
}


//得分判断

function pointsCount(){
    var score = document.getElementById('score');
    gameScore = gameScore + 1 ;
    score.innerHTML = gameScore;
};

