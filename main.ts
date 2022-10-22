radio.onReceivedNumber(function (receivedNumber) {
    i = receivedNumber
})
let i = 0
radio.setGroup(1)
basic.showIcon(IconNames.House)
basic.forever(function () {
    if (i == 1) {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Left, 30)
    } else if (i == 2) {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Right, 30)
    } else if (i == 3) {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 30)
    } else if (i == 4) {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Backward, 30)
    } else if (i == 5) {
        TPBot.stopCar()
    } else if (i == 6) {
        TPBot.setWheels(0, 50)
    } else if (i == 7) {
        TPBot.setWheels(50, 0)
    } else if (i == 8) {
        TPBot.headlightColor(0xff0000)
    }
})
