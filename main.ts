/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: matthew carnaffan
 * Created on: March 2026
 * This program turns on a light when microbit rolls.
*/

basic.clearScreen()
basic.showIcon(IconNames.Sad)
pins.digitalWritePin(DigitalPin.P16, 0)

input.onButtonPressed(Button.A, function() {
    basic.showIcon(IconNames.Yes)
    basic.pause(3000)
    basic.showIcon(IconNames.Happy)
input.onGesture(Gesture.Shake, function() {
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(3000)
    basic.clearScreen
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
})

input.onButtonPressed(Button.B, function() {
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.showIcon(IconNames.No)
    basic.pause(3000)
    basic.showIcon(IconNames.Sad)
    input.onGesture(Gesture.Shake, function () {
        basic.showIcon(IconNames.No)
        basic.pause(3000)
        basic.showIcon(IconNames.Sad)
})
