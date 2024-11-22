//真的受不了拿中文做索引啊
//现在完全是正常JS getDay结果了
export enum Weekday{
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
};
export function getDayDescription(dayIndex :number) :string{
    switch(dayIndex){
        case 0: return "星期日";
        case 1: return "星期一";
        case 2: return "星期二";
        case 3: return "星期三";
        case 4: return "星期四";
        case 5: return "星期五";
        case 6: return "星期六";
        default: throw new Error(dayIndex + "");
    }
}
export enum WeekStartDay{
    Sunday = "星期日",
    Monday = "星期一"
};