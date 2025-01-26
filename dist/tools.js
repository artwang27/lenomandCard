import { saveData } from "./shareData.js";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdG9vbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzFDLDhCQUE4QjtBQUM5QixNQUFNLFVBQVUsdUJBQXVCLENBQUMsR0FBVyxFQUFFLElBQWUsRUFBRSxRQUFrQixFQUFFLEVBQUUsV0FBbUIsRUFBRTtJQUM3RyxRQUFRLENBQVc7UUFDZixJQUFJLEVBQUUsSUFBSTtRQUNWLEtBQUssRUFBRSxLQUFLO1FBQ1osUUFBUSxFQUFFLFFBQVE7S0FDckIsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQy9CLENBQUM7QUFHRCxZQUFZO0FBQ1osTUFBTSxVQUFVLFNBQVMsQ0FBQyxFQUFVOztJQUNoQyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDTixNQUFBLEdBQUcsQ0FBQyxVQUFVLDBDQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDO0FBQ0wsQ0FBQztBQUdELCtCQUErQjtBQUMvQixNQUFNLFVBQVUsaUJBQWlCLENBQUMsTUFBYztJQUM1QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDckMsQ0FBQztBQUNMLENBQUM7QUFHRCw2QkFBNkI7QUFDN0IsTUFBTSxVQUFVLG9CQUFvQixDQUFDLFNBQWlCO0lBQ2xELHlCQUF5QjtJQUN6QixnREFBZ0Q7SUFDaEQsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztJQUVqRSw2Q0FBNkM7SUFDN0MsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUMzQixPQUF1QixDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzFELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUdELHlCQUF5QjtBQUN6QixTQUFTLGNBQWMsQ0FBQyxFQUFVLEVBQUUsWUFBb0I7SUFDcEQsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEMsQ0FBQztTQUFNLENBQUM7UUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUM3QyxDQUFDO0FBQ0wsQ0FBQztBQUdELG9CQUFvQjtBQUNwQixNQUFNLFVBQVUsZUFBZSxDQUFDLFdBQWtCO0lBQzlDLHVCQUF1QjtJQUN2QixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELElBQUksWUFBWSxFQUFFLENBQUM7UUFDZixZQUFZLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUMzQyxDQUFDO0FBQ0wsQ0FBQyJ9