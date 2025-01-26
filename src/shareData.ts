//在不同的html網頁之間共享資料
//用泛型介面 sendData 來定義要傳遞的資料格式
//請在 dataType.ts 裡定義介面 sendData

/*
// 使用範例：
// 假設有一個介面 sendData，用來定義要儲存的資料格式
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export interface sendData {
    cards: number[];
    name: string;
    score: number;
}

//儲存要傳遞的資料
saveData<sendData>({cards:cards, name:'John', score:100});

//可以在新的網頁讀取儲存的資料
const loadMyData = loadData<sendData>();
if(loadMyData) {
    console.log(loadMyData.name);
    console.log(loadMyData.score);
    console.log(loadMyData.cards);    
    loadMyData.cards.forEach(card => console.log(card));
}
*/


//把要傳遞的資料寫入本地端儲存(localStorage)
export function saveData<T>(data: T) {
    localStorage.setItem('shareData', JSON.stringify(data));
}


//讀取本地端儲存(localStorage)的資料
export function loadData<T>():T | undefined {
    const dataString = localStorage.getItem('shareData');
    if (dataString) {
        return JSON.parse(dataString);
    }
    return undefined;
}




