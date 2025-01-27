import { saveDataAndGoToNextPage, checkLicense } from "./tools.js";
function active() {
    var _a, _b, _c, _d;
    if (!checkLicense())
        return;
    (_a = document.getElementById("today")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        saveDataAndGoToNextPage("pray.html", "今日");
    });
    (_b = document.getElementById("yesNo")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        saveDataAndGoToNextPage("pray.html", "是否");
    });
    (_c = document.getElementById("future")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        saveDataAndGoToNextPage("selectCards.html", "占卜");
    });
    (_d = document.getElementById("learning")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
        saveDataAndGoToNextPage("selectCards.html", "學習");
    });
}
active();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1hcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbWFpbi1hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFDLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUdsRSxTQUFTLE1BQU07O0lBQ1gsSUFBRyxDQUFDLFlBQVksRUFBRTtRQUFFLE9BQU87SUFFM0IsTUFBQSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQywwQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRSxFQUFFO1FBQzVELHVCQUF1QixDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUMsQ0FBQztJQUVILE1BQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsMENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUUsRUFBRTtRQUM1RCx1QkFBdUIsQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFBLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFFLEVBQUU7UUFDN0QsdUJBQXVCLENBQUMsa0JBQWtCLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFBLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFFLEVBQUU7UUFDL0QsdUJBQXVCLENBQUMsa0JBQWtCLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDO0FBR0QsTUFBTSxFQUFFLENBQUMifQ==