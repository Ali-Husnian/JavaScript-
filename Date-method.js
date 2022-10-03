let fullDale = new Date ;
    function getFullDate ()
    {
        document.getElementById("res").innerText = fullDale
    }
    function getYear()
    {
        document.getElementById("res").innerText = fullDale.getFullYear();
    }
    function getMonth () // return 0,1,2,3,4,5,6,7,8,9,10,11
    {
        let month= ["January","February","March","April","May","June","July","August","September","October","November","December"];

        document.getElementById("res").innerText = month[fullDale.getMonth()];
    }
    function getDate()
    {
        document.getElementById("res").innerText = fullDale.getDate();
    }
    function getMints() 
    {
        document.getElementById("res").innerText = fullDale.getMinutes();
    }
    function getHour() 
    {
        document.getElementById("res").innerText = fullDale.getHours();
    }
    function getSecond() 
    {
        document.getElementById("res").innerText = fullDale.getSeconds();    
    }
    function getMilliSecond() 
    {
        document.getElementById("res").innerText = fullDale.getMilliseconds();    
    }
    function getDays() // return 0,1,2,3,4,5,6
    {
        let day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        document.getElementById("res").innerText = day[fullDale.getDay()];    
    }
    function getTimes() // getTime (milliSeconds since Junnary 1 ,1970)
    {
        document.getElementById("res").innerText = fullDale.getTime();    
    }