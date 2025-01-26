import { saveDataAndGoToNextPage } from "./tools.js";
function active() {
    var _a, _b, _c, _d;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1hcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbWFpbi1hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR3JELFNBQVMsTUFBTTs7SUFFWCxNQUFBLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFFLEVBQUU7UUFDNUQsdUJBQXVCLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBQSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQywwQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRSxFQUFFO1FBQzVELHVCQUF1QixDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUMsQ0FBQztJQUVILE1BQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsMENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUUsRUFBRTtRQUM3RCx1QkFBdUIsQ0FBQyxrQkFBa0IsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDLENBQUMsQ0FBQztJQUVILE1BQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsMENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUUsRUFBRTtRQUMvRCx1QkFBdUIsQ0FBQyxrQkFBa0IsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUM7QUFHRCxNQUFNLEVBQUUsQ0FBQyJ9