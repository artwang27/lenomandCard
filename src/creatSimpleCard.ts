import { LenoCards } from "./lenoCards.js";

// 用來存放所有卡牌的陣列，洗牌會用到
let allCards: HTMLElement[] = [];

// 用來存放選中的卡牌的陣列
let choosedCards: number[] = [];

//供外部取得，被選中卡片的 index 
export function getChoosedCards() {
    return choosedCards;
}


// 用 div 元素建立簡單卡牌
// 參數 faceOn 用來決定卡片是否可以看到牌面
// 簡單卡牌只有：正反面face，卡牌數字，卡牌中文名
export function createSimpleCard(index: number, parent: HTMLElement, faceOn:boolean): HTMLElement {
    const leno = LenoCards[index];
    const card = document.createElement("div");
    const whichFace = faceOn ? "cardFaceOn" : "cardFaceOff";

    card.classList.add("card");
    card.classList.add(whichFace);

    card.innerHTML =`
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
export function createAllSimpleCards(faceOn:boolean) {
    // 清空 choosedCards
    choosedCards = [];

    const container = document.getElementById("container")!;

    for (let index = 0; index < 36; index++) {
        const card=createSimpleCard(index, container,faceOn);
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
function putCardToChoosedArea(index: number) {
    const choosedArea = document.getElementById("choosedArea")!;
    choosedCards.push(index);
    // 複製一張新的，放到選中的排堆裡，且牌面要打開(true)
    createSimpleCard(index, choosedArea, true);
}

