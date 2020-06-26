huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_TAG_RECOGNITION)
DFRobotMaqueenPluss.setRGBLight(RGBLight.RGBA, Color.RED)
DFRobotMaqueenPluss.servoRun(Servos.S2, -150)
basic.forever(function () {
    huskylens.request()
    basic.showString("" + (huskylens.getBox_S(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)))
    if (huskylens.getBox_S(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock) == 1) {
        serial.writeNumber(huskylens.readeBlock_index(1, Content1.height, 1))
        if (huskylens.readeBlock_index(1, Content1.height, 1) <= 75) {
            DFRobotMaqueenPluss.mototRun(Motors.ALL, Dir.CW, 40)
            DFRobotMaqueenPluss.setRGBLight(RGBLight.RGBA, Color.GREEN)
            basic.pause(100)
            DFRobotMaqueenPluss.mototStop(Motors.ALL)
        } else {
            DFRobotMaqueenPluss.mototStop(Motors.ALL)
            DFRobotMaqueenPluss.setRGBLight(RGBLight.RGBA, Color.YELLOW)
            DFRobotMaqueenPluss.servoRun(Servos.S2, 150)
            basic.pause(200)
            DFRobotMaqueenPluss.mototRun(Motors.ALL, Dir.CCW, 40)
            basic.pause(200)
            DFRobotMaqueenPluss.mototStop(Motors.ALL)
            DFRobotMaqueenPluss.servoRun(Servos.S2, -150)
            basic.pause(1000)
        }
    } else {
        DFRobotMaqueenPluss.setRGBLight(RGBLight.RGBA, Color.RED)
        DFRobotMaqueenPluss.mototStop(Motors.ALL)
        DFRobotMaqueenPluss.servoRun(Servos.S2, -150)
    }
})
