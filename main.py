def prehodVyhybku(num: number):
    if stavy_vyhybek[num]:
        stavy_vyhybek[num]=0
        prehodServo(num, 90)
    else:
        stavy_vyhybek[num]=1
        prehodServo(num, 180)

def prehodServo(num2: number, angle: number):
    if num2 == 0:
        wuKong.set_servo_angle(wuKong.ServoTypeList._270, wuKong.ServoList.S0, angle)
    elif num2 == 1:
        wuKong.set_servo_angle(wuKong.ServoTypeList._270, wuKong.ServoList.S1, angle)
    elif num2 == 2:
        wuKong.set_servo_angle(wuKong.ServoTypeList._270, wuKong.ServoList.S2, angle)
    elif num2 == 3:
        wuKong.set_servo_angle(wuKong.ServoTypeList._270, wuKong.ServoList.S3, angle)
    elif num2 == 4:
        wuKong.set_servo_angle(wuKong.ServoTypeList._270, wuKong.ServoList.S4, angle)
    elif num2 == 5:
        wuKong.set_servo_angle(wuKong.ServoTypeList._270, wuKong.ServoList.S5, angle)
    elif num2 == 6:
        wuKong.set_servo_angle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, angle)
    elif num2 == 7:
        wuKong.set_servo_angle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, angle)
stavy_vyhybek = [0, 0, 0, 0, 0, 0, 0]

def on_forever():
    basic.show_number(pins.analog_read_pin(AnalogPin.P0))
basic.forever(on_forever)
