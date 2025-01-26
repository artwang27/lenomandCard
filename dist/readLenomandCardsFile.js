var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
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
function parseLenomandText(text) {
    const lines = text.trim().split("\n"); // 按行分割
    const cards = [];
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
        }
        else {
            console.warn(`Unable to parse line: ${line}`); // 如果匹配失敗，輸出警告
        }
    }
    return cards;
}
(_a = document.getElementById("fileInput")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", (event) => __awaiter(void 0, void 0, void 0, function* () {
    const input = event.target;
    if (!input.files || input.files.length === 0) {
        console.error("No file selected");
        return;
    }
    const file = input.files[0];
    const text = yield file.text(); // 讀取檔案內容為文字
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
}));
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZExlbm9tYW5kQ2FyZHNGaWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JlYWRMZW5vbWFuZENhcmRzRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsNkJBQTZCO0FBQzdCLDhDQUE4QztBQUM5QyxpREFBaUQ7QUFFakQ7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7QUFFRixTQUFTLGlCQUFpQixDQUFDLElBQVk7SUFDbkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU87SUFDOUMsTUFBTSxLQUFLLEdBQVcsRUFBRSxDQUFDO0lBRXpCLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7UUFDaEIsZ0JBQWdCO1FBQ2hCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUNsRSxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ2xELEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ1AsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUNwQixNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDckIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3JCLFdBQVcsRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFO2FBQ2xDLENBQUMsQ0FBQztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGFBQWEsTUFBTSxhQUFhLE1BQU0sa0JBQWtCLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQywrQkFBK0I7UUFFaEksQ0FBQzthQUFNLENBQUM7WUFDSixPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYztRQUNqRSxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFLRyxNQUFBLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLDBDQUFFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFPLEtBQUssRUFBRSxFQUFFO0lBQzdFLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUEwQixDQUFDO0lBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNsQyxPQUFPO0lBQ1gsQ0FBQztJQUVELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxZQUFZO0lBQzVDLE1BQU0sS0FBSyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxrQkFBa0I7SUFFdEMsZ0JBQWdCO0lBQ2hCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztJQUM1RCxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFdEMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDYixDQUFDLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztJQUMxQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFHZCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=