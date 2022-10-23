input.onButtonPressed(Button.A, function () {
    if (Rechenart == 0) {
        ZahlA = ZahlA + 1
        basic.showNumber(ZahlA)
        serial.writeLine("" + (ZahlA))
    }
    if (Rechenart >= 1) {
        ZahlB = ZahlB + 1
        basic.showNumber(ZahlB)
        serial.writeLine("" + (ZahlB))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Rechenart == 1) {
        basic.showString("+")
        basic.pause(1000)
        ZahlSumme = ZahlA + ZahlB
    }
    if (Rechenart == 2) {
        basic.showString("-")
        basic.pause(1000)
        ZahlSumme = ZahlA - ZahlB
    }
    if (Rechenart == 3) {
        basic.showString("*")
        basic.pause(500)
        ZahlSumme = ZahlA * ZahlB
    }
    if (Rechenart == 4) {
        basic.showString(":")
        basic.pause(1000)
        ZahlSumme = ZahlA / ZahlB
    } else {
        ZahlA = 0
        ZahlB = 0
        Rechenart = 0
    }
    serial.writeValue("Ergebnis", ZahlSumme)
    for (let index = 0; index < 3; index++) {
        basic.showNumber(ZahlSumme)
    }
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    Rechenart = Rechenart + 1
    if (Rechenart == 1) {
        basic.showString("+")
        serial.writeLine("+ Modus")
    }
    if (Rechenart == 2) {
        basic.showString("-")
        serial.writeLine("- Modus")
    }
    if (Rechenart == 3) {
        basic.showString("*")
        serial.writeLine("x Modus")
    }
    if (Rechenart == 4) {
        basic.showString(":")
        serial.writeLine(": Modus")
    }
    if (Rechenart >= 5) {
        Rechenart = 0
        basic.showIcon(IconNames.Surprised)
        serial.writeLine("Beginn von Vorn")
    }
})
let ZahlSumme = 0
let ZahlB = 0
let ZahlA = 0
let Rechenart = 0
basic.showString("T-Rechner V1.2")
serial.writeLine("Starte Taschenrechner V1.2")
basic.forever(function () {
	
})
