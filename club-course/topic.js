let topicsArray = [
    "上課",
    "上課",
    "期末報告",
    "休息",
    "休息",
    "期末(休息)"
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    //時分秒這個例子不會用到，歸0
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

//給社長用的
setMonthAndDay(5,23);
