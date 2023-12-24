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

