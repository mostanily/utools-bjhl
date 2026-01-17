import { allChar } from './charConsts.ts'

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

class TacgieObj {
    name: string;
    listNames: string[];
    imgs: string[];
    listImg?: string[];
    constructor() {
        this.name = ""
        this.listNames = new Array
        this.imgs = new Array
    }
}

class DefaultCharDescObj {
    job: string;
    skill;
    attr: string;
    star: string;
    nameEn: string;
    tag: string[];
    originWorld: string;
    orginChar: string;
    cv: string;
    openDate: string;
    resourse: string[];
    laohenLink?: number;
    introText: string;
    tacgie: TacgieObj;
    extraTacgie?: TacgieObj[];
    constructor() {
        this.job = ""
        this.skill = new Array
        this.attr = ""
        this.star = ""
        this.nameEn = ""
        this.tag = new Array
        this.originWorld = ""
        this.orginChar = ""
        this.cv = ""
        this.openDate = ""
        this.resourse = new Array
        this.introText = ""
        this.tacgie = new TacgieObj()
    }
}

const tachieList: DefaultTachieObj[] = new Array

const initChar = () => {
    Object.entries(allChar).forEach(([charName, charObj]) => {
        const currCharObj: DefaultCharDescObj = charObj
        if (Array.isArray(currCharObj.extraTacgie)) {
            const currTachie = currCharObj.extraTacgie
            currTachie.forEach(tachieItem => {
                if (tachieItem.name == "森罗映像") {
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