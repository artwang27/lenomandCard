import { createAllSimpleCards, getChoosedCards, shuffleCards } from "./creatSimpleCard.js";
import { loadData } from "./shareData.js";
import { saveDataAndGoToNextPage, setWebPageTitle } from "./tools.js";
//決定要呈現【占卜】或是【學習】的畫面
let kind;
function active() {
    let myLoadData = loadData();
    if (!myLoadData)
        return;
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
function makeHtml(htmlTitleString, title1Str, title2Str, faceOnOff) {
    // 更改網頁標題
    setWebPageTitle(htmlTitleString);
    //更改 title 內的兩個欄位
    const title1 = document.getElementById("title1");
    title1.innerText = title1Str;
    const title2 = document.getElementById("title2");
    title2.innerText = title2Str;
    //創建卡片
    createAllSimpleCards(faceOnOff);
    //儲存選取結果，跳到下一頁
    makeNextPage();
}
//檢查是否能跳到下一頁
function makeNextPage() {
    var _a;
    (_a = document.getElementById("nextPage")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
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
        });
    }
}
active();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Q2FyZHMtYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlbGVjdENhcmRzLWFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXRFLG9CQUFvQjtBQUNwQixJQUFJLElBQWUsQ0FBQztBQUVwQixTQUFTLE1BQU07SUFDWCxJQUFJLFVBQVUsR0FBRyxRQUFRLEVBQVksQ0FBQztJQUN0QyxJQUFJLENBQUMsVUFBVTtRQUFFLE9BQU87SUFFeEIsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFFdkIsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDaEIsUUFBUSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pELFlBQVksRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNoQixRQUFRLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztBQUVMLENBQUM7QUFHRCw2QkFBNkI7QUFDN0Isb0RBQW9EO0FBQ3BELHlCQUF5QjtBQUN6Qix3QkFBd0I7QUFFeEIsU0FBUyxRQUFRLENBQUMsZUFBdUIsRUFBRSxTQUFpQixFQUFFLFNBQWlCLEVBQUUsU0FBa0I7SUFDL0YsU0FBUztJQUNULGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUVqQyxpQkFBaUI7SUFDakIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUUsQ0FBQztJQUNsRCxNQUFNLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUU3QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBRSxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBRzdCLE1BQU07SUFDTixvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVoQyxjQUFjO0lBQ2QsWUFBWSxFQUFFLENBQUM7QUFDbkIsQ0FBQztBQUdELFlBQVk7QUFDWixTQUFTLFlBQVk7O0lBRWpCLE1BQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsMENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUVoRSxhQUFhO1FBQ2IsSUFBSSxlQUFlLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDakMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4QixDQUFDO2FBQ0ksQ0FBQztZQUNGLCtCQUErQjtZQUMvQix1QkFBdUIsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUM1RixDQUFDO0lBRUwsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBR0QsYUFBYTtBQUNiLFNBQVMsaUJBQWlCO0lBQ3RCLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNqRSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ2IsWUFBWTtRQUNaLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUV4QyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUN0QyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0FBQ0wsQ0FBQztBQUdELE1BQU0sRUFBRSxDQUFDIn0=