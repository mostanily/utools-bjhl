<template>
    <textarea name="cookie" id="cookieId" v-model="cookies"></textarea>
    <button @click="getLaohenData()">Run Python Script</button>
</template>
<script>
import axios from 'axios'
import request from '../../js/request'
import { ref } from 'vue'

export default {
    data() {
        return {
            cookies: ''
        }
    },
    methods: {
        getLaohenData() {
            const payload = 'iChartId=323691&iSubChartId=323691&sIdeToken=Q4rDBY&e_code=0&g_code=0&eas_url=http%253A%252F%252Fseed.qq.com%252Fact%252Fa20240905record%252F&eas_refer=http%253A%252F%252Fseed.qq.com%252Fact%252Fa20220931yuyue%252F%253Freqid%253De646b16e-4b72-4fb7-822c-23f0c68b49af%2526version%253D27&sMiloTag=AMS-bjhl-1010195813-LXLqGO-666158-1067627&startTime=1704988800&endTime=1707494400&isPreengage=1&needGopenid=1'
            const cookie = '_qimei_fingerprint=e92b21e8245ded381317c1a3fbd5f57d; _qimei_uuid42=17b04160c3710011e629925b5a9b12a086fd851958; fqm_pvqid=f11aa92b-eae0-450c-bef1-aaa3e1bfdde8; pgv_pvid=9298792389; _qimei_q36=; RK=zSPJiwUoGy; ptcz=c57595507869aafecdba45d5c4afc211d9191b9043ede7ea950d40990a34ca3e; _qimei_h38=c24ceba753bcb162553e0e3002000004317716; eas_sid=MKdJSgwGxhqdCRIb6TxZCDPYoD; qq_domain_video_guid_verify=c38bbe9c5c1f1a92; ams_qqopenid_1112142656=93E01F6D1BF5A3766978334CD1B6D823%7C229885381%7C9fa1032ee38f79b7fe934446c0998d95; pgv_info=ssid=s8253237669; seedqqcomrouteLine=a20230324koulin_a20230324koulin_a20230324koulin_a20230324koulin_a20230324koulin_a20230324koulin_a20230324koulin; refresh_token=; expires_time=; token=6421971fe58be11703a36e40b728216335fec03b0eb47f523d404b2e77876ff784bc817bb1d7e3b861; acctype=qc; openid=F3E2DCCCD8CB64B1A56618988F84FBEA; access_token=F60DA9D76BAB5EDA20651295043B9EDA; appid=101491592; ieg_ams_token=; ieg_ams_session_token=; ieg_ams_token_time=; ieg_ams_sign='
            const headers = {
                'accept': 'application/json, text/plain, */*',
                'accept-language': 'zh-CN,zh;q=0.9',
                'origin': 'https://seed.qq.com',
                'priority': 'u=1, i',
                'referer': 'https://seed.qq.com/',
                'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'Cookie': cookie,
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
                'content-type': 'application/x-www-form-urlencoded',
                'host': 'comm.ams.game.qq.com',
                'connection': 'keep-alive',
                'sec-fetch-site': 'same-site'
            }
            const url = '/ide/'
            axios.defaults.withCredentials = true
            const apiClient = axios.create({
                baseURL: 'https://comm.ams.game.qq.com',
                headers: headers
            })
            const res = async () => {
                try {
                    const response = await apiClient.post(url, payload)
                    console.log(response.data)
                } catch (error) {
                    console.log(error)
                }
            }
            // const res = async () => {
            //     try {
            //         const response = await fetch('https://comm.ams.game.qq.com/ide/', {
            //             method:'POST',
            //             headers:headers,
            //             credentials:'include',
            //             data:payload,
            //             body:payload
            //         })
            //         const data = await response.json()
            //         console.log(data)
            //     }catch (error){
            //         console.error(error)
            //     }
            // }
            res()
        }

    }
}
</script>