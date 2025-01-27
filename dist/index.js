import { saveDataAndGoToNextPage } from "./tools.js";
// 對 logo 進行淡入，透明度(opacity) 會產生漸變(transition)
// 使用時，請將 fadeInOpacity 加入
// <div id="logo-container" class="fadeInOpacity">  
function logoFadeIn() {
    const logoContainer = document.getElementById('logo-container');
    // 啟動淡入動畫，最終 opacity=1，代表完全顯現
    logoContainer.style.opacity = '1';
}
// 對 logo 的背景顏色進行淡入，過渡時間為 sec 秒
// 背景由預設的銀色變為純黑
// 使用時，記得加入 fadeBackgroundColor 類別 
// <div id="logo-container" class="fadeBackgroundColor"></div> 
function logoFadeInBackgroundColor(sec) {
    const logoContainer = document.getElementById('logo-container');
    logoContainer.style.transition = ` background-color ${sec}s ease-in `;
    logoContainer.style.backgroundColor = "black";
}
// 延遲 sec 秒後，跳到下一頁
function waitToNextPage(sec, nextHtml) {
    setTimeout(() => {
        // location.href=nextHtml
        saveDataAndGoToNextPage(nextHtml, "亞瑟王", [], 'Arthur.html');
    }, sec * 1000);
}
const sec = 3;
const pageHtml = "../02-game/main.html";
window.onload = function () {
    // logoFadeIn();
    logoFadeInBackgroundColor(sec);
    waitToNextPage(sec + 2, pageHtml);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXJELDZDQUE2QztBQUU3QywwQkFBMEI7QUFDMUIsb0RBQW9EO0FBQ3BELFNBQVMsVUFBVTtJQUNmLE1BQU0sYUFBYSxHQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUUsQ0FBQztJQUUvRCw2QkFBNkI7SUFDN0IsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBQ3JDLENBQUM7QUFJRiwrQkFBK0I7QUFDL0IsZUFBZTtBQUNmLG1DQUFtQztBQUNuQywrREFBK0Q7QUFFL0QsU0FBUyx5QkFBeUIsQ0FBQyxHQUFVO0lBQ3pDLE1BQU0sYUFBYSxHQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUUsQ0FBQztJQUMvRCxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxxQkFBcUIsR0FBRyxZQUFZLENBQUM7SUFDdEUsYUFBYSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUMsT0FBTyxDQUFDO0FBQy9DLENBQUM7QUFJRixrQkFBa0I7QUFDbEIsU0FBUyxjQUFjLENBQUMsR0FBVSxFQUFFLFFBQWU7SUFDL0MsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNaLHlCQUF5QjtRQUN6Qix1QkFBdUIsQ0FBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBQyxhQUFhLENBQUMsQ0FBQztJQUM3RCxDQUFDLEVBQUUsR0FBRyxHQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pCLENBQUM7QUFJRCxNQUFNLEdBQUcsR0FBQyxDQUFDLENBQUM7QUFDWixNQUFNLFFBQVEsR0FBQyxzQkFBc0IsQ0FBQztBQUV0QyxNQUFNLENBQUMsTUFBTSxHQUFDO0lBRVYsZ0JBQWdCO0lBQ2hCLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRS9CLGNBQWMsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRXBDLENBQUMsQ0FBQyJ9