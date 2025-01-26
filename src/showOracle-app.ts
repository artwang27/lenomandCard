import { sendData } from "./dataType.js";
import { loadData } from "./shareData.js";
import { createOracleCard } from "./createOracleCard.js";
import { removeDom, setWebPageTitle } from "./tools.js";


function createDom(domId: string, parent: HTMLElement): HTMLElement {
    const dom = document.createElement("div");
    dom.id = domId;
    parent.appendChild(dom);
    return dom;
}

// **********************************************************
// 設定標題，及網頁標題
function setPageTitle(title: string) {
    const dom = document.getElementById("title")!;
    dom.innerHTML = title;

    setWebPageTitle(title);
}


//在網頁上建立選中的漂亮卡牌
// cards :被選中的卡牌編號
// extraMessage: 提供額外訊息，表明這張卡是代表現在、過去、未來 
function makeBeautyCards(cards: number[], extraMessage: string[]) {
    const parent = document.getElementById("cardsArea")!;

    for (let i = 0; i < cards.length; i++) {
        //卡牌的額外訊息，ex:當占卜未來時，提示第一張代表什麼意思，第二張，第三張...
        if (i < extraMessage.length) {
            createCardExtraMessage(extraMessage[i]);
        }
        createOracleCard(cards[i], parent);
    }
}


//建立卡牌的額外訊息
function createCardExtraMessage(msg: string) {
    const parent = document.getElementById("cardsArea")!;
    const dom = createDom(msg, parent);
    dom.innerText = msg;
    dom.classList.add("extraMessage");
}



// **********************************************************


//【占卜】畫面
function makeHtmlFuture(choosedCards: number[]) {
    const title = "雷諾曼神諭";
    setPageTitle(title);
    makeBeautyCards(choosedCards, []);
}

//【學習】畫面
function makeHtmlLearning(choosedCards: number[]) {
    const title = "學習雷諾曼";
    setPageTitle(title);
    makeBeautyCards(choosedCards, []);
}



function makeHtmlYesNo(cards: number[]) {
    setPageTitle("Yes | No ?");
    makeBeautyCards(cards, ["占問結果"]);
    removeDom("backPage");
}


function makeHtmlToday(cards: number[]) {
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
    const loadMyData = loadData<sendData>();
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
