def on_button_pressed_a():
    global ZahlA
    ZahlA = ZahlA + 1
    basic.show_number(ZahlA)
input.on_button_pressed(Button.A, on_button_pressed_a)

ZahlA = 0
basic.show_string("Start Test1")
serial.write_line("Starte Test1")

def on_forever():
    pass
basic.forever(on_forever)
