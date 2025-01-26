import { LenoCards } from "./lenoCards.js";
// 用來存放所有卡牌的陣列，洗牌會用到
let allCards = [];
// 用來存放選中的卡牌的陣列
let choosedCards = [];
//供外部取得，被選中卡片的 index 
export function getChoosedCards() {
    return choosedCards;
}
// 用 div 元素建立簡單卡牌
// 參數 faceOn 用來決定卡片是否可以看到牌面
// 簡單卡牌只有：正反面face，卡牌數字，卡牌中文名
export function createSimpleCard(index, parent, faceOn) {
    const leno = LenoCards[index];
    const card = document.createElement("div");
    const whichFace = faceOn ? "cardFaceOn" : "cardFaceOff";
    card.classList.add("card");
    card.classList.add(whichFace);
    card.innerHTML = `
        <div>
            <div class="face">
                <div class="card_num"> ${leno.id} </div>
                <div class="card_nameZh"> ${leno.nameZh} </div>
            </div>
        </div> 
    `;
    parent.appendChild(card);
    return card;
}
// 建立36張卡牌
// 當【占卜】時，卡面朝下： faceOn: false
// 當【學習】時，卡面朝上： faceOn: true
export function createAllSimpleCards(faceOn) {
    // 清空 choosedCards
    choosedCards = [];
    const container = document.getElementById("container");
    for (let index = 0; index < 36; index++) {
        const card = createSimpleCard(index, container, faceOn);
        allCards.push(card);
        card.addEventListener("click", () => {
            // 如果已經選中，就不再選中
            if (!card.classList.contains('selected')) {
                card.classList.add('selected');
            }
            putCardToChoosedArea(index);
        });
    }
}
// 洗牌
export function shuffleCards() {
    allCards.forEach(card => {
        card.style.order = `${Math.floor(Math.random() * 100)}`;
    });
    // 清空 choosedCards
    choosedCards = [];
}
// 將選中的卡牌放到排堆 choosedArea
function putCardToChoosedArea(index) {
    const choosedArea = document.getElementById("choosedArea");
    choosedCards.push(index);
    // 複製一張新的，放到選中的排堆裡，且牌面要打開(true)
    createSimpleCard(index, choosedArea, true);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRTaW1wbGVDYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0U2ltcGxlQ2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0Msb0JBQW9CO0FBQ3BCLElBQUksUUFBUSxHQUFrQixFQUFFLENBQUM7QUFFakMsZUFBZTtBQUNmLElBQUksWUFBWSxHQUFhLEVBQUUsQ0FBQztBQUVoQyxxQkFBcUI7QUFDckIsTUFBTSxVQUFVLGVBQWU7SUFDM0IsT0FBTyxZQUFZLENBQUM7QUFDeEIsQ0FBQztBQUdELGlCQUFpQjtBQUNqQiwyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxLQUFhLEVBQUUsTUFBbUIsRUFBRSxNQUFjO0lBQy9FLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFFeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFOUIsSUFBSSxDQUFDLFNBQVMsR0FBRTs7O3lDQUdxQixJQUFJLENBQUMsRUFBRTs0Q0FDSixJQUFJLENBQUMsTUFBTTs7O0tBR2xELENBQUM7SUFJRixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFHRCxVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLDRCQUE0QjtBQUM1QixNQUFNLFVBQVUsb0JBQW9CLENBQUMsTUFBYztJQUMvQyxrQkFBa0I7SUFDbEIsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUVsQixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBRSxDQUFDO0lBRXhELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUN0QyxNQUFNLElBQUksR0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDaEMsZUFBZTtZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBRUQsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFHUCxDQUFDO0FBQ0wsQ0FBQztBQUVELEtBQUs7QUFDTCxNQUFNLFVBQVUsWUFBWTtJQUN4QixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUM1RCxDQUFDLENBQUMsQ0FBQztJQUVILGtCQUFrQjtJQUNsQixZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLENBQUM7QUFHRCx5QkFBeUI7QUFDekIsU0FBUyxvQkFBb0IsQ0FBQyxLQUFhO0lBQ3ZDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFFLENBQUM7SUFDNUQsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QiwrQkFBK0I7SUFDL0IsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMvQyxDQUFDIn0=