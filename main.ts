function prehodVyhybku (num: number) {
    if (stavy_vyhybek[num]) {
        stavy_vyhybek[num] = 0
        prehodServo(num, 90)
    } else {
        stavy_vyhybek[num] = 1
        prehodServo(num, 180)
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
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
