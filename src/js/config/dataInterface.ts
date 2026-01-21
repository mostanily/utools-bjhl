interface BasePoolInter {
    type: string;
    name: string;
    up: string;
}

interface LimitPoolInter {
    name: string;
    up: string;
    startTime: string;
    endTime: string;
}

class ConfigPool implements BasePoolInter {
    type: string;
    name: string;
    up: string;
    mustGet?: boolean;
    desc?: string;
    limit?: LimitPoolInter[];
    constructor() {
        this.type = ''
        this.name = ''
        this.up = ''
        this.mustGet = false
        this.desc = ""
        this.limit = []
    }
    
}

class LimitPool implements LimitPoolInter {
    name: string;
    up: string;
    startTime: string;
    endTime: string;
    constructor() {
        this.name = ''
        this.up = ''
        this.startTime = ''
        this.endTime = ''
    }
}

class DBLimitPool extends LimitPool {
    id: number;
    constructor() {
        super();
        this.id = -1
    }
}
class DBBasePool implements BasePoolInter {
    type: string;
    name: string;
    up: string;
    id: number;
    bj_pool_limit: DBLimitPool[];
    constructor() {
        this.type = ''
        this.name = ''
        this.up = ''
        this.id = -1
        this.bj_pool_limit = []
    }
}

class ConfigLaohenOrRole {
    name = "";
    rarity = "";
}

class DBLaohenOrRole extends ConfigLaohenOrRole {
    id: number;
    constructor() {
        super();
        this.id = -1
    }
}

class UtoolsDBObj {
    _id: string;
    data: any;
    _rev?: string;
    constructor() {
        this._id = ""
    }
}

export { ConfigPool, ConfigLaohenOrRole, DBBasePool, DBLimitPool, LimitPool, DBLaohenOrRole, UtoolsDBObj }