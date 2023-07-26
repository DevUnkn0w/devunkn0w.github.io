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

function wechatInfo(){
    let logoWidth = document.getElementById('navbar-image-box').clientWidth*0.5;
    document.getElementById('navbar-image-box').style.left = 'calc(50% - '+logoWidth+'px)';
    document.getElementById('nav-back-button').style.visibility = 'visible';
    document.getElementById('nav-back-button').style.opacity = '1';
    let htmlContent = `
    <div class="box" id="wechat-panel-logo">
        <div id = "wechat-panel-logo-icon-div">
            <img src = "assets/icons/flower.svg" id="wechat-panel-logo-icon">
        </div>
        <div id = "wechat-panel-logo-text">
            <b>梓</b>
            <img src = "assets/icons/pipe.svg" id="wechat-panel-logo-text-divider">
            <b>熙</b>
        </div>
    </div>
    <div class="box wechat-method">
        <div class = "wechat-method-title">
            <img src = "assets/icons/shield-cross-fill.svg" class="wechat-method-title-icon">
            <p><b>I</b></p>
            <img src = "assets/icons/shield-cross-fill.svg" class="wechat-method-title-icon">
        </div>
        <div class = "wechat-method-content">
            <p>参与以下互动</p>
            <p>1. 积极点赞，转推并评论推文</p>
            <p>2. 长期主动参与 <img src = "assets/icons/telegram.svg" class = "wechat-method-content-icon" id = "wechat-method-content-telegram-icon" > Telegram 群组中的讨论</p><br>
            <p>经过一段时间的考察后，满足条件的用户将会在推特私信信箱中收到微信好友邀请</p>
        </div>
        <div class = "wechat-method-footer">
            <img src = "assets/icons/cross.svg" class = "wechat-method-footer-icon">
        </div>
    </div>
    <div class="box wechat-method">
        <div class = "wechat-method-title">
            <img src = "assets/icons/shield-cross-fill.svg" class="wechat-method-title-icon">
            <p><b>II</b></p>
            <img src = "assets/icons/shield-cross-fill.svg" class="wechat-method-title-icon">
        </div>
        <div class = "wechat-method-content">
            <p style="font-family: Arial, Helvetica, sans-serif; text-align: center;"><b>Deprecated</b> <img src = "assets/icons/down.svg" class = "wechat-method-content-icon" id = "wechat-method-content-down-icon"></p><br>
            <p class="deprecated">在推特上参与不定期举行的微信抽签活动，具体活动规则以及参与方式请参见抽签活动推文</p><br>
            <p class="deprecated">抽签结果公布后，中签的用户将会在推特私信信箱中收到微信好友邀请</p>
        </div>
        <div class = "wechat-method-footer">
            <img src = "assets/icons/cross.svg" class = "wechat-method-footer-icon">
        </div>
    </div>
    `
    document.getElementById('wechat-panel').innerHTML = htmlContent;
    document.getElementById('wechat-panel').style.left = '0';
    document.getElementById('home').style.transitionDuration = '1s';
    document.getElementById('home').style.transitionTimingFunction = 'ease';
    document.getElementById('home').style.transitionDelay = '0s';
    document.getElementById('home').style.visibility = 'hidden';
    document.getElementById('home').style.opacity = '0';
}

function toHome(){
    document.getElementById('nav-back-button').style.visibility = 'hidden';
    document.getElementById('nav-back-button').style.opacity = '0';
    document.getElementById('navbar-image-box').style.left = '0';
    document.getElementById('wechat-panel').style.left = 'calc(100vw + 10px)';
    document.getElementById('home').style.transitionTimingFunction= 'ease-in';
    document.getElementById('home').style.transitionDuration = '2.5s';
    document.getElementById('home').style.transitionDelay = '0.3s';
    document.getElementById('home').style.visibility = 'visible';
    document.getElementById('home').style.opacity = '1';
    window.setTimeout(function () {
        document.getElementById('wechat-panel').innerHTML = '';
    }, 1500);
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