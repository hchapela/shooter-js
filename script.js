const shooter = {}

/**
 * Set up
 */
shooter.$container = document.querySelector('.shooter')
shooter.$start = shooter.$container.querySelector('.start')
shooter.$score = shooter.$container.querySelector('.score .value')
shooter.$timer = shooter.$container.querySelector('.timer')
shooter.$targets = shooter.$container.querySelector('.targets')

shooter.score = 0

shooter.sounds = {}
shooter.sounds.ding = new Audio('sounds/ding.mp3')
shooter.sounds.finish = new Audio('sounds/finish.mp3')

shooter.$start.addEventListener('click', () => {
    shooter.start()
})

shooter.start = () => {
    shooter.score = 0
    shooter.$score.textContent = shooter.score
    shooter.$container.classList.remove('step-start')
    shooter.$container.classList.add('step-game')

    shooter.secondsLeft = 5
    shooter.tick()
}

shooter.tick = () => {
    shooter.secondsLeft--
    shooter.$timer.textContent = `${shooter.secondsLeft} s`

    if(shooter.secondsLeft === 0) {
        shooter.$container.classList.remove('step-game')
        shooter.$container.classList.add('step-end')
    }
    else {
        window.setTimeout(shooter.tick, 1000)
    }
}

/**
 * Methods
 */
shooter.addTarget = () => {
    // Create target
    const $target = document.createElement('div')
    $target.classList.add('target')
    $target.style.top = `${Math.random() * 100}%`
    $target.style.left = `${Math.random() * 100}%`
    shooter.$targets.appendChild($target)

    // Listen to mouse enter
    $target.addEventListener('mouseenter', () => {
        shooter.shootTarget($target)
    })
}

shooter.shootTarget = (_$target) => {
    // Delete target
    _$target.remove()

    // Add new target
    shooter.addTarget()

    // Increment score
    shooter.score++
    shooter.$score.textContent = shooter.score

    // Play sound
    shooter.sounds.ding.currentTime = 0
    shooter.sounds.ding.play()
}

shooter.addTarget()