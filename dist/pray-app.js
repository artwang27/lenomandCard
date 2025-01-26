import { loadData } from "./shareData.js";
import { saveDataAndGoToNextPage, removeDom, setWebPageTitle } from "./tools.js";
import { prayForCards } from "./prayForCards.js";
function main() {
    const loadMyData = loadData();
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
    var _a;
    (_a = document.getElementById("hint-text")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        // 用亂數挑一張卡片
        const cards = prayForCards(1);
        saveDataAndGoToNextPage("showOracle.html", "是否", cards);
    });
}
function makeHtmlToday() {
    var _a;
    (_a = document.getElementById("hint-text")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        // 用亂數挑三張卡片
        const cards = prayForCards(3);
        saveDataAndGoToNextPage("showOracle.html", "今日", cards);
    });
}
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJheS1hcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcHJheS1hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUtqRCxTQUFTLElBQUk7SUFDVCxNQUFNLFVBQVUsR0FBRyxRQUFRLEVBQVksQ0FBQztJQUN4QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDaEMsT0FBTztJQUNYLENBQUM7SUFFRCxNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBRTdCLG9CQUFvQjtJQUNwQiwyQ0FBMkM7SUFDM0MsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUNYLEtBQUssSUFBSTtZQUNMLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQixlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0IsYUFBYSxFQUFFLENBQUM7WUFDaEIsTUFBTTtRQUVWLEtBQUssSUFBSTtZQUNMLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQixlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUIsYUFBYSxFQUFFLENBQUM7WUFDaEIsTUFBTTtJQUNkLENBQUM7QUFFTCxDQUFDO0FBS0QsU0FBUyxhQUFhOztJQUVsQixNQUFBLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDakUsV0FBVztRQUNYLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5Qix1QkFBdUIsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDO0FBR0QsU0FBUyxhQUFhOztJQUVsQixNQUFBLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDakUsV0FBVztRQUNYLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5Qix1QkFBdUIsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDO0FBSUQsSUFBSSxFQUFFLENBQUMifQ==