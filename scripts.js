function switchHover() {
    let lastTouchTime = 0
    function enableHover() {
        if (new Date() - lastTouchTime < 500) return
        document.body.classList.add('isHover')
    }

    function disableHover() {
        document.body.classList.remove('isHover')
    }

    function updateLastTouchTime() {
        lastTouchTime = new Date()
    }

    document.addEventListener('touchstart', updateLastTouchTime, true)
    document.addEventListener('touchstart', disableHover, true)
    document.addEventListener('mousemove', enableHover, true)

    enableHover()
}

window.onload = function(){
    window.setTimeout(function(){
        document.getElementById('twitter-button').style.visibility = 'visible';
        document.getElementById('twitter-button').style.opacity = '1';
    }, 500);
    window.setTimeout(function(){
        document.getElementById('tg-channel-button').style.visibility = 'visible';
        document.getElementById('tg-channel-button').style.opacity = '1';
    }, 1100);
    window.setTimeout(function(){
        document.getElementById('tg-group-button').style.visibility = 'visible';
        document.getElementById('tg-group-button').style.opacity = '1';
    }, 1800);
    window.setTimeout(function(){
        document.getElementById('wechat-button').style.visibility = 'visible';
        document.getElementById('wechat-button').style.opacity = '1';
    }, 2600);
    window.setTimeout(function(){
        document.getElementById('threads-button').style.visibility = 'visible';
        document.getElementById('threads-button').style.opacity = '1';
    }, 3400);
    window.setTimeout(function(){
        document.getElementById('github-button').style.visibility = 'visible';
        document.getElementById('github-button').style.opacity = '1';
    }, 4200);
};

switchHover()