import { getPool, getLaoHen, getRole, getVersion, getRoleIntro } from './dataApi'
import poolMustGet from './poolWithMust';
import { poolConfig } from './pool';
import { laohenConfig } from './laohen';
import { roleConfig } from './role';
import { ConfigPool, ConfigLaohenOrRole, DBBasePool, DBLimitPool, LimitPool, DBLaohenOrRole, UtoolsDBObj } from "./dataInterface"
import type { roleIntroInter } from './apiInterface'



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

/**
 * 初始化游戏卡池信息
 * @returns 
 */
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

class RoleIntroObj {
    data: Record<string, roleIntroInter>;
    constructor() {
        this.data = {}
    }
}
const RoleIntroData = new RoleIntroObj()

/**
 * 初始化角色属性概况
 * @returns 
 */
const initIntroData = async () => {
    const localIntroVer = window.utools.dbStorage.getItem('currIntroVer');
    const localIntroDB = window.utools.db.get("bj-config-role-intro");
    const version = await getVersion('intro_version');
    if (version !== "") {
        if (version !== localIntroVer || localIntroDB == null) {
            const roleIntroDbData = await getRoleIntro();
            if (roleIntroDbData !== null) {
                roleIntroDbData.forEach((introItem: roleIntroInter) => {
                    RoleIntroData.data[introItem.role_name] = introItem
                })
                window.utools.dbStorage.setItem('currIntroVer', version);
                let saveData = new UtoolsDBObj()
                saveData._id = "bj-config-role-intro"
                saveData.data = RoleIntroData.data
                if (localIntroDB) {
                    saveData._rev = localIntroDB._rev;
                }
                window.utools.db.put(saveData)
            }
            console.log(RoleIntroData)
        } else {
            RoleIntroData.data = localIntroDB.data
        }
    } else {
        RoleIntroData.data = localIntroDB?.data
    }
    return RoleIntroData
}

export { initSupData, initIntroData };
