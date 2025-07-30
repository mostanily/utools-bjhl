<template>
    <div id="headBox">
        <h1 id="firstHeading" class="firstHeading" lang="zh-Hans-CN" style="font-size: 20px;">
            <router-link :to="{ name: 'index' }" title="首页" style="color: #333;">首页</router-link> &gt; 连棋<span
                id="location"></span>
        </h1>
    </div>
    <hr>
    <div class="container">
        <div class="status">{{ status }}</div>
        <div style="float: left;margin: 0 20px;">
            <form>
                <label for="rowsindex">难度：</label>
                <select v-model="currentLevel" @change="handleLevelChange" style="padding: 5px 10px;height: 35px;">
                    <option v-for="(level, index) in gameLevel" :key="index" :value="level">{{ level.name }}</option>
                </select>
            </form>
            <p style="font-size: 12px;">默认玩家先手，当前胜利条件，需要“{{ LINE_COUNT }}”个棋子相连。</p>
            <button @click="reset">重新开始</button>
        </div>
        <div style="float: left;">
            <div class="board">
                <div v-for="(row, i) in board" :key="i" class="row">
                    <div v-for="(cell, j) in row" :key="j" class="cell" @click="handleClick(i, j)">
                        <div :class="{ 'piece': true, 'black': cell === 1, 'white': cell === 2, 'last-move': lastMove?.row === i && lastMove?.col === j }"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, computed } from 'vue';
const BOARD_SIZE = 21;
const HUMAN = 1;
const AI = 2;
const gameLevel = [
    { "name": "五子棋", "line_count": 5 },
    { "name": "七子棋", "line_count": 7 },
    { "name": "九子棋", "line_count": 9 },
];
const currentLevel = ref({ "name": "五子棋", "line_count": 5 });
const LINE_COUNT = ref(5);//当前游戏需要连接的棋子数量

// 初始化棋盘
const board = reactive(
    Array.from({ length: BOARD_SIZE }, () =>
        Array.from({ length: BOARD_SIZE }, () => 0)
    )
);

const gameOver = ref(false);
const winner = ref(null)
const winnerName = ref("玩家")

// 添加最后落子位置跟踪
const lastMove = ref(null);

// 评估函数参数
const patterns = {
    FIVE: 100000,
    LIVE_FOUR: 10001,//活四
    RUSH_FOUR: 10000,//冲四
    LIVE_THREE: 9999,//活三
    SLEEP_THREE: 1000,
    LIVE_TWO: 100,
    SLEEP_TWO: 10
};

// 游戏状态显示
const status = computed(() => {
    if (gameOver.value) return `游戏结束，${winnerName.value}胜利！`;
    return '轮到你了';
});

//音效设置
// 优先级控制系统（防止音效重叠）
let currentPriority = 0;
// 音频对象初始化
const moveSound = new Audio('img/sounds/click.wav');//玩家落子声音
const aiSound = new Audio('img/sounds/click_ai.wav');//ai落子声音
const winSound = new Audio('img/sounds/win.wav');//玩家胜利声音
const aiWinSound = new Audio('img/sounds/loser.wav');//ai胜利声音（玩家失败声音）

// 预加载音效
onMounted(() => {
    [moveSound, aiSound, winSound, aiWinSound].forEach(sound => {
        sound.preload = 'auto';
        sound.volume = 0.5; // 默认音量
    });
});

// 胜利状态监听
watch(winner, (newVal) => {
    if (newVal === HUMAN) {
        winnerName.value = "玩家"
        playVictorySound();
    }
    if (newVal === AI) {
        winnerName.value = "AI"
        playAiVictorySound()
    }
});

// 专用胜利音效播放方法
const playVictorySound = async () => {
    try {
        winSound.currentTime = 0;
        await winSound.play();
    } catch (error) {
        console.log('胜利音效播放被阻止');
    }
};

const playAiVictorySound = async () => {
    try {
        aiWinSound.currentTime = 0;
        await aiWinSound.play();
    } catch (error) {
        console.log('胜利音效播放被阻止');
    }
};

const playSound = async (sound, priority) => {
    if (priority >= currentPriority) {
        currentPriority = priority;
        try {
            sound.currentTime = 0;
            if (sound.paused) {
                await sound.play();
            }
        } catch (e) {
            console.warn('音效播放失败:', e);
        } finally {
            currentPriority = 0;
        }
    }
};

// 玩家点击处理
const handleClick = async (row, col) => {
    if (!gameOver.value && board[row][col] === 0) {
        placeStone(row, col, HUMAN);
        // 播放玩家落子音效
        await playSound(moveSound, 1)
        let res = checkWin(row, col, HUMAN)
        if (res) {
            winner.value = HUMAN
        } else {
            //await aiMove()
            setTimeout(aiMove, 500);
        }
    }
};

// AI行动
const aiMove = async () => {
    const bestMove = findBestMove();
    if (bestMove) {
        placeStone(bestMove.row, bestMove.col, AI);
        await playSound(aiSound, 2);
        let res = checkWin(bestMove.row, bestMove.col, AI);
        if (res) {
            winner.value = AI
            //setTimeout(reset, 300);
        }
    }
};

// 寻找最佳落子
const findBestMove = () => {
    let maxScore = -Infinity;
    let bestMoves = [];

    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (board[i][j] === 0) {
                const score = evaluatePosition(i, j, AI) * 0.8 + evaluatePosition(i, j, HUMAN);
                if (score > maxScore) {
                    maxScore = score;
                    bestMoves = [{ row: i, col: j }];
                } else if (score === maxScore) {
                    bestMoves.push({ row: i, col: j });
                }
            }
        }
    }

    return bestMoves.length > 0
        ? bestMoves[Math.floor(Math.random() * bestMoves.length)]
        : null;
};

// 位置评估函数
const evaluatePosition = (row, col, player) => {
    let score = 0;
    const directions = [
        [[0, 1], [0, -1]],   // 水平
        [[1, 0], [-1, 0]],   // 垂直
        [[1, 1], [-1, -1]],  // 主对角线
        [[1, -1], [-1, 1]]   // 副对角线
    ];

    directions.forEach(dir => {
        let count = 1;
        let block = 0;
        let space = 0;

        dir.forEach(([dx, dy]) => {
            let step = 1;
            while (true) {
                const x = row + dx * step;
                const y = col + dy * step;
                if (x < 0 || x >= BOARD_SIZE || y < 0 || y >= BOARD_SIZE) {
                    block++;
                    break;
                }
                const cell = board[x][y];
                if (cell === (player === AI ? HUMAN : AI)) {
                    block++;
                    break;
                } else if (cell === 0) {
                    if (space === 0 && step === 1) space++;
                    else break;
                } else {
                    count++;
                    if (space > 0) space++;
                }
                step++;
            }
        });

        score += evaluatePattern(count, block, space);
    });

    return score;
};

// 棋型评估
const evaluatePattern = (count, block, space) => {
    if (count >= LINE_COUNT.value) return patterns.FIVE;
    if (block === 0) {
        if (count === LINE_COUNT.value - 1) return patterns.LIVE_FOUR;
        if (count === LINE_COUNT.value - 2 && space < LINE_COUNT.value - 3) return patterns.LIVE_THREE;
        if (count === LINE_COUNT.value - 3 && space < LINE_COUNT.value - 3) return patterns.LIVE_TWO;
    }
    if (block === 1) {
        if (count === LINE_COUNT.value - 1) return patterns.RUSH_FOUR;
        if (count === LINE_COUNT.value - 2 && space < LINE_COUNT.value - 3) return patterns.SLEEP_THREE;
        if (count === LINE_COUNT.value - 3 && space < LINE_COUNT.value - 3) return patterns.SLEEP_TWO;
    }
    return 0;
};

// 落子并检查胜利
const placeStone = (row, col, player) => {
    board[row][col] = player;
    lastMove.value = { row, col }; // 记录最后落子位置
};

const checkWin = (row, col, player) => {
    const directions = [
        [[0, 1], [0, -1]],   // 水平
        [[1, 0], [-1, 0]],   // 垂直
        [[1, 1], [-1, -1]],  // 主对角线
        [[1, -1], [-1, 1]]   // 副对角线
    ];

    for (const dir of directions) {
        let count = 1;
        for (const [dx, dy] of dir) {
            let x = row + dx;
            let y = col + dy;
            while (
                x >= 0 && x < BOARD_SIZE &&
                y >= 0 && y < BOARD_SIZE &&
                board[x][y] === player
            ) {
                count++;
                x += dx;
                y += dy;
            }
        }
        if (count >= LINE_COUNT.value) {
            gameOver.value = true;
            return true;
        }
    }
    return false;
};

const reset = () => {
    board.forEach(row => row.fill(0));
    winner.value = null;
    gameOver.value = false;
    winnerName.value = "";
};

const handleLevelChange = () => {
    board.forEach(row => row.fill(0));
    winner.value = null;
    gameOver.value = false;
    winnerName.value = "";
    LINE_COUNT.value = currentLevel.value.line_count
}

</script>

<style scoped>
.container {
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.status {
    text-align: center;
    margin: 20px;
    font-size: 24px;
}

.board {
    border: 2px solid #333;
    background: #f0d9a4;
}

.row {
    display: flex;
}

.cell {
    width: 30px;
    height: 30px;
    border: 1px solid #999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.piece {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: all 0.3s;
}

.black {
    background: #000;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.white {
    background: #fff;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

button {
    margin-top: 20px;
    padding: 10px 20px;
}

.piece.last-move {
    box-shadow: 0 0 0 2px red;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 2px red; }
    50% { box-shadow: 0 0 0 4px rgba(255, 0, 0, 0.5); }
    100% { box-shadow: 0 0 0 2px red; }
}
</style>