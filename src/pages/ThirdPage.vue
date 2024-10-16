<template>
    <div>
        <h2><router-link :to="{ name: 'index' }">首页</router-link></h2>
        <p><button type="button" @click="loadPage()">初始化数据，先点我，初始化完成后可以点击下面的统计按钮（首次需要QQ扫码登录，登录完成后关闭弹窗再次点我）</button></p>
        <p>
            <button type="button" @click="getBjData()">统计数据</button>
            <button type="button" @click="saveScreenshot()" style="margin-left: 10px;">截图并保存</button>
        </p>
        <!-- 显示获取的数据 -->
        <div id="output">
            <ul class="resp-tabs-list clearfix" style="margin:10px 0 0">
                <li :class="{ 'bili-list-style': true, 'active': 1 === currentActiveIndex }" @click="setActiveClass(1)">
                    <span class="tab-panel">
                        <div style="display:flex;align-items:center;">
                            <div style="padding:0px 2px;font-size:16px;">所有烙痕混池</div>
                        </div>
                    </span>
                </li>
                <li :class="{ 'bili-list-style': true, 'active': 2 === currentActiveIndex }" @click="setActiveClass(2)">
                    <span class="tab-panel">
                        <div style="display:flex;align-items:center;">
                            <div style="padding:0px 2px;font-size:16px;">限定烙痕池</div>
                        </div>
                    </span>
                </li>
                <li :class="{ 'bili-list-style': true, 'active': 3 === currentActiveIndex }" @click="setActiveClass(3)">
                    <span class="tab-panel">
                        <div style="display:flex;align-items:center;">
                            <div style="padding:0px 2px;font-size:16px;">常驻烙痕池</div>
                        </div>
                    </span>
                </li>
                <li :class="{ 'bili-list-style': true, 'active': 4 === currentActiveIndex }" @click="setActiveClass(4)">
                    <span class="tab-panel">
                        <div style="display:flex;align-items:center;">
                            <div style="padding:0px 2px;font-size:16px;">所有角色混池</div>
                        </div>
                    </span>
                </li>
                <li :class="{ 'bili-list-style': true, 'active': 5 === currentActiveIndex }" @click="setActiveClass(5)">
                    <span class="tab-panel">
                        <div style="display:flex;align-items:center;">
                            <div style="padding:0px 2px;font-size:16px;">限定角色池</div>
                        </div>
                    </span>
                </li>
                <li :class="{ 'bili-list-style': true, 'active': 6 === currentActiveIndex }" @click="setActiveClass(6)">
                    <span class="tab-panel">
                        <div style="display:flex;align-items:center;">
                            <div style="padding:0px 2px;font-size:16px;">常驻角色池</div>
                        </div>
                    </span>
                </li>
            </ul>
            <div
                :class="{ 'resp-tab-content': true, 'display-block': 1 === currentActiveIndex, 'display-none': 1 !== currentActiveIndex }">
                <h3>混池烙痕总抽数：{{ currLaohenData.mix.total }}</h3>
                <h3>混池SSR数量：{{ currLaohenData.mix.data.length }}</h3>
                <h3>混池SSR平均耗抽：{{ currLaohenData.mix.oneEach }}</h3>
                <h3>混池综合概率（总）：{{ currLaohenData.mix.radio }}</h3>
                <h3>当期已垫抽数（UP+常驻）：{{ currLaohenData.mix.lastDian }}</h3>
                <hr>
                <div v-for="(ssr, index) in currLaohenData.mix.data" :key="index"
                    style="width: 100%;float: left;margin: 5px 0px;">
                    <ProgressBar :ssr="ssr" :isRole="0"></ProgressBar>
                </div>
            </div>
            <div
                :class="{ 'resp-tab-content': true, 'display-block': 2 === currentActiveIndex, 'display-none': 2 !== currentActiveIndex }">
                <h3>UP池烙痕总抽数：{{ currLaohenData.up.total }}</h3>
                <h3>UP池综合不歪率：{{ currLaohenData.up.noWaiRadio }}</h3>
                <h3>当期已垫抽数（限定）：{{ currLaohenData.up.lastDian }}</h3>
                <hr>
                <div style="width: 100%;">
                    <div style="float:left;width:49%;">
                        <h3>UP池SSR数量（+歪）：{{ currLaohenData.up.data.length }}</h3>
                        <h3>UP池SSR平均耗抽（+歪）：{{ currLaohenData.up.oneEach }}</h3>
                        <h3>UP池SSR综合概率（+歪）：{{ currLaohenData.up.radio }}</h3>
                    </div>
                    <div style="float:left;width:50%;">
                        <h3>获取限定SSR数量：{{ currLaohenData.up.noWaiData.length }}</h3>
                        <h3>获取限定SSR平均耗抽：{{ currLaohenData.up.oneUpEach }}</h3>
                        <h3>获取限定SSR综合概率：{{ currLaohenData.up.realUpRadio }}</h3>
                    </div>
                </div>
                <hr>
                <div v-for="(ssr, index) in currLaohenData.up.data" :key="index"
                    style="width: 100%;float: left;margin: 5px 0px;">
                    <ProgressBar :ssr="ssr" :isRole="0"></ProgressBar>
                </div>
            </div>
            <div
                :class="{ 'resp-tab-content': true, 'display-block': 3 === currentActiveIndex, 'display-none': 3 !== currentActiveIndex }">
                <h3>常驻池烙痕总抽数：{{ currLaohenData.changzhu.total }}</h3>
                <h3>常驻池SSR数量：{{ currLaohenData.changzhu.data.length }}</h3>
                <h3>常驻池SSR平均耗抽：{{ currLaohenData.changzhu.oneEach }}</h3>
                <h3>常驻池综合概率：{{ currLaohenData.changzhu.radio }}</h3>
                <h3>当期已垫抽数（常驻）：{{ currLaohenData.changzhu.lastDian }}</h3>
                <hr>
                <div v-for="(ssr, index) in currLaohenData.changzhu.data" :key="index"
                    style="width: 100%;float: left;margin: 5px 0px;">
                    <ProgressBar :ssr="ssr" :isRole="0"></ProgressBar>
                </div>
            </div>
            <div
                :class="{ 'resp-tab-content': true, 'display-block': 4 === currentActiveIndex, 'display-none': 4 !== currentActiveIndex }">
                <h3>混池角色总抽数：{{ currRoleData.mix.total }}</h3>
                <h3>混池6星数量：{{ currRoleData.mix.data.length }}</h3>
                <h3>混池6星平均耗抽：{{ currRoleData.mix.oneEach }}</h3>
                <h3>混池综合概率（总）：{{ currRoleData.mix.radio }}</h3>
                <h3>当期已垫抽数（UP+常驻）：{{ currRoleData.mix.lastDian }}</h3>
                <hr>
                <div v-for="(ssr, index) in currRoleData.mix.data" :key="index"
                    style="width: 100%;float: left;margin: 5px 0px;">
                    <ProgressBar :ssr="ssr" :isRole="1"></ProgressBar>
                </div>
            </div>
            <div
                :class="{ 'resp-tab-content': true, 'display-block': 5 === currentActiveIndex, 'display-none': 5 !== currentActiveIndex }">
                <h3>UP池角色总抽数：{{ currRoleData.up.total }}</h3>
                <h3>UP池综合不歪率：{{ currRoleData.up.noWaiRadio }}</h3>
                <h3>当期已垫抽数（限定）：{{ currRoleData.up.lastDian }}</h3>
                <hr>
                <div style="width: 100%;">
                    <div style="float:left;width:49%;">
                        <h3>UP池6星数量（+歪）：{{ currRoleData.up.data.length }}</h3>
                        <h3>UP池6星平均耗抽（+歪）：{{ currRoleData.up.oneEach }}</h3>
                        <h3>UP池6星综合概率（+歪）：{{ currRoleData.up.radio }}</h3>
                    </div>
                    <div style="float:left;width:50%;">
                        <h3>获取限定6星数量：{{ currRoleData.up.noWaiData.length }}</h3>
                        <h3>获取限定6星平均耗抽：{{ currRoleData.up.oneUpEach }}</h3>
                        <h3>获取限定6星综合概率：{{ currRoleData.up.realUpRadio }}</h3>
                    </div>
                </div>
                <hr>
                <div v-for="(ssr, index) in currRoleData.up.data" :key="index"
                    style="width: 100%;float: left;margin: 5px 0px;">
                    <ProgressBar :ssr="ssr" :isRole="1"></ProgressBar>
                </div>
            </div>
            <div
                :class="{ 'resp-tab-content': true, 'display-block': 6 === currentActiveIndex, 'display-none': 6 !== currentActiveIndex }">
                <h3>常驻池角色总抽数：{{ currRoleData.changzhu.total }}</h3>
                <h3>常驻池6星数量：{{ currRoleData.changzhu.data.length }}</h3>
                <h3>常驻池6星平均耗抽：{{ currRoleData.changzhu.oneEach }}</h3>
                <h3>常驻池综合概率：{{ currRoleData.changzhu.radio }}</h3>
                <h3>当期已垫抽数（常驻）：{{ currRoleData.changzhu.lastDian }}</h3>
                <hr>
                <div v-for="(ssr, index) in currRoleData.changzhu.data" :key="index"
                    style="width: 100%;float: left;margin: 5px 0px;">
                    <ProgressBar :ssr="ssr" :isRole="1"></ProgressBar>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue';
import html2canvas from 'html2canvas';
import ProgressBar from './components/ProgressBar.vue';

export default {
    components: {
        ProgressBar
    },
    setup() {
        /**
         * 返回游戏开服的周年次数（按360天算）
         */
        const currYearCount = () => {
            //开服日期
            let startDate = new Date('2024-01-01T00:00:00');
            let startTimestamp = Math.floor(startDate.getTime() / 1000);

            let todayDate = new Date();
            let todayDateZero = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}T00:00:00`
            let todayTimestamp = Math.floor(new Date(todayDateZero).getTime() / 1000);

            let diffTime = todayTimestamp - startTimestamp
            let yearTime = 24 * 3600 * 360//一年按360天来处理
            return Math.floor(diffTime / yearTime)
        }
        /**
         * 判断当前处于哪一个时间节点，因为本地数据库一次性存储数据最大为1M，所以根据时间节点对数据库进行拆分，每年新增一个数据库id
         */
        const currDateWhere = () => {
            let yearCount = currYearCount()
            //根据年次数返回特定的数据库id
            if (yearCount > 0) {
                return { laohen: `laohen${yearCount}`, role: `role${yearCount}` }
            }
            return { laohen: `laohen`, role: `role` }
        }

        /**
         * 加载页面
         */
        const loadPage = () => {
            const lastUpdateTime = window.utools.dbStorage.getItem("lastUpdateTime")
            const initBJ = window.utools.ubrowser.goto('https://seed.qq.com/act/a20240905record/index.html')
                .devTools("right")
                .viewport(1280, 900)
                .evaluate((lastUpTime) => {
                    // let queryPoolConfigUrl = "https://seed.qq.com/act/a20240905record/pc/json/pool.json";
                    // let queryRoleConfigUrl = "https://seed.qq.com/act/a20240905record/pc/json/concordant.json";
                    // let queryCardConfigUrl = "https://seed.qq.com/act/a20240905record/pc/json/soldering_mark.json";

                    let queryDataUrl = "https://comm.ams.game.qq.com/ide/";
                    let currentCookies = document.cookie;
                    console.log(`上次更新时间：${lastUpTime}`)

                    return queryAllCardData(lastUpTime)

                    //return "烙痕数据"

                    // 查询所有烙痕数据
                    async function queryAllCardData(lastUpTime) {
                        let defStartDate = '2024-01-01T00:00:00';
                        let currentDate = new Date();
                        let currentTimestamp = Math.floor(Date.now() / 1000)
                        console.log(`当前时间：${currentDate} - ${currentTimestamp}`);

                        if (lastUpTime !== null) {
                            let date = new Date(Number(lastUpTime) * 1000)
                            let lastDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}T00:00:00`
                            defStartDate = lastDate

                        }
                        console.log(`开始查询日期：${defStartDate}`)

                        let startDate = new Date(defStartDate);
                        let startTimestamp = Math.floor(startDate.getTime() / 1000);

                        let endDate = new Date(startDate);
                        endDate.setDate(endDate.getDate() + 30);
                        let endTimestamp = Math.floor(endDate.getTime() / 1000);

                        let whileNum = 1;
                        let flag = true;

                        let cardRecodes = {};

                        do {
                            // 如果截止时间大于当前日期,使用当前日期作为截止时间
                            if (endTimestamp > currentTimestamp) {
                                endTimestamp = currentTimestamp;
                                flag = false;
                            }
                            //console.log(`第${whileNum}次，起始时间：${startDate} - ${startTimestamp}`)
                            //console.log(`第${whileNum}次，结束时间：${endDate} - ${endTimestamp}`)
                            await $.ajax({
                                url: queryDataUrl,
                                type: 'POST',
                                data: `iChartId=323691&iSubChartId=323691&sIdeToken=Q4rDBY&e_code=0&g_code=0&eas_url=http%253A%252F%252Fseed.qq.com%252Fact%252Fa20240905record%252F&eas_refer=http%253A%252F%252Fnoreferrer%252F%253Freqid%253D3df01c1c-6b8d-4dd8-83ac-66f88ea20694%2526version%253D27&sMiloTag=AMS-bjhl-1011171748-LPbNU2-666158-1067627&startTime=${startTimestamp}&endTime=${endTimestamp}&isPreengage=1&needGopenid=1`,
                                xhrFields: {
                                    withCredentials: true
                                },
                                beforeSend: function (xhr) {
                                    xhr.setRequestHeader('Cookie', currentCookies);
                                },
                                success: function (httpResponse) {
                                    //console.log(`原始响应报文记录：${httpResponse}`)

                                    let resp = JSON.parse(httpResponse);
                                    let tempCardRecodes = resp.jData.data;

                                    Object.keys(tempCardRecodes).forEach(key => {
                                        if (tempCardRecodes[key].length !== 0) {
                                            cardRecodes[key] = [];
                                            tempCardRecodes[key].sort((a, b) => a.time.localeCompare(b.time))
                                                .forEach(tempCardRecode => {
                                                    cardRecodes[key].push(tempCardRecode)
                                                });
                                        }
                                    })
                                },
                                error: function (xhr, status, error) {
                                    console.log('Error:', error);
                                }
                            });
                            // 下一次查询起始时间
                            startDate.setDate(startDate.getDate() + 30);
                            startTimestamp = Math.floor(startDate.getTime() / 1000);
                            // 下一次查询截止时间
                            endDate.setDate(endDate.getDate() + 30);
                            endTimestamp = Math.floor(endDate.getTime() / 1000);

                            whileNum++;
                        } while (flag);

                        console.log("-------------------烙痕池有效数据总条数 begin -------------------")
                        console.log(JSON.stringify(cardRecodes));
                        console.log("-------------------烙痕池有效数据总条数 end ---------------------")
                        return cardRecodes
                    }
                }, lastUpdateTime)
                .evaluate((lastUpTime) => {
                    let queryDataUrl = "https://comm.ams.game.qq.com/ide/";
                    let currentCookies = document.cookie;

                    return queryAllRoleData(lastUpTime)

                    //return "角色数据"

                    //查询所有角色信息
                    async function queryAllRoleData(lastUpTime) {
                        let defStartDate = '2024-01-01T00:00:00';
                        let currentDate = new Date();
                        let currentTimestamp = Math.floor(Date.now() / 1000)
                        console.log(`当前时间：${currentDate} - ${currentTimestamp}`);
                        let todayZero = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}T00:00:00`

                        if (lastUpTime !== null) {
                            let date = new Date(Number(lastUpTime) * 1000)
                            let lastDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}T00:00:00`
                            defStartDate = lastDate
                        }

                        let startDate = new Date(defStartDate);
                        let startTimestamp = Math.floor(startDate.getTime() / 1000);

                        let endDate = new Date(startDate);
                        endDate.setDate(endDate.getDate() + 30);
                        let endTimestamp = Math.floor(endDate.getTime() / 1000);

                        let whileNum = 1;
                        let flag = true;

                        let roleRecodes = {};

                        do {
                            // 如果截止时间大于当前日期,使用当前日期作为截止时间
                            if (endTimestamp > currentTimestamp) {
                                endTimestamp = currentTimestamp;
                                flag = false;
                            }
                            console.log(`第${whileNum}次，起始时间：${startDate} - ${startTimestamp}`)
                            console.log(`第${whileNum}次，结束时间：${endDate} - ${endTimestamp}`)
                            // 阻塞获取所有角色卡池记录
                            await $.ajax({
                                url: queryDataUrl,
                                type: 'POST',
                                data: `iChartId=323543&iSubChartId=323543&sIdeToken=mhi97c&e_code=0&g_code=0&eas_url=http%253A%252F%252Fseed.qq.com%252Fact%252Fa20240905record%252F&eas_refer=http%253A%252F%252Fseed.qq.com%252Fact%252Fa20240905record%252F%253Freqid%253D61f42185-88e0-4635-9eb9-2ec183a7ede2%2526version%253D27&sMiloTag=AMS-bjhl-1010111534-f37R5S-666158-1067503&startTime=${startTimestamp}&endTime=${endTimestamp}&isPreengage=1&needGopenid=1`,
                                xhrFields: {
                                    withCredentials: true
                                },
                                beforeSend: function (xhr) {
                                    xhr.setRequestHeader('Cookie', currentCookies);
                                },
                                success: function (httpResponse) {
                                    console.log(`原始响应报文记录：${httpResponse}`)

                                    let resp = JSON.parse(httpResponse);
                                    let tempRoleRecodes = resp.jData.data;

                                    Object.keys(tempRoleRecodes)
                                        .forEach(key => {
                                            if (tempRoleRecodes[key].length !== 0) {
                                                roleRecodes[key] = [];
                                                tempRoleRecodes[key].sort((a, b) => a.time.localeCompare(b.time))
                                                    .forEach(tempRoleRecode => {
                                                        roleRecodes[key].push(tempRoleRecode)
                                                    });
                                            }
                                        })
                                },
                                error: function (xhr, status, error) {
                                    console.log('Error:', error);
                                }
                            });
                            // 下一次查询起始时间
                            startDate.setDate(startDate.getDate() + 30);
                            startTimestamp = Math.floor(startDate.getTime() / 1000);
                            // 下一次查询截止时间
                            endDate.setDate(endDate.getDate() + 30);
                            endTimestamp = Math.floor(endDate.getTime() / 1000);

                            whileNum++;
                        } while (flag);
                        console.log("-------------------角色池有效数据总条数 begin -------------------")
                        console.log(JSON.stringify(roleRecodes));
                        console.log("-------------------角色池有效数据总条数 end ---------------------")
                        return roleRecodes
                    }
                }, lastUpdateTime)
                .run({ width: 1280, height: 900 });

            initBJ.then((data) => {
                console.log(data)
                if (data.length === 3) {
                    let dbIdNameData = currDateWhere()
                    console.log(`ID名称(烙痕-角色)：${dbIdNameData.laohen}-${dbIdNameData.role}`)
                    let hasUpOrAdd = false
                    //根据evaluate请求顺序，第一个为烙痕数据，第二个为角色数据
                    if (Object.keys(data[0]).length > 0) {
                        hasUpOrAdd = true
                        let idName = dbIdNameData.laohen
                        let saveLaohenData = {}
                        saveLaohenData._id = idName
                        //数据库中数据格式： { _id: 'laohen', data: {"20241010":[{},{}]} }
                        //在存在多个id数据源时
                        //本地数据库存储的最后一条数据的日期一定比上一次请求记录的时间小
                        //官方提供的抽卡数据一定是完整的，不存在同一天的数据却会被分割在两个请求里面
                        //故新请求到的数据一定跟本地的数据是不存在重复数据的
                        let dbLaohenData = window.utools.db.get(idName)
                        let laohenNewData = {}
                        //为null的情况，则表明是首次请求，直接把请求的数据直接赋值给变量即可
                        if (dbLaohenData) {
                            saveLaohenData._rev = dbLaohenData._rev
                            //如果存在已经保存的数据，则将新请求到的数据保存到本地数据库中
                            //先把数据库中的数据重新赋值给变量，再把新请求数据遍历分别添加新请求到的数据
                            laohenNewData = dbLaohenData.data
                            for (let newDate in data[0]) {
                                laohenNewData.newDate = data[0][newDate]
                            }
                        } else {
                            laohenNewData = data[0]
                        }
                        saveLaohenData.data = laohenNewData
                        console.log(`新增或更新烙痕数据：`)
                        console.log(saveLaohenData)
                        window.utools.db.put(saveLaohenData)
                    }
                    if (Object.keys(data[1]).length > 0) {
                        hasUpOrAdd = true
                        let idName = dbIdNameData.role
                        let saveRoleData = {}
                        saveRoleData._id = idName
                        let dbRoleData = window.utools.db.get(idName)
                        let roleNewData = {}
                        if (dbRoleData) {
                            saveRoleData._rev = dbRoleData._rev
                            roleNewData = dbRoleData.data
                            for (let newDate in data[1]) {
                                roleNewData.newDate = data[1][newDate]
                            }
                        } else {
                            roleNewData = data[1]
                        }
                        saveRoleData.data = roleNewData
                        console.log(`新增或更新角色数据：`)
                        console.log(saveRoleData)
                        window.utools.db.put(saveRoleData)
                    }
                    //同时记录查询时间，方便下次再更新时，使用此时间作为开始时间
                    if (hasUpOrAdd) {
                        let currentDate = new Date();
                        let currentTimestamp = Math.floor(Date.now() / 1000)
                        window.utools.dbStorage.setItem('lastUpdateTime', currentTimestamp)
                        alert("数据更新成功！")
                    }
                }

            }).catch(error => {
                console.error(error)
            })
        }

        /**
         * 长截图并保存
         */
        const saveScreenshot = async () => {
            try {
                const node = document.getElementById('app'); // 选择需要截图的DOM节点
                const canvas = await html2canvas(node);
                const dataURL = canvas.toDataURL('image/png');
                const blob = await fetch(dataURL).then(r => r.blob());
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                let todayDate = new Date();
                let todayDateZero = `${todayDate.getFullYear()}${todayDate.getMonth() + 1}${todayDate.getDate()}_${todayDate.getHours()}${todayDate.getMinutes()}${todayDate.getMilliseconds()}`
                a.download = `${todayDateZero}_bjhl.png`;
                a.click();
                URL.revokeObjectURL(a.href);
            } catch (error) {
                console.error('截图失败:', error);
            }
        }
        return {
            loadPage, currYearCount, saveScreenshot
        }
    },
    mounted() {
        this.getBjData()
    },
    data() {
        return {
            currentActiveIndex: 1,
            currLaohenData: {
                mix: {
                    data: new Array,
                    total: 0,
                    oneEach: '0',
                    radio: '',
                    lastDian: 0//最新期已垫抽数，下同
                },//混池
                up: {
                    data: new Array,
                    noWaiData: new Array,
                    total: 0,
                    oneEach: '0',
                    oneUpEach: '0',//每获取一个UP角色的平均抽数
                    radio: '',
                    realUpRadio: '',//每获取一个UP的实际概率（去除歪的角色或烙痕）
                    noWaiRadio: '',//不歪率，不歪数量/总数量（up获取的ssr或6*）
                    lastDian: 0
                },//UP池
                changzhu: {
                    data: new Array,
                    total: 0,
                    oneEach: '0',
                    radio: '',
                    lastDian: 0
                }//常驻池
            },
            currRoleData: {
                mix: {
                    data: new Array,
                    total: 0,
                    oneEach: '0',
                    radio: '',
                    lastDian: 0
                },
                up: {
                    data: new Array,
                    noWaiData: new Array,
                    total: 0,
                    oneEach: '0',
                    oneUpEach: '0',
                    radio: '',
                    realUpRadio: '',
                    noWaiRadio: '',
                    lastDian: 0
                },
                changzhu: {
                    data: new Array,
                    total: 0,
                    oneEach: '0',
                    radio: '',
                    lastDian: 0
                }
            },
            allLaohenPoolData: {},
            allRolePoolData: {}
        }
    },
    methods: {
        setActiveClass(index) {
            this.currentActiveIndex = index
        },
        /**
         * 处理所有的本地数据，如果存在多个数据源，则进行整合处理
         */
        dealAllDbData() {
            const yearCount = this.currYearCount()
            let dbIdName = { laohen: new Array, role: new Array }
            for (let i = 0; i <= yearCount; i++) {
                if (i === 0) {
                    dbIdName.laohen.push('laohen')
                    dbIdName.role.push('role')
                } else {
                    dbIdName.laohen.push(`laohen${i}`)
                    dbIdName.role.push(`role${i}`)
                }
            }
            const allLaohenDBData = window.utools.db.allDocs(dbIdName.laohen)
            const allRoleDBData = window.utools.db.allDocs(dbIdName.role)

            let newDBData = { laohen: {}, role: {} }
            if (allLaohenDBData) {
                if (allLaohenDBData.length === 1) {
                    newDBData.laohen = allLaohenDBData[0].data
                } else {
                    let laohenDBData = {}
                    for (let key in allLaohenDBData) {
                        laohenDBData = { ...laohenDBData, ...allLaohenDBData[key].data }
                    }
                    newDBData.laohen = laohenDBData
                }
            }
            if (allRoleDBData) {
                if (allRoleDBData.length === 1) {
                    newDBData.role = allRoleDBData[0].data
                } else {
                    let roleDBData = {}
                    for (let key in allRoleDBData) {
                        roleDBData = { ...roleDBData, ...allRoleDBData[key].data }
                    }
                    newDBData.role = roleDBData
                }
            }
            return newDBData
        },
        getBjData() {
            const pool = window.$commonUtil.poolConfig
            const role = window.$commonUtil.roleConfig
            const laohen = window.$commonUtil.laohenConfig
            // console.log(`卡池配置（卡池-角色-烙痕）`)
            // console.log(pool)
            // console.log(role)
            // console.log(laohen)
            const allDBData = this.dealAllDbData()
            const lData = this.dealPoolData(allDBData.laohen, pool, laohen)
            const rData = this.dealPoolData(allDBData.role, pool, role, true)
            //倒叙排，ssr烙痕
            this.currLaohenData.mix.data = computed(() => { return [...lData.data].reverse() }).value
            this.currLaohenData.mix.total = lData.totalCount
            this.currLaohenData.mix.radio = ((this.currLaohenData.mix.data.length * 100) / lData.totalCount).toFixed(3) + '%'
            this.currLaohenData.mix.oneEach = (lData.totalCount / this.currLaohenData.mix.data.length).toFixed(3)
            this.currLaohenData.mix.lastDian = lData.upDianCount + lData.changzhuDianCount

            this.currLaohenData.up.data = computed(() => { return [...lData.upData].reverse() }).value
            this.currLaohenData.up.noWaiData = computed(() => { return [...lData.upWithNoWaiData].reverse() }).value
            this.currLaohenData.up.total = lData.upTotalCount
            this.currLaohenData.up.radio = ((this.currLaohenData.up.data.length * 100) / lData.upTotalCount).toFixed(3) + '%'
            this.currLaohenData.up.realUpRadio = ((this.currLaohenData.up.noWaiData.length * 100) / lData.upTotalCount).toFixed(3) + '%'
            this.currLaohenData.up.noWaiRadio = ((this.currLaohenData.up.noWaiData.length * 100) / this.currLaohenData.up.data.length).toFixed(3) + '%'
            this.currLaohenData.up.oneEach = (lData.upTotalCount / this.currLaohenData.up.data.length).toFixed(3)
            this.currLaohenData.up.oneUpEach = (lData.upTotalCount / this.currLaohenData.up.noWaiData.length).toFixed(3)
            this.currLaohenData.up.lastDian = lData.upDianCount

            this.currLaohenData.changzhu.data = computed(() => { return [...lData.changzhuData].reverse() }).value
            this.currLaohenData.changzhu.total = lData.changzhuTotalCount
            this.currLaohenData.changzhu.radio = ((this.currLaohenData.changzhu.data.length * 100) / lData.changzhuTotalCount).toFixed(3) + '%'
            this.currLaohenData.changzhu.oneEach = (lData.changzhuTotalCount / this.currLaohenData.changzhu.data.length).toFixed(3)
            this.currLaohenData.changzhu.lastDian = lData.changzhuDianCount
            //角色
            this.currRoleData.mix.data = computed(() => { return [...rData.data].reverse() }).value
            this.currRoleData.mix.total = rData.totalCount
            this.currRoleData.mix.radio = ((this.currRoleData.mix.data.length * 100) / rData.totalCount).toFixed(3) + '%'
            this.currRoleData.mix.oneEach = (rData.totalCount / this.currRoleData.mix.data.length).toFixed(3)
            this.currRoleData.mix.lastDian = rData.upDianCount + rData.changzhuDianCount

            this.currRoleData.up.data = computed(() => { return [...rData.upData].reverse() }).value
            this.currRoleData.up.noWaiData = computed(() => { return [...rData.upWithNoWaiData].reverse() }).value
            this.currRoleData.up.total = rData.upTotalCount
            this.currRoleData.up.radio = ((this.currRoleData.up.data.length * 100) / rData.upTotalCount).toFixed(3) + '%'
            this.currRoleData.up.realUpRadio = ((this.currRoleData.up.noWaiData.length * 100) / rData.upTotalCount).toFixed(3) + '%'
            this.currRoleData.up.noWaiRadio = ((this.currRoleData.up.noWaiData.length * 100) / this.currRoleData.up.data.length).toFixed(3) + '%'
            this.currRoleData.up.oneEach = (rData.upTotalCount / this.currRoleData.up.data.length).toFixed(3)
            this.currRoleData.up.oneUpEach = (rData.upTotalCount / this.currRoleData.up.noWaiData.length).toFixed(3)
            this.currRoleData.up.lastDian = rData.upDianCount

            this.currRoleData.changzhu.data = computed(() => { return [...rData.changzhuData].reverse() }).value
            this.currRoleData.changzhu.total = rData.changzhuTotalCount
            this.currRoleData.changzhu.radio = ((this.currRoleData.changzhu.data.length * 100) / rData.changzhuTotalCount).toFixed(3) + '%'
            this.currRoleData.changzhu.oneEach = (rData.changzhuTotalCount / this.currRoleData.changzhu.data.length).toFixed(3)
            this.currRoleData.changzhu.lastDian = rData.changzhuDianCount

            this.allLaohenPoolData = lData.allData//烙痕卡池所有抽卡情况
            this.allRolePoolData = rData.allData//角色卡池所有抽卡情况
        },
        /**
         * 处理卡池数据
         * @param laohenOrRoleData 烙痕池或者角色池抽卡数据
         * @param pool 卡池配置信息
         * @param laohenOrRole 烙痕或者角色池配置信息
         * @param isRole 是否是在处理角色抽卡数据
         */
        dealPoolData(laohenOrRoleData, pool, laohenOrRole, isRole = false) {
            // console.log(`卡池配置（卡池-角色-烙痕）`)
            // console.log(pool)
            const needCheckRarity = isRole ? '6' : '3'
            let allData = new Array//所有6星或者ssr
            let changzhuData = new Array//常驻卡池
            let upWithNoWaiData = new Array//不算歪的UP池
            let upData = new Array//限定UP卡池
            let allPoolData = {}//所以抽卡汇总（UP+常驻+友情）
            //烙痕或角色通用数据结构：{poolId:{type:'',name:''},...}
            //卡池数据结构：{tid:{namr:"",rarity:"1"}}
            let totalCount = 0//总抽数
            let upTotalCount = 0//UP池总抽数
            let changzhuTotalCount = 0//常驻池总抽数
            let ssrCount = 0//ssr数量
            let changzhuDianCount = 0//常驻池垫
            let upDianCount = 0//UP池垫
            for (let date in laohenOrRoleData) {
                const laohenList = laohenOrRoleData[date]
                totalCount += laohenList.length
                for (let index in laohenList) {
                    //实际抽卡（角色/烙痕）通用数据结构：{time: '2024-01-12 09:19:42', poolId: '2', tid: '1013'}
                    const eachData = laohenList[index]
                    let poolId = eachData.poolId
                    if (!Object.keys(allPoolData).includes(poolId)) {
                        allPoolData[poolId] = new Array
                    }
                    let ssrLaohenWithPool = {
                        poolId: eachData.poolId,
                        poolName: pool[poolId].name,
                        time: eachData.time,
                        name: laohenOrRole[eachData.tid].name,
                        rarity: laohenOrRole[eachData.tid].rarity,
                        dian: 0,
                        up: pool[poolId].up
                    }
                    allPoolData[poolId].push(ssrLaohenWithPool)
                    //判断是常驻还是UP抽
                    let isUp = ssrLaohenWithPool.up.length > 0
                    if (isUp) {
                        upTotalCount++
                    } else {
                        changzhuTotalCount++
                    }
                    //totalCount++
                    //获取ssr或者6星
                    if (ssrLaohenWithPool.rarity === needCheckRarity) {
                        ssrLaohenWithPool.dian = isUp ? upDianCount : changzhuDianCount
                        ssrCount++
                        if (isUp) {
                            upData.push(ssrLaohenWithPool)
                            //判断是否歪（UP池才有歪的概念）
                            if (ssrLaohenWithPool.name == pool[poolId].up) {
                                upWithNoWaiData.push(ssrLaohenWithPool)
                            }
                            upDianCount = 0
                        } else {
                            changzhuData.push(ssrLaohenWithPool)
                            changzhuDianCount = 0
                        }
                        allData.push(ssrLaohenWithPool)
                    } else {
                        if (isUp) {
                            upDianCount++
                        } else {
                            changzhuDianCount++
                        }
                        //去除友情的抽数，卡池id为100
                        if (poolId === '100') {
                            //角色不存在友情池，故只需对常驻数量-1
                            changzhuDianCount--
                            totalCount--
                            changzhuTotalCount--
                        }
                    }
                }
            }
            return {
                data: allData,
                upData: upData,
                upWithNoWaiData: upWithNoWaiData,
                changzhuData: changzhuData,
                allData: allPoolData,
                totalCount: totalCount,
                upTotalCount: upTotalCount,
                changzhuTotalCount: changzhuTotalCount,
                upDianCount: upDianCount,
                changzhuDianCount: changzhuDianCount
            }
        }
    }
};
</script>
<style scoped>
.display-block {
    display: block;
}

.display-none {
    display: none;
}

.resp-tab-content {
    width: 100%;
}

a:hover {
    color: darkmagenta;
}

h2>a,
h2>a:visited {
    color: #333;
}

p>button {
    background-color: #333;
    color: #fff;
}

.resp-tabs-list li.active .tab-panel,
.tab-panel:hover {
    font-family: "Source Han Sans CN";
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
    text-align: center;
    font-weight: bold;
    background: #fff;
}

.resp-tabs-list li {
    background: #525c66;
    border: 1px solid #404040;
    margin-bottom: 10px;
    box-sizing: border-box;
    float: left;
    list-style: none;
    cursor: pointer;
    background: #525c66;
    border: 1px solid #404040;
    width: 14.28%;
    color: #fff;
}

.bili-list-style {
    height: 34px;
    display: flex;
}

.bili-list-style span {
    display: flex;
    padding-right: 5px;
    width: 100%;
}
</style>