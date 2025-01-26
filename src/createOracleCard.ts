import { LenoCards } from "./lenoCards.js";

// 用 div 元素創建精美的神諭卡牌
export function createOracleCard(index: number, parent: HTMLElement): HTMLElement {
    const leno = LenoCards[index];
    const card = document.createElement("div");

    // 計算 <img src= "***"  要填入的檔案路徑及檔名
    // <div class="card_img"> <img src="../卡片檔/ai/bk_girl.png" alt="">  </div>                
    const imgName= `${formatNumberAsString(leno.id)}.png` ;
    const imgSrc=`../cards/ai/${imgName}`;
    

    card.innerHTML = `
<div class="card_id">${leno.id}</div>
<div class="card_Zh"> ${leno.nameZh} </div>
<div class="card_En"> ${leno.nameEn} </div>
<div class="card_desc"> ${leno.description} </div>
<div class="card_img"> <img src="${imgSrc}" alt="">  </div>            
`;

    card.classList.add("card");
    parent.appendChild(card);
    return card;
}


//將數字型態的 index 轉為字串， '01', '02'...,'36'
function formatNumberAsString(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
}
