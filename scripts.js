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

switchHover()