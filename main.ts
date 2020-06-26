huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_TAG_RECOGNITION)
DFRobotMaqueenPluss.setRGBLight(RGBLight.RGBA, Color.RED)
serial.redirectToUSB()
basic.forever(function () {
    huskylens.request()
    basic.showString("" + (huskylens.getBox_S(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)))
    if (huskylens.getBox_S(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock) == 1) {
        serial.writeNumber(huskylens.readeBlock_index(1, Content1.height, 1))
        if (huskylens.readeBlock_index(1, Content1.height, 1) <= 300) {
            DFRobotMaqueenPluss.mototRun(Motors.ALL, Dir.CW, 29)
            DFRobotMaqueenPluss.setRGBLight(RGBLight.RGBA, Color.GREEN)
        } else {
            DFRobotMaqueenPluss.mototStop(Motors.ALL)
            DFRobotMaqueenPluss.setRGBLight(RGBLight.RGBA, Color.YELLOW)
        }
    } else {
        DFRobotMaqueenPluss.setRGBLight(RGBLight.RGBA, Color.RED)
        DFRobotMaqueenPluss.mototStop(Motors.ALL)
    }
})
