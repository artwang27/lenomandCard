import { saveDataAndGoToNextPage } from "./tools.js";

// 對 logo 進行淡入，透明度(opacity) 會產生漸變(transition)

// 使用時，請將 fadeInOpacity 加入
// <div id="logo-container" class="fadeInOpacity">  
function logoFadeIn(){
    const logoContainer=document.getElementById('logo-container')!;
 
    // 啟動淡入動畫，最終 opacity=1，代表完全顯現
    logoContainer.style.opacity = '1'; 
 }



// 對 logo 的背景顏色進行淡入，過渡時間為 sec 秒
// 背景由預設的銀色變為純黑
// 使用時，記得加入 fadeBackgroundColor 類別 
// <div id="logo-container" class="fadeBackgroundColor"></div> 

function logoFadeInBackgroundColor(sec:number){
    const logoContainer=document.getElementById('logo-container')!;
    logoContainer.style.transition = ` background-color ${sec}s ease-in `;
    logoContainer.style.backgroundColor="black";
 }



// 延遲 sec 秒後，跳到下一頁
function waitToNextPage(sec:number ,nextHtml:string){
    setTimeout(() => {
        // location.href=nextHtml
        saveDataAndGoToNextPage(nextHtml,"亞瑟王",[],'Arthur.html');
    }, sec*1000);  
}



const sec=3;
const pageHtml="../02-game/main.html";

window.onload=function(){

    // logoFadeIn();
    logoFadeInBackgroundColor(sec);

    waitToNextPage(sec+2, pageHtml);
    
};





