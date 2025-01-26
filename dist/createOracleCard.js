import { LenoCards } from "./lenoCards.js";
// 用 div 元素創建精美的神諭卡牌
export function createOracleCard(index, parent) {
    const leno = LenoCards[index];
    const card = document.createElement("div");
    // 計算 <img src= "***"  要填入的檔案路徑及檔名
    // <div class="card_img"> <img src="../卡片檔/ai/bk_girl.png" alt="">  </div>                
    const imgName = `${formatNumberAsString(leno.id)}.png`;
    const imgSrc = `../cards/ai/${imgName}`;
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
function formatNumberAsString(num) {
    return num < 10 ? `0${num}` : `${num}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlT3JhY2xlQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVPcmFjbGVDYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxvQkFBb0I7QUFDcEIsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEtBQWEsRUFBRSxNQUFtQjtJQUMvRCxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUzQyxrQ0FBa0M7SUFDbEMsMEZBQTBGO0lBQzFGLE1BQU0sT0FBTyxHQUFFLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUU7SUFDdkQsTUFBTSxNQUFNLEdBQUMsZUFBZSxPQUFPLEVBQUUsQ0FBQztJQUd0QyxJQUFJLENBQUMsU0FBUyxHQUFHO3VCQUNFLElBQUksQ0FBQyxFQUFFO3dCQUNOLElBQUksQ0FBQyxNQUFNO3dCQUNYLElBQUksQ0FBQyxNQUFNOzBCQUNULElBQUksQ0FBQyxXQUFXO21DQUNQLE1BQU07Q0FDeEMsQ0FBQztJQUVFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUdELHVDQUF1QztBQUN2QyxTQUFTLG9CQUFvQixDQUFDLEdBQVc7SUFDckMsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQzNDLENBQUMifQ==