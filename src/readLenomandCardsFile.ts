import { Card } from "./dataType.js";

//lenomand.txt 內容必須一筆佔一行，格式為：
// 01.	騎⼠ Rider ⾏動敏捷、衝動躁進的騎⼠，帶來新的⼈事物，即將到來的好消息。
// 02.	⿊桃花 Clover 代表⼀段感情關係，可能是好的也可能是不好的，但都是有關愛情的。

/*
使用正則表達式解析每行資料
    const match = line.match(/^(\d+)\.\s+(\S+)\s+(\S+)\s+([\s\S]*)$/
這個正則表達式的意思是：
    ^(\d+)\.：匹配以數字開頭的行。
    \s+：匹配空白字符。
    (\S+)：匹配非空白字符。
    ([\s\S]*)：匹配所有字符。
    $：匹配行尾。

如果匹配成功，match 會是一個陣列，第一個元素是整個匹配的字串，後面的元素是每個括號中的匹配結果。
(\d+)：匹配卡片的 ID。
(\S+)：匹配卡片的中文名稱。
(\S+)：匹配卡片的英文名稱。
([\s\S]*)：匹配描述（包括多行文字）。

*/

function parseLenomandText(text: string): Card[] {
    const lines = text.trim().split("\n"); // 按行分割
    const cards: Card[] = [];

    for (const line of lines) {
               // 使用正則表達式解析每行資料
               const match = line.match(/^(\d+)\.\s+(\S+)\s+(\S+)\s+([\s\S]*)$/);
               if (match) {
                   const [, id, nameZh, nameEn, description] = match;
                   cards.push({
                       id: parseInt(id, 10),
                       nameZh: nameZh.trim(),
                       nameEn: nameEn.trim(),
                       description: description.trim(),
                   });
            console.log(`id: ${id}, nameZh: ${nameZh}, nameEn: ${nameEn}, description: ${description}`); // 顯示解析後的 id, name, description

        } else {
            console.warn(`Unable to parse line: ${line}`); // 如果匹配失敗，輸出警告
        }
    }

    return cards;
}




    document.getElementById("fileInput")?.addEventListener("change", async (event) => {
        const input = event.target as HTMLInputElement;
        if (!input.files || input.files.length === 0) {
            console.error("No file selected");
            return;
        }
    
        const file = input.files[0];
        const text = await file.text(); // 讀取檔案內容為文字
        const cards = parseLenomandText(text);
        console.log(cards); // 顯示解析後的 Cards 陣列
    
        // 將卡片存成 JSON 檔案
        const json = JSON.stringify(cards, null, 2);
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
    
        a.href = url;
        a.download = "cards.json";
        a.click();
    
        
    });
    

