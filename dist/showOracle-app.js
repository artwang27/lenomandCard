import { loadData } from "./shareData.js";
import { createOracleCard } from "./createOracleCard.js";
import { removeDom, setWebPageTitle } from "./tools.js";
function createDom(domId, parent) {
    const dom = document.createElement("div");
    dom.id = domId;
    parent.appendChild(dom);
    return dom;
}
// **********************************************************
// 設定標題，及網頁標題
function setPageTitle(title) {
    const dom = document.getElementById("title");
    dom.innerHTML = title;
    setWebPageTitle(title);
}
//在網頁上建立選中的漂亮卡牌
// cards :被選中的卡牌編號
// extraMessage: 提供額外訊息，表明這張卡是代表現在、過去、未來 
function makeBeautyCards(cards, extraMessage) {
    const parent = document.getElementById("cardsArea");
    for (let i = 0; i < cards.length; i++) {
        //卡牌的額外訊息，ex:當占卜未來時，提示第一張代表什麼意思，第二張，第三張...
        if (i < extraMessage.length) {
            createCardExtraMessage(extraMessage[i]);
        }
        createOracleCard(cards[i], parent);
    }
}
//建立卡牌的額外訊息
function createCardExtraMessage(msg) {
    const parent = document.getElementById("cardsArea");
    const dom = createDom(msg, parent);
    dom.innerText = msg;
    dom.classList.add("extraMessage");
}
// **********************************************************
//【占卜】畫面
function makeHtmlFuture(choosedCards) {
    const title = "雷諾曼神諭";
    setPageTitle(title);
    makeBeautyCards(choosedCards, []);
}
//【學習】畫面
function makeHtmlLearning(choosedCards) {
    const title = "學習雷諾曼";
    setPageTitle(title);
    makeBeautyCards(choosedCards, []);
}
function makeHtmlYesNo(cards) {
    setPageTitle("Yes | No ?");
    makeBeautyCards(cards, ["占問結果"]);
    removeDom("backPage");
}
function makeHtmlToday(cards) {
    setPageTitle("今日運勢");
    const msgAry = [
        "當下的情況",
        "出現的挑戰或機會",
        "最終的結果"
    ];
    makeBeautyCards(cards, msgAry);
    removeDom("backPage");
}
function main() {
    const loadMyData = loadData();
    if (!loadMyData) {
        console.error('sendData沒有傳遞資料');
        return;
    }
    const kind = loadMyData.kind;
    const choosedCards = loadMyData.cards;
    switch (kind) {
        case "占卜":
            makeHtmlFuture(choosedCards);
            break;
        case "學習":
            makeHtmlLearning(choosedCards);
            break;
        case "今日":
            makeHtmlToday(choosedCards);
            break;
        case "是否":
            makeHtmlYesNo(choosedCards);
            break;
    }
}
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd09yYWNsZS1hcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2hvd09yYWNsZS1hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR3hELFNBQVMsU0FBUyxDQUFDLEtBQWEsRUFBRSxNQUFtQjtJQUNqRCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQ2YsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFFRCw2REFBNkQ7QUFDN0QsYUFBYTtBQUNiLFNBQVMsWUFBWSxDQUFDLEtBQWE7SUFDL0IsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUUsQ0FBQztJQUM5QyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUV0QixlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUdELGVBQWU7QUFDZixrQkFBa0I7QUFDbEIseUNBQXlDO0FBQ3pDLFNBQVMsZUFBZSxDQUFDLEtBQWUsRUFBRSxZQUFzQjtJQUM1RCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBRSxDQUFDO0lBRXJELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDcEMsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFN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