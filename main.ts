input.onButtonPressed(Button.A, function () {
    ZahlA = ZahlA + 1
    basic.showNumber(ZahlA)
})
input.onButtonPressed(Button.AB, function () {
    ZahlSumme = ZahlA + ZahlB
    basic.showNumber(ZahlSumme)
    basic.pause(1000)
    ZahlA = 0
    ZahlB = 0
})
input.onButtonPressed(Button.B, function () {
    ZahlB = ZahlB + 1
    basic.showNumber(ZahlB)
})
let ZahlB = 0
let ZahlSumme = 0
let ZahlA = 0
basic.showString("Start Test1")
serial.writeLine("Starte Test1")
basic.forever(function () {
	
})
