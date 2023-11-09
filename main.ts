input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 6))
    music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
})
