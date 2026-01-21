import { allChar } from './charConsts.ts'
import { initIntroData } from '../config/database.ts';

class DefaultTachieObj {
    name: string;
    navName: string;
    navImg: string;
    constructor() {
        this.name = ""
        this.navName = ""
        this.navImg = ""
    }
}

const tachieList: DefaultTachieObj[] = new Array

const roleAttrIntroObj = await initIntroData()

const initChar = () => {
    Object.entries(allChar).forEach(([charName, charObj]) => {
        if (roleAttrIntroObj.data !== null) {
            charObj.attrIntro = roleAttrIntroObj.data[charName]
        }
        if (Array.isArray(charObj.extraTacgie)) {
            charObj.extraTacgie.forEach(tachieItem => {
                if (tachieItem.name === "森罗映像") {
                    tachieItem.listNames.forEach((tachieName, indexKey) => {
                        const tempObj = new DefaultTachieObj()
                        tempObj.name = charName
                        tempObj.navName = tachieName
                        tempObj.navImg = Array.isArray(tachieItem.listImg) ? tachieItem.listImg[indexKey] : ""
                        tachieList.push(tempObj)
                    })
                }
            })
        }
    })
}
initChar()
export { tachieList }