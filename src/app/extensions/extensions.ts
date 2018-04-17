interface Date{
    addDaysToCurrentDate(days:number):Date;
    //format():String;
    format():String;
}

Date.prototype.addDaysToCurrentDate=function(days:number):Date{

       let dat=new Date( this.valueOf());
       dat.setDate(dat.getDate()+days);
       return dat;
}

Date.prototype.format=function():string{
    //var fmes =new Date(this.valueOf());
    //return fmes.toLocaleDateString();
    var fecha=new Date();
    let day=fecha.getDate();
    let mes=fecha.getMonth()+1;
    let anio=fecha.getUTCFullYear();
    let formato=`${day} / ${mes} / ${anio}`;
    return formato;
        
}

window.onload=function(){

    var currentDay=new Date();
    console.log(currentDay);
    //console.log(currentDay.addDaysToCurrentDate(5).format());
    console.log(currentDay.addDaysToCurrentDate(5));
    console.log(currentDay.format());
}