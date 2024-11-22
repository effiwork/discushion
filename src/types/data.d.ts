//#region props
interface ConfigStore{
    startWeek :DateAtWeek;
    weeksInTerm :number;
    showWeekend :boolean;
    startWeekAtSunday :boolean;
    locked :boolean;
    showOtherWeeks :boolean;
    minWidth :number;
    version :number;
}
//#endregion
//#region state
interface StateStore{
    dayState :DayState;
}
interface DayState{
    
}
//#endregion
//#region 汇总
export interface Store{
    props :ConfigStore;
    state :StateStore;
}
//#endregion