input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    control.reset()
})
input.onButtonPressed(Button.A, function () {
    if (timeout < 9) {
        timeout += 1
    } else {
        timeout = 1
    }
    led.setBrightness(100)
    basic.showNumber(timeout)
    Y = false
    dimming()
})
function end () {
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.OnceInBackground)
    led.setBrightness(100)
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallDiamond)
    }
    basic.pause(2000)
    control.reset()
}
input.onButtonPressed(Button.B, function () {
    start = !(start)
    minutes = 0
    led.setBrightness(100)
    if (start) {
        basic.showString("" + timeout + ">")
    } else {
        basic.clearScreen()
        basic.showIcon(IconNames.SmallSquare)
        Y = true
        dimming()
    }
})
function sandsoftime () {
    basic.showLeds(`
        # # # # #
        . # # # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(30)
    basic.showLeds(`
        # # # # #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(30)
    basic.showLeds(`
        # # . # #
        . # # # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(30)
    basic.showLeds(`
        # # . # #
        . # . # .
        . . # . .
        . # # # .
        # . . . #
        `)
    basic.pause(30)
    basic.showLeds(`
        # # . . #
        . # # # .
        . . # . .
        . # # # .
        # . . . #
        `)
    basic.pause(30)
    basic.showLeds(`
        # # . . #
        . # # # .
        . . # . .
        . # . # .
        # . # . #
        `)
    basic.pause(30)
    basic.showLeds(`
        # # . . #
        . # . # .
        . . # . .
        . # # # .
        # . # . #
        `)
    basic.pause(30)
    basic.showLeds(`
        # . . . #
        . # # # .
        . . # . .
        . # . # .
        # # # . #
        `)
    basic.pause(30)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # # # .
        # # # . #
        `)
    basic.pause(30)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # # # .
        # # # # #
        `)
    basic.pause(30)
}
function dimming () {
    Z = 100
    led.setBrightness(100)
    while (Y) {
        Z = -1
        if (Z > 0) {
            led.setBrightness(Z)
            basic.pause(25)
        } else {
            Y = false
            led.setBrightness(0)
            basic.clearScreen()
        }
    }
}
let Z = 0
let timeout = 0
let minutes = 0
let start = false
let Y = false
music.setBuiltInSpeakerEnabled(true)
music.setVolume(175)
led.setBrightness(100)
Y = false
start = false
let seconds = 0
minutes = 0
timeout = 0
basic.showLeds(`
    # # # # #
    . # . # .
    . . # . .
    . # . # .
    # # # # #
    `)
basic.forever(function () {
    if (start) {
        led.setBrightness(100)
        Y = false
        if (minutes < timeout) {
            basic.pause(0)
            if (seconds < 12) {
                seconds += 1
            } else {
                seconds = 0
                if (minutes < timeout) {
                    minutes += 1
                } else {
                    minutes = timeout
                }
            }
            sandsoftime()
        } else {
            Y = true
            dimming()
            start = false
            end()
        }
    }
})
