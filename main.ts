let _123 = 0
input.onGesture(Gesture.Shake, function () {
    _123 = randint(1, 3)
})
basic.forever(function () {
    if (1 == _123) {
        basic.showIcon(IconNames.Square)
    } else if (2 == _123) {
        basic.showIcon(IconNames.Scissors)
    } else if (3 == _123) {
        basic.showIcon(IconNames.SmallSquare)
    }
})
