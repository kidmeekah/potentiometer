let Speed = 0
let strip = neopixel.create(DigitalPin.P1, 15, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
strip.show()
basic.forever(function () {
    Speed = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    4
    )
    basic.pause(Speed)
    strip.rotate(1)
    strip.show()
})
