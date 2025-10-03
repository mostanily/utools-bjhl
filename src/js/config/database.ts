import { createClient } from '@supabase/supabase-js'
import poolMustGet from './poolWithMust';
import { poolConfig } from './pool';
import { laohenConfig } from './laohen';
import { roleConfig } from './role';
import { supKey, supUrl } from './SubKey';

const supabaseUrl = supUrl//superbase官网项目接口path
const supabaseKey = supKey//superbase官网项目key
const supabase = createClient(supabaseUrl, supabaseKey)

const getPool = async () => {
    let { data: bj_pool_base } = await supabase
        .from('bj_pool_base')
        .select(`
            *,
            bj_pool_limit (
                poolId,id,name,up,startTime,endTime
            )
        `)

    return bj_pool_base;
}

const getLaoHen = async () => {
    let { data: bj_lh } = await supabase
        .from('bj_lh')
        .select('*')

    return bj_lh;
}

const getRole = async () => {
    let { data: bj_role } = await supabase
        .from('bj_role')
        .select('*')

    return bj_role;
}

const getVersion = async () => {
    let { data: bj_version, error } = await supabase
        .from('bj_version')
        .select('*')
        .eq('id', 1)

    return error == null && bj_version != null ? bj_version[0].version : "";
}

class BasePool {
    type: string;
    name: string;
    up: string;
    constructor() {
        this.type = "";
        this.name = "";
        this.up = ""
    }
}

class LimitPool {
    name: string;
    up: string;
    startTime: string;
    endTime: string;
    constructor() {
        this.name = "";
        this.up = "";
        this.startTime = "";
        this.endTime = "";
    }
}

class ConfigPool extends BasePool {
    mustGet?: boolean;
    desc?: string;
    limit?: LimitPool[];
    constructor() {
        super();
        this.mustGet = false
        this.desc = ""
        this.limit = []
    }
}

class ConfigLaohenOrRole {
    name = "";
    rarity = "";
}

class DBLimitPool extends LimitPool {
    id: number;
    constructor() {
        super();
        this.id = -1
    }
}
class DBBasePool extends BasePool {
    id: number;
    bj_pool_limit: DBLimitPool[];
    constructor() {
        super();
        this.id = -1
        this.bj_pool_limit = []
    }
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

const poolConfigDataObj: Record<string, ConfigPool> = {}
const roleConfigDataObj: Record<string, ConfigLaohenOrRole> = {}
const lhConfigDataObj: Record<string, ConfigLaohenOrRole> = {}

class ConfigDataObj {
    poolConfig;
    laohenConfig;
    roleConfig;
    constructor() {
        this.poolConfig = poolConfigDataObj;
        this.laohenConfig = lhConfigDataObj;
        this.roleConfig = roleConfigDataObj;
    }
}

const ConfigDataConst = new ConfigDataObj()

const initSupData = async () => {
    const localPoolVer = window.utools.dbStorage.getItem('currPoolVer');
    const localPoolDB = window.utools.db.get("bj-config-pool");
    const version = await getVersion();
    if (version !== "") {
        if (version !== localPoolVer || localPoolDB == null) {
            ConfigDataConst.poolConfig = poolConfigDataObj;
            ConfigDataConst.laohenConfig = lhConfigDataObj;
            ConfigDataConst.roleConfig = roleConfigDataObj;
            const pool = await getPool();
            const lh = await getLaoHen();
            const role = await getRole();
            dealPool(pool);
            dealRoleOrLH(lh);
            dealRoleOrLH(role, true);
            window.utools.dbStorage.setItem('currPoolVer', version);
        } else {
            const localRoleDB = window.utools.db.get("bj-config-role");
            const localLaohenDB = window.utools.db.get("bj-config-lh");
            ConfigDataConst.poolConfig = localPoolDB?.data;
            ConfigDataConst.laohenConfig = localLaohenDB?.data;
            ConfigDataConst.roleConfig = localRoleDB?.data;
        }
    } else {
        ConfigDataConst.poolConfig = poolConfig;
        ConfigDataConst.laohenConfig = laohenConfig;
        ConfigDataConst.roleConfig = roleConfig;
    }
    return ConfigDataConst;
}

const dealPool = (pool: any[] | null) => {
    if (pool != null && pool.length >= 1) {
        pool.forEach((poolItem: DBBasePool) => {
            const id = String(poolItem.id);
            const configPoolObj = new ConfigPool();
            configPoolObj.name = poolItem.name;
            configPoolObj.type = poolItem.type;
            configPoolObj.up = poolItem.up;
            if (Object.keys(poolMustGet).includes(id)) {
                configPoolObj.mustGet = true;
                configPoolObj.desc = poolMustGet[id];
            }
            if (poolItem.bj_pool_limit.length >= 1) {
                poolItem.bj_pool_limit.forEach((limitItem: DBLimitPool) => {
                    const limitPoolObj = new LimitPool()
                    limitPoolObj.name = limitItem.name;
                    limitPoolObj.up = limitItem.up;
                    limitPoolObj.startTime = limitItem.startTime;
                    limitPoolObj.endTime = limitItem.endTime;
                    configPoolObj.limit?.push(limitPoolObj);
                })
            }
            ConfigDataConst.poolConfig[id] = configPoolObj;
        })
        const localDBPoolData = window.utools.db.get("bj-config-pool")
        let savePoolData = new UtoolsDBObj()
        savePoolData._id = "bj-config-pool"
        savePoolData.data = ConfigDataConst.poolConfig
        if (localDBPoolData) {
            savePoolData._rev = localDBPoolData._rev;
        }
        window.utools.db.put(savePoolData)
    }
}

const dealRoleOrLH = (lhOrRole: any[] | null, isRole = false) => {
    const dbKey = isRole ? "bj-config-role" : "bj-config-lh"
    if (lhOrRole != null && lhOrRole.length >= 1) {
        lhOrRole.forEach((lhItem: DBLaohenOrRole) => {
            const id = String(lhItem.id);
            const configLaohenOrRoleObj = new ConfigLaohenOrRole();
            configLaohenOrRoleObj.name = lhItem.name;
            configLaohenOrRoleObj.rarity = lhItem.rarity;
            if (isRole) {
                ConfigDataConst.roleConfig[id] = configLaohenOrRoleObj
            } else {
                ConfigDataConst.laohenConfig[id] = configLaohenOrRoleObj
            }
        })
        const localDBRoleOrLHData = window.utools.db.get(dbKey)
        let saveData = new UtoolsDBObj()
        saveData._id = dbKey
        saveData.data = isRole ? ConfigDataConst.roleConfig : ConfigDataConst.laohenConfig
        if (localDBRoleOrLHData) {
            saveData._rev = localDBRoleOrLHData._rev;
        }
        window.utools.db.put(saveData)
    }
}

// const configData = await initSupData();
// console.log(configData)
export default initSupData;
