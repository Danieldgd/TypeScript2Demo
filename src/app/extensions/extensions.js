Date.prototype.addDaysToCurrentDate = function (days) {
    let dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};
Date.prototype.format = function () {
    var fecha = new Date();
    var day = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var anio = fecha.getUTCFullYear();
    let formato = `${day} / ${mes} / ${anio}`;
    return formato;
};
window.onload = function () {
    var currentDay = new Date();
    console.log(currentDay);
    console.log(currentDay.addDaysToCurrentDate(5));
    console.log(currentDay.format());
};
