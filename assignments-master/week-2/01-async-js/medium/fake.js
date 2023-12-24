// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was
// hello     world    my    name   is       raman
// After the program runs, the output should be
// hello world my name is raman

var fs = require('fs');
fs.readFile('sample.txt', function(err,data){
    if (err){
        return console.log(err); 
    }
    data = data.toString();
    
    console.log('INITIAL :', data)
    
    final = data.split(/\s+/).join(' ')
    
    fs.writeFile('sample.txt',final, function(err,data){
        if (err){
            return console.log(err)
        }
        console.log('UwPDATED\n')
        fs.readFile('sample.txt', function(err,data){
            if (err){
                return console.log(err);
            }
            data = data.toString();
            console.log('FINAl :', data)
        })
    
    } )
})

