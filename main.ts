let maxLevel = 0
let minLevel = 0
let distance = 0
power.fullPowerEvery(10000, function () {
    led.setBrightness(20)
    maxLevel = 10
    minLevel = 40
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showNumber(distance)
    basic.pause(1000)
    basic.clearScreen()
    if (distance >= minLevel) {
        basic.showIcon(IconNames.Angry)
    } else if (distance <= maxLevel) {
        basic.showIcon(IconNames.Umbrella)
    } else {
        basic.showIcon(IconNames.Heart)
    }
    basic.clearScreen()
    power.lowPowerRequest()
})
