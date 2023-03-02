function prehodVyhybku (num: number) {
    if (stavy_vyhybek[num]) {
        stavy_vyhybek[num] = 0
        prehodServo(num, 90)
    } else {
        stavy_vyhybek[num] = 1
        prehodServo(num, 180)
    }
    return stavy_vyhybek[num]
}
function dejCisloTlacitka (hodnota_pinu2: number) {
    if (hodnota_pinu2 < 20) {
        return 1
    } else if (hodnota_pinu2 < 70) {
        return 2
    } else if (hodnota_pinu2 < 110) {
        return 3
    } else if (hodnota_pinu2 < 150) {
        return 4
    } else if (hodnota_pinu2 < 600) {
        return 5
    } else {
        return 0
    }
}
function vytvorObrazek (tlacitko: number, pozice_vyhybky: number) {
    basic.clearScreen()
    if (tlacitko > 0) {
        led.plot(tlacitko - 1, 0)
    }
    if (pozice_vyhybky == 0) {
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(3, 2)
        led.plot(4, 0)
        led.plot(4, 1)
    } else if (pozice_vyhybky == 1) {
        led.plot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        led.plot(4, 4)
    }
}
function prehodServo (num2: number, angle: number) {
    if (num2 == 0) {
        wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S0, angle)
    } else if (num2 == 1) {
        wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S1, angle)
    } else if (num2 == 2) {
        wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S2, angle)
    } else if (num2 == 3) {
        wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S3, angle)
    } else if (num2 == 4) {
        wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S4, angle)
    } else if (num2 == 5) {
        wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S5, angle)
    } else if (num2 == 6) {
        wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, angle)
    } else if (num2 == 7) {
        wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, angle)
    }
}
function tlacitkoZmacknute (hodnota_pinu: number) {
    return hodnota_pinu < 600
}
let pozice_vyhybky2 = 0
let tlacitko2 = 0
let stavy_vyhybek: number[] = []
stavy_vyhybek = [
0,
0,
0,
0,
0,
0,
0
]
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    tlacitko2 = dejCisloTlacitka(pins.analogReadPin(AnalogPin.P1))
    basic.clearScreen()
    pozice_vyhybky2 = 1000
    if (tlacitko2 == 3) {
        prehodVyhybku(1)
        vytvorObrazek(tlacitko2, pozice_vyhybky2)
    }
})
