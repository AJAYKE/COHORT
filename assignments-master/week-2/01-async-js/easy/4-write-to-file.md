## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

var fs = require("fs");
fs.writeFile('sample.txt', 'aggipetti macha', function(err, data){
    if (err){
        return console.log(err)
    }

    for (i=0;i<100000000;i++){}
    
    fs.readFile('sample.txt', function(err,data){
        if (err){
            return console.log(err)
        }
        for (i=0;i<100000000;i++){}
    
        console.log(data.toString());
    });
    
    console.log('saved')
})
console.log('first')

