## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
<!Doctype html>
<body>
<script>
function counter(){
    date = new Date()
    time = date.toTimeString()
    document.getElementById('hi').innerHTML = time
}
setInterval(counter,1000)
</script>
<p id='hi'>Current Time: </p>
</body>
