// 只保留最近5個數字，數字不重複
const maxN = 5;
let index = 0;
// 命定之數
let godNumberAry = [];
// 神啟數字，隨時在變 // 0 ~ 35
setInterval(() => {
    let rnd = 0;
    // 確保不重複
    do {
        rnd = Math.floor(Math.random() * 36);
    } while (godNumberAry.includes(rnd));
    // 存入 godNumberAry
    godNumberAry[index++] = rnd;
    if (index === maxN)
        index = 0;
}, 37);
// 請神明挑 n 張卡片
export function prayForCards(n) {
    // 使用 slice() 方法取出前 n 個元素
    return godNumberAry.slice(0, n);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJheUZvckNhcmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3ByYXlGb3JDYXJkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7QUFDbEIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBRWQsT0FBTztBQUNQLElBQUksWUFBWSxHQUFhLEVBQUUsQ0FBQztBQUdoQyxzQkFBc0I7QUFDdEIsV0FBVyxDQUFDLEdBQUcsRUFBRTtJQUViLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLFFBQVE7SUFDUixHQUFHLENBQUM7UUFDQSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxRQUFRLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUc7SUFFdEMsa0JBQWtCO0lBQ2xCLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM1QixJQUFJLEtBQUssS0FBSyxJQUFJO1FBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUdsQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFJUCxhQUFhO0FBQ2IsTUFBTSxVQUFVLFlBQVksQ0FBQyxDQUFTO0lBQ2xDLHlCQUF5QjtJQUN6QixPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ25DLENBQUMifQ==