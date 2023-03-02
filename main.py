def prehodVyhybku(num: number):
    if stavy_vyhybek[num]:
        stavy_vyhybek[num] = 0
        prehodServo(num, 90)
    else:
        stavy_vyhybek[num] = 1
        prehodServo(num, 180)
    return stavy_vyhybek[num]
def dejCisloTlacitka(hodnota_pinu2: number):
    if hodnota_pinu2 < 20:
        return 1
    elif hodnota_pinu2 < 70:
        return 2
    elif hodnota_pinu2 < 110:
        return 3
    elif hodnota_pinu2 < 150:
        return 4
    elif hodnota_pinu2 < 600:
        return 5
    else:
        return 0
def vytvorObrazek(tlacitko: number, pozice_vyhybky: number):
    basic.clear_screen()
    if tlacitko > 0:
        led.plot(tlacitko - 1, 0)
    if pozice_vyhybky == 0:
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(3, 2)
        led.plot(4, 0)
        led.plot(4, 1)
    elif pozice_vyhybky == 1:
        led.plot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        led.plot(4, 4)
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
def tlacitkoZmacknute(hodnota_pinu: number):
    return hodnota_pinu < 600
pozice_vyhybky2 = 0
tlacitko2 = 0
stavy_vyhybek: List[number] = []
stavy_vyhybek = [0, 0, 0, 0, 0, 0, 0]

def on_forever():
    global tlacitko2, pozice_vyhybky2
    tlacitko2 = dejCisloTlacitka(pins.analog_read_pin(AnalogPin.P1))
    basic.clear_screen()
    pozice_vyhybky2 = 1000
    if tlacitko2 == 3:
        prehodVyhybku(1)
        vytvorObrazek(tlacitko2, pozice_vyhybky2)
basic.forever(on_forever)
