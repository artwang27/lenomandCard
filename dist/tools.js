import { saveData, loadData } from "./shareData.js";
//儲存檔案間要傳遞的資料(例如:選中的卡牌)後，跳到下一頁
export function saveDataAndGoToNextPage(url, kind, cards = [], fromPage = "") {
    saveData({
        kind: kind,
        cards: cards,
        fromPage: fromPage,
    });
    window.location.href = url;
}
// 刪除 dom 元素
export function removeDom(id) {
    var _a;
    const dom = document.getElementById(id);
    if (dom) {
        (_a = dom.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(dom);
    }
}
//讓 dom 元素看得見，一般而言，他原本可能預設是看不見的
export function setDomVisibleById(idName) {
    const dom = document.getElementById(idName);
    if (dom) {
        dom.style.visibility = "visible";
    }
}
//讓具有相同 className 的 dom 元素看得見
export function setDomVisibleByClass(className) {
    // 獲取所有具有相同 className 的元素
    //注意： 要搜尋的 className 須以 '.' 開頭的字串，ex: '.myClass'
    const matchElements = document.querySelectorAll(`.${className}`);
    // 遍歷每个元素，添加 visibility="visible" 的 css style
    matchElements.forEach(element => {
        element.style.visibility = "visible";
    });
}
//幫 dom 元素附加新的 css class 
function domAppendClass(id, newClassName) {
    const dom = document.getElementById(id);
    if (dom) {
        dom.classList.add(newClassName);
    }
    else {
        console.error(` id =${id} 的 dom 元素並不存在`);
    }
}
// 更改網頁標題--title 的內容
export function setWebPageTitle(titleString) {
    // 獲取 <title> 元素，更改網頁標題
    const titleElement = document.querySelector('title');
    if (titleElement) {
        titleElement.textContent = titleString;
    }
}
//檢查是否有 arthur 的授權
export function checkLicense() {
    const loadMyData = loadData();
    if (!loadMyData) {
        console.error('sendData沒有傳遞資料');
        return false;
    }
    if (loadMyData.fromPage !== 'Arthur.html') {
        return false;
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdG9vbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRCw4QkFBOEI7QUFDOUIsTUFBTSxVQUFVLHVCQUF1QixDQUFDLEdBQVcsRUFBRSxJQUFlLEVBQUUsUUFBa0IsRUFBRSxFQUFFLFdBQW1CLEVBQUU7SUFDN0csUUFBUSxDQUFXO1FBQ2YsSUFBSSxFQUFFLElBQUk7UUFDVixLQUFLLEVBQUUsS0FBSztRQUNaLFFBQVEsRUFBRSxRQUFRO0tBQ3JCLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUMvQixDQUFDO0FBR0QsWUFBWTtBQUNaLE1BQU0sVUFBVSxTQUFTLENBQUMsRUFBVTs7SUFDaEMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ04sTUFBQSxHQUFHLENBQUMsVUFBVSwwQ0FBRSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQztBQUNMLENBQUM7QUFHRCwrQkFBK0I7QUFDL0IsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE1BQWM7SUFDNUMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7QUFDTCxDQUFDO0FBR0QsNkJBQTZCO0FBQzdCLE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxTQUFpQjtJQUNsRCx5QkFBeUI7SUFDekIsZ0RBQWdEO0lBQ2hELE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFFakUsNkNBQTZDO0lBQzdDLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDM0IsT0FBdUIsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFHRCx5QkFBeUI7QUFDekIsU0FBUyxjQUFjLENBQUMsRUFBVSxFQUFFLFlBQW9CO0lBQ3BELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNOLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7U0FBTSxDQUFDO1FBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDN0MsQ0FBQztBQUNMLENBQUM7QUFHRCxvQkFBb0I7QUFDcEIsTUFBTSxVQUFVLGVBQWUsQ0FBQyxXQUFtQjtJQUMvQyx1QkFBdUI7SUFDdkIsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyRCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2YsWUFBWSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDM0MsQ0FBQztBQUNMLENBQUM7QUFHRCxrQkFBa0I7QUFDbEIsTUFBTSxVQUFVLFlBQVk7SUFDeEIsTUFBTSxVQUFVLEdBQUcsUUFBUSxFQUFZLENBQUM7SUFDeEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxJQUFJLFVBQVUsQ0FBQyxRQUFRLEtBQUssYUFBYSxFQUFFLENBQUM7UUFDeEMsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMifQ==