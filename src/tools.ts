import { sendData, queryKind } from "./dataType";
import { saveData } from "./shareData.js";


//儲存檔案間要傳遞的資料(例如:選中的卡牌)後，跳到下一頁
export function saveDataAndGoToNextPage(url: string, kind: queryKind, cards: number[] = [], fromPage: string = "") {
    saveData<sendData>({
        kind: kind,
        cards: cards,
        fromPage: fromPage,
    });

    window.location.href = url;
}


// 刪除 dom 元素
export function removeDom(id: string) {
    const dom = document.getElementById(id);
    if (dom) {
        dom.parentNode?.removeChild(dom);
    }
}


//讓 dom 元素看得見，一般而言，他原本可能預設是看不見的
export function setDomVisibleById(idName: string) {
    const dom = document.getElementById(idName);
    if (dom) {
        dom.style.visibility = "visible";
    }
}


//讓具有相同 className 的 dom 元素看得見
export function setDomVisibleByClass(className: string) {
    // 獲取所有具有相同 className 的元素
    //注意： 要搜尋的 className 須以 '.' 開頭的字串，ex: '.myClass'
    const matchElements = document.querySelectorAll(`.${className}`);

    // 遍歷每个元素，添加 visibility="visible" 的 css style
    matchElements.forEach(element => {
        (element as HTMLElement).style.visibility = "visible";
    });
}


//幫 dom 元素附加新的 css class 
function domAppendClass(id: string, newClassName: string) {
    const dom = document.getElementById(id);
    if (dom) {
        dom.classList.add(newClassName);
    } else {
        console.error(` id =${id} 的 dom 元素並不存在`);
    }
}


// 更改網頁標題--title 的內容
export function setWebPageTitle(titleString:string){
    // 獲取 <title> 元素，更改網頁標題
    const titleElement = document.querySelector('title');
    if (titleElement) {
        titleElement.textContent = titleString;
    }
}

