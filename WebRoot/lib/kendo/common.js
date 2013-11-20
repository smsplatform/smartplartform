function CheckPlatform() {
    var fvObj = new FrontViewObject(false);
    if (fvObj.MakeReady() == false) {
        alert("连接智能平台失败，该应用程序无法启动！");
        parent.location.href = "/index.htm";
        return;
    }
}
//检查智能平台
CheckPlatform();
document.oncontextmenu = function (eventTag) {
//    var event = eventTag || window.event;
//    event.returnValue = false;
//    return false;
}
function CheckOS() {
    //debugger;
    var pf=navigator.platform;
    if (pf == "Mac68K" || pf == "MacPPC" || pf == "Macintosh") {
        FusionCharts.setCurrentRenderer('javascript');
    }
}

CheckOS();


function parseDate(str) {
    if (typeof str == 'string') {
        var results = str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) *$/);
        if (results && results.length > 3)
            return new Date(parseInt(results[1], 10), parseInt(results[2], 10) - 1, parseInt(results[3], 10));
        results = str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) +(\d{1,2}):(\d{1,2}) *$/);
        if (results && results.length > 5)
            return new Date(parseInt(results[1], 10), parseInt(results[2], 10) - 1, parseInt(results[3], 10), parseInt(results[4], 10), parseInt(results[5], 10));
        results = str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2}) *$/);
        if (results && results.length > 6)
            return new Date(parseInt(results[1], 10), parseInt(results[2], 10) - 1, parseInt(results[3], 10), parseInt(results[4], 10), parseInt(results[5], 10), parseInt(results[6], 10));
        results = str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2})\.(\d{1,9}) *$/);
        if (results && results.length > 7)
            return new Date(parseInt(results[1], 10), parseInt(results[2], 10) - 1, parseInt(results[3], 10), parseInt(results[4], 10), parseInt(results[5], 10), parseInt(results[6], 10), parseInt(results[7], 10));
    }
    return null;
}

//
function DateAdd(interval, number, date) {
    switch (interval.toLowerCase()) {
        case "y": return new Date(date.setFullYear(date.getFullYear() + number));
        case "m": return new Date(date.setMonth(date.getMonth() + number));
        case "d": return new Date(date.setDate(date.getDate() + number));
        case "w": return new Date(date.setDate(date.getDate() + 7 * number));
        case "h": return new Date(date.setHours(date.getHours() + number));
        case "n": return new Date(date.setMinutes(date.getMinutes() + number));
        case "s": return new Date(date.setSeconds(date.getSeconds() + number));
        case "l": return new Date(date.setMilliseconds(date.getMilliseconds() + number));
    }
}

function DateDiff(interval, date1, date2) {
    var long = date2.getTime() - date1.getTime(); //相差毫秒
    switch (interval.toLowerCase()) {
        case "y": return parseInt(date2.getFullYear() - date1.getFullYear());
        case "m": return parseInt((date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth()));
        case "d": return parseInt(long / 1000 / 60 / 60 / 24);
        case "w": return parseInt(long / 1000 / 60 / 60 / 24 / 7);
        case "h": return parseInt(long / 1000 / 60 / 60);
        case "n": return parseInt(long / 1000 / 60);
        case "s": return parseInt(long / 1000);
        case "l": return parseInt(long);
    }
}

Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month 
        "d+": this.getDate(), //day 
        "h+": this.getHours(), //hour 
        "m+": this.getMinutes(), //minute 
        "s+": this.getSeconds(), //second 
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
        "S": this.getMilliseconds() //millisecond 
    }

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};

function stringToDate(dateString) {
    return dateString.replace(/年|月|-/g, '/').replace(/日/g, '');
}

function stringsToDate(yearstr,datestr,timestr) {
    return yearstr + "/" + datestr.replace("-", "/") + " " + timestr
}