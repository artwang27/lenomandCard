import { sendData } from "./dataType";
import { loadData } from "./shareData.js";
import { saveDataAndGoToNextPage, removeDom, setWebPageTitle } from "./tools.js";
import { prayForCards } from "./prayForCards.js";




function main() {
    const loadMyData = loadData<sendData>();
    if (!loadMyData) {
        console.error('sendData沒有傳遞資料');
        return;
    }

    const kind = loadMyData.kind;

    // 當選擇了某一個網頁，那就刪除另一個
    // 注意：要先刪除另一個網頁，因為他們共用了 hint-text 的 dom id 
    switch (kind) {
        case "今日":
            removeDom("yesNo"); 
            setWebPageTitle("雷諾曼【今日運勢】");
            makeHtmlToday();
            break;

        case "是否":
            removeDom("today");            
            setWebPageTitle("雷諾曼【是 | 否】");
            makeHtmlYesNo();
            break;
    }

}




function makeHtmlYesNo() {

    document.getElementById("hint-text")?.addEventListener("click", () => {
        // 用亂數挑一張卡片
        const cards = prayForCards(1);
        saveDataAndGoToNextPage("showOracle.html", "是否", cards);
    });

}


function makeHtmlToday() {

    document.getElementById("hint-text")?.addEventListener("click", () => {
        // 用亂數挑三張卡片
        const cards = prayForCards(3);
        saveDataAndGoToNextPage("showOracle.html", "今日", cards);
    });

}



main();


