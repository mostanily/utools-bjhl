import { createClient } from '@supabase/supabase-js'
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

const getVersion = async (typeVersionName: string = 'version') => {
    let { data: bj_version, error } = await supabase
        .from('bj_version')
        .select('*')
        .eq('id', 1)

    return error == null && bj_version != null ? bj_version[0][typeVersionName] : "";
}

const getRoleIntro = async () => {
    let { data: bj_role_intro } = await supabase.from('bj_role_intro').select('*')
    return bj_role_intro;
}

export { getPool, getLaoHen, getRole, getVersion, getRoleIntro }