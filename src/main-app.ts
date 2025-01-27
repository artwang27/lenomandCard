import { saveDataAndGoToNextPage,checkLicense } from "./tools.js";


function active(){
    if(!checkLicense()) return;

    document.getElementById("today")?.addEventListener("click", ()=>{
        saveDataAndGoToNextPage("pray.html","今日");
    });

    document.getElementById("yesNo")?.addEventListener("click", ()=>{
        saveDataAndGoToNextPage("pray.html","是否");
    });

    document.getElementById("future")?.addEventListener("click", ()=>{
        saveDataAndGoToNextPage("selectCards.html","占卜");
    });

    document.getElementById("learning")?.addEventListener("click", ()=>{
        saveDataAndGoToNextPage("selectCards.html","學習");
    });

}
 

active();