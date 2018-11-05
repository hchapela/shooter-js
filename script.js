const shooter = {}

// 
// Set Up
// 

shooter.$container = document.querySelector('.shooter')
shooter.$start = shooter.$container.querySelector('.start')
shooter.$score = shooter.$container.querySelector('.score')
shooter.$timer = shooter.$container.querySelector('.timer')
shooter.$targets = shooter.$container.querySelector('.targets')

shooter.addTarget = () => {
    const $target = document.createElement('div')
    $target.classList.add('target')
    $target.style.top = `${Math.random() * 100}%`
    $target.style.left = `${Math.random() * 100}%`
    shooter.$targets.appendChild($target)
}

shooter.addTarget()