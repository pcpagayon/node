const fs = require('fs');

fs.mkdir('polfolder', (error) => {
    fs.writeFile('polfolder/polsfile.txt','How can I recover lost file in Linux?', 'UTF8', (error) => {
    if(error) { console.log('Ooopss! Error') }
    console.log('File Created')
        fs.readFile('polfolder/polfile.txt', (error) => {
            if(error) { console.log('Error!')}
            console.log('Reading File')
        })
    }) 
})