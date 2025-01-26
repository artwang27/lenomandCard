import { queryKind, sendData } from "./dataType.js";
import { createAllSimpleCards, getChoosedCards, shuffleCards } from "./creatSimpleCard.js";
import { loadData } from "./shareData.js";
import { saveDataAndGoToNextPage, setWebPageTitle } from "./tools.js";

//決定要呈現【占卜】或是【學習】的畫面
let kind: queryKind;

function active() {
    let myLoadData = loadData<sendData>();
    if (!myLoadData) return;

    kind = myLoadData.kind;

    if (kind === "占卜") {
        makeHtml("雷諾曼【占卜】", 'Future', "點選您要抽的卡牌", false);
        shuffleCards();
    }

    if (kind === "學習") {
        makeHtml("雷諾曼【學習】", 'Learning', "點選您要學習的卡牌", true);
    }

}


// 調整網頁內容，讓他符合【占卜】或是【學習】的頁面效果
//     htmlTitleString: 網頁標題 ，顯示目前是【學習雷諾曼】或者【雷諾曼占卜】，
//     title2Str: 提示要抽幾張牌
//     faceOnOff: 牌面是否翻開

function makeHtml(htmlTitleString: string, title1Str: string, title2Str: string, faceOnOff: boolean) {
    // 更改網頁標題
    setWebPageTitle(htmlTitleString);

    //更改 title 內的兩個欄位
    const title1 = document.getElementById("title1")!;
    title1.innerText = title1Str;

    const title2 = document.getElementById("title2")!;
    title2.innerText = title2Str;


    //創建卡片
    createAllSimpleCards(faceOnOff);

    //儲存選取結果，跳到下一頁
    makeNextPage();
}


//檢查是否能跳到下一頁
function makeNextPage() {

    document.getElementById("nextPage")?.addEventListener("click", () => {

        // 如果尚未選擇任何卡片
        if (getChoosedCards().length === 0) {
            remindChooseCards();
        }
        else {
            //傳遞檔案間的參數，跳到 showOracle，觀看點選結果
            saveDataAndGoToNextPage("showOracle.html", kind, getChoosedCards(), 'selectCards.html');
        }

    });
}


//提醒玩家至少點選一張卡
function remindChooseCards() {
    const errBtutton = document.getElementById("errorMessageButton");
    if (errBtutton) {
        //顯示被隱藏的錯誤按鈕
        errBtutton.style.visibility = "visible";

        errBtutton.addEventListener("click", () => {
            errBtutton.style.visibility = "hidden";
        })
    }
}


active();

