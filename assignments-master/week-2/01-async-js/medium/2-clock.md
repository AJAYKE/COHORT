Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

date = new Date()
time = date.toLocaleTimeString()
hrs = date.getHours();
hrssss = hrs>12?hrs%12:hrs;
document.getElementById("demo1").innerHTML = time;
document.getElementById("demo2").innerHTML = (hrssss<10?'0':'')+hrssss+(time.toString().substring(2))+(date.getHours()>12?' PM':' AM') ;
