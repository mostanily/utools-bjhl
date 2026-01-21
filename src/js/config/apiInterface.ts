/**
 * 角色属性补充信息概况
 */
export interface roleIntroInter {
    role_name: string;//角色名称
    max_rank: string;//最大位阶
    base_damage_reduction: number;//基础减伤
    range: string;//射程
    critical_hit_rate: number;//暴击率
    critical_damage: number;//暴击伤害
    tactical_movement: number;//战术移动冷却时间，单位秒
    specialize_blocking_conversion_rates: number;//专精格挡转化率
    specialize_cure_conversion_rates: number;//专精治愈转化率
    specialize_damage_increase_conversion_rates: number;//专精增伤转化率
    physique_bonus: number;//体质加成
    attack_bonus: number;//攻击加成
    specialization_bonus: number;//专精加成
    physical_fitness_physique_bonus: number;//体能特训体质加成
    physical_fitness_attack_bonus: number;//体能特训攻击加成
    physical_fitness_specialization_bonus: number;//体能特训专精加成
    physique: number;//体质
    defense: number;//防御
    attack: number;//攻击
    specialization: number;//专精
    terminal: number;//终端
}