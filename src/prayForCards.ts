// 只保留最近5個數字，數字不重複
const maxN = 5;
let index = 0;

// 命定之數
let godNumberAry: number[] = [];


// 神啟數字，隨時在變 // 0 ~ 35
setInterval(() => {

    let rnd = 0;
    // 確保不重複
    do {
        rnd = Math.floor(Math.random() * 36);
    } while (rnd in godNumberAry);

    // 存入 godNumberAry
    godNumberAry[index++] = rnd;
    if (index === maxN) index = 0;


}, 37);



// 請神明挑 n 張卡片
export function prayForCards(n: number) {
    // 使用 slice() 方法取出前 n 個元素
    return godNumberAry.slice(0, n)
}


