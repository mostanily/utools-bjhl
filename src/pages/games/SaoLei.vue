<template>
    <div id="headBox">
        <h1 id="firstHeading" class="firstHeading" lang="zh-Hans-CN" style="font-size: 20px;">
            <router-link :to="{ name: 'index' }" title="首页" style="color: #333;" >首页</router-link> &gt; 扫雷<span
                id="location"></span>
        </h1>
    </div>
    <hr>
    <div class="board">
        <div class="config-item">
            点击“开始”按钮后开始游戏
        </div>
        <div class="config-item">
            <form>
                <label for="rowsindex">难度：</label>
                <select v-model="currentLevel" @change="handleLevelChange" style="padding: 5px 10px;">
                    <option v-for="(level, index) in levels" :key="index" :value="level">{{ level.name }}</option>
                </select>
            </form>
        </div>
        <div class="config-item" style="font-size: 12px;">
           提示：当前难度存在雷数量：<span> {{ currentLevel.boomCount }}</span>枚
        </div>
        <div class="config-item">
            用时： <strong>{{ costTime }}</strong>
        </div>
        <div class="config-item">
            <button class="btn" @click="resetGame">重置</button>
            <button class="btn" :disabled="gameStatus == 'start'" @click="startGame">开始</button>
        </div>
    </div>
    <div class="warper">
        <div class="row" v-for="(row, indexRow) in cells" :key="indexRow">
            <div v-for="(column, indexColumn) in cells[indexRow]" :key="indexColumn" :class="'cell ' + column.style"
                @click="handleCellClick(indexRow, indexColumn)"
                @click.right.prevent="handleCellFlag(indexRow, indexColumn)">
                {{ column.text }}
            </div>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            boomValue: "332962963",
            levels: [
                { name: '黑铁', rowsindex: 8, columnsindex: 8, boomCount: 6 },
                { name: '青铜', rowsindex: 10, columnsindex: 10, boomCount: 11 },
                { name: '白银', rowsindex: 14, columnsindex: 14, boomCount: 20 },
                { name: '黄金', rowsindex: 16, columnsindex: 16, boomCount: 28 },
                { name: '白金', rowsindex: 20, columnsindex: 20, boomCount: 44 },
                { name: '钻石', rowsindex: 24, columnsindex: 24, boomCount: 60 },
                { name: '大师', rowsindex: 30, columnsindex: 30, boomCount: 95 },
                { name: '王者', rowsindex: 36, columnsindex: 36, boomCount: 120 }
            ],
            cells: new Array,
            randoms: new Array,
            rightsZero: new Array,
            boomTips: "",
            currentLevel: { name: '黑铁', rowsindex: 8, columnsindex: 8, boomCount: 6 },
            costTime: "00:00:00",
            gameStatus: "stop",
            startTime: 0,
            timer: null,
            start: 0,
            rowsindex: 0,
            columnsindex: 0,
            boomCount: 0,
            end: 0
        }
    },
    mounted() {
        this.initGame()
    },
    methods: {
        handleLevelChange() {
            // console.log(this.currentLevel)
            this.resetGame();
        },
        startGame() {
            this.gameStatus = "start";
            this.startTimer();
            this.initGame();
        },
        resetGame() {
            this.gameStatus = "stop";
            this.stopTimer();
            this.resetTimer();
            this.initGame();
        },
        handleCellClick(i, j) {
            if (this.gameStatus !== 'start') {
                return;
            }

            if (this.cells[i][j].value != this.boomValue) {
                this.rightsZero = [];
                this.clickRights(i, j);
                for (let i = 0; i < this.rightsZero.length; i++) {
                    let [rowIndex, columnIndex] = this.getRowIndexColumnIndex(this.rightsZero[i]);
                    this.cells[rowIndex][columnIndex] = this.getCellClickedInfo(rowIndex, columnIndex);
                }
                this.ifWin();
            } else {
                this.cells[i][j] = { style: 'boom', clicked: true, text: '⭕️', value: this.boomValue };
                this.finishGame();
            }
        },
        handleCellFlag(i, j) {
            if (this.gameStatus !== 'start') {
                return;
            }

            let cell = this.cells[i][j];
            if (cell.clicked) {
                return;
            }
            if (cell.style === 'flag') {
                this.cells[i][j] = { style: 'unClicked', clicked: false, text: '', value: cell.value };
            } else {
                this.cells[i][j] = { style: 'flag', clicked: false, text: '🚩', value: cell.value };
                this.ifWin();
            }
        },
        ifWin() {
            let flagCount = 0;
            for (let i = 0; i < this.rowsindex; i++) {
                for (let j = 0; j < this.columnsindex; j++) {
                    if (this.cells[i][j].style === 'flag') {
                        flagCount++;
                    }
                }
            }
            let rightCount = 0;
            for (let i = 0; i < this.rowsindex; i++) {
                for (let j = 0; j < this.columnsindex; j++) {
                    if (this.cells[i][j].value === this.boomValue && this.cells[i][j].style == 'flag') {
                        rightCount++;
                    }
                }
            }
            if (flagCount === this.boomCount && flagCount === rightCount) {
                this.winGame();
            }
        },
        clickRights(i, j) {
            let index = i * this.rowsindex + j;
            if (this.rightsZero.indexOf(index) !== -1) {
                return;
            }
            this.rightsZero.push(index);
            if (this.cells[i][j].value === 0) {
                //上
                if (i - 1 >= 0 && this.cells[i - 1][j].value === 0 && this.cells[i - 1][j].clicked === false && this.cells[i - 1][j].style !== 'flag') {
                    this.clickRights(i - 1, j);
                }
                //下
                if (i + 1 < this.rowsindex && this.cells[i + 1][j].value === 0 && this.cells[i + 1][j].clicked === false && this.cells[i + 1][j].style !== 'flag') {
                    this.clickRights(i + 1, j);
                }
                //左
                if (j - 1 >= 0 && this.cells[i][j - 1].value === 0 && this.cells[i][j - 1].clicked === false && this.cells[i][j - 1].style !== 'flag') {
                    this.clickRights(i, j - 1);
                }
                //右
                if (j + 1 < this.columnsindex && this.cells[i][j + 1].value === 0 && this.cells[i][j + 1].clicked === false && this.cells[i][j + 1].style !== 'flag') {
                    this.clickRights(i, j + 1);
                }
            }
        },
        getCellClickedInfo(row, index) {
            let cell = this.cells[row][index];
            return { style: 'clicked-' + cell.value, clicked: true, text: cell.value === 0 ? '' : cell.value, value: cell.value };
        },
        finishGame() {
            this.gameStatus = 'stop';
            setTimeout(() => {
                this.stopTimer();
                alert('Game Over');
                this.showAllBoom();
                // initGame();
            }, 50)
        },
        winGame() {
            this.gameStatus = 'stop';
            setTimeout(() => {
                this.stopTimer();
                alert('You Win');
                // initGame();
            }, 50)
        },
        showAllBoom() {
            for (let i = 0; i < this.rowsindex; i++) {
                for (let j = 0; j < this.columnsindex; j++) {
                    const cell = this.cells[i][j];
                    if (cell.value === this.boomValue) {
                        this.cells[i][j] = { style: 'boom', clicked: true, text: '⭕️', value: this.boomValue };
                    } else {
                        this.cells[i][j] = { style: 'clicked-' + cell.value, clicked: true, text: cell.value === 0 ? '' : cell.value, value: cell.value };
                    }
                }
            }
        },
        initGame() {
            console.log('initGame')
            this.rowsindex = this.currentLevel.rowsindex;
            this.columnsindex = this.currentLevel.columnsindex;
            this.boomCount = this.currentLevel.boomCount;
            let endData = computed(() => {
                return this.rowsindex * this.columnsindex - 1;
            })
            this.end = endData.value

            this.cells = new Array;
            this.randoms = new Array;
            for (let i = 0; i < this.rowsindex; i++) {
                this.cells[i] = new Array;
                for (let j = 0; j < this.columnsindex; j++) {
                    this.cells[i][j] = { style: 'unClicked', clicked: false, text: '', value: 0 };
                }
            }
            for (let i = 0; i < this.boomCount; i++) {
                this.getUniqueRandoms(this.randoms);
            }
            for (let i = 0; i < this.randoms.length; i++) {
                let [rowIndex, columnIndex] = this.getRowIndexColumnIndex(this.randoms[i]);
                this.cells[rowIndex][columnIndex].value = this.boomValue;
            }
            for (let i = 0; i < this.rowsindex; i++) {
                for (let j = 0; j < this.columnsindex; j++) {
                    if (this.cells[i][j].value !== this.boomValue) {
                        let count = 0;
                        for (let x = i - 1; x <= i + 1; x++) {
                            for (let y = j - 1; y <= j + 1; y++) {
                                if (x >= 0 && x < this.rowsindex && y >= 0 && y < this.columnsindex && this.cells[x][y].value === this.boomValue) {
                                    count++;
                                }
                            }
                        }
                        this.cells[i][j].value = count;
                    }
                }
            }
        },
        getRandoms() {
            return parseInt(Math.random() * (this.start + 1 - this.end) + this.end);
        },
        getUniqueRandoms(randoms) {
            let random = this.getRandoms();
            if (randoms.indexOf(random) === -1) {
                randoms.push(random);
            } else {
                this.getUniqueRandoms(randoms);
            }
        },
        getRowIndexColumnIndex(index) {
            let rowIndex = parseInt(index / this.columnsindex);
            let columnIndex = index % this.columnsindex;
            return [rowIndex, columnIndex];
        },
        startTimer() {
            this.startTime = new Date().getTime();
            this.timer = setInterval(() => {
                this.costTime = this.getCostTime();
            }, 1000)
        },
        stopTimer() {
            clearInterval(this.timer);
        },
        resetTimer() {
            this.startTime = 0;
            this.costTime = '00:00:00';
        },
        getCostTime() {
            let now = new Date().getTime();
            let diff = parseInt((now - this.startTime) / 1000);
            let h = parseInt(diff / 3600);
            let hStr = h < 10 ? '0' + h : h;
            let m = parseInt((diff % 3600) / 60);
            let mStr = m < 10 ? '0' + m : m;
            let s = diff % 60;
            let sStr = s < 10 ? '0' + s : s;
            return hStr + ':' + mStr + ':' + sStr;
        }
    }
})

</script>

<style scoped>
* {
    font-size: 16px;
}

body {
    padding: 20px;
}

.container {
    background-color: #efefef;
    padding: 10px;
    display: flex;
}

.warper {
    padding: 1px;
    background-color: #cfcfcf;
    float: left;
}

.row {
    display: flex;
    flex-direction: row;
}

.cell {
    width: 30px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background-color: #dfdfdf;
    border: 2px solid #cfcfcf;
}

.cell:hover {
    border-color: rgb(250, 179, 112);
    background-color: rgb(231, 202, 164);
    cursor: pointer;
}

.board {
    width: 300px;
    margin-right: 20px;
    float: left;
    background-color: aliceblue;
}

.config-item {
    padding: 10px;
}

.config-item .btn {
    margin-right: 20px;
}

.cell.clicked-0 {
    background-color: #f7f7f7;
}

.cell.clicked-1 {
    background-color: #fff0f0;
}

.cell.clicked-2 {
    background-color: #ffdbdb;
}

.cell.clicked-3 {
    background-color: #ffc3c3;
}

.cell.clicked-4 {
    background-color: #ffa3a3;
}

.cell.clicked-5 {
    background-color: #ff9898;
    color: white;
}

.cell.clicked-6 {
    background-color: #ff6f6f;
    color: white;
}

.cell.clicked-7 {
    background-color: #ff5a5a;
    color: white;
}

.cell.clicked-8 {
    background-color: #ff2424;
    color: white;
}

.cell.boom {
    background-color: #ffffff;
    color: rgb(255, 0, 0);
    font-size: 22px;
}

.cell.flag {
    border-color: #fdafaf;
}
</style>