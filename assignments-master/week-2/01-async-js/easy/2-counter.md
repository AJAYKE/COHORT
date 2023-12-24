## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


<!DOCTYPE html>
<html>
<body>
<p id="time"></p>
<script>
function counter(){
    date = new Date()
    document.getElementById("time").innerHTML = date.toLocaleTimeString()
    return setTimeOut(counter,1000)
}
counter()
</script>

</body>
</html>







































































(Hint: setTimeout)