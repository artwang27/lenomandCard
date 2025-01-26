export type Card = {
    id: number;
    nameZh: string;
    nameEn: string;
    description: string;
};


//要占問哪一種情況
export type queryKind= "占卜" | "學習" | "今日" | "是否";

//在檔案(html檔)之間資料傳遞
export interface sendData {
    // 要執行哪一種任務? "占卜" | "學習" | "今日" | "是否";
    kind: queryKind;    

    // 被選中的卡
    cards: number[];
    // 資料是從哪個網頁傳來的
    fromPage:string;
} 



