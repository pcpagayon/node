const fs = require('fs');

fs.open('polfolder/output.txt', 'r', (err,fd) => {
    if(err) throw err;
    fs.close( fd, (err) => {
        if(err) throw err;
    });
});