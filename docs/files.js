const fs = require('fs');

// Reading files
// fs.readFile('./blog1.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });


// Writing to files
// fs.writeFile('./blog1.txt', 'Hello Software Chronicles', () => {
//     console.log('File has been successfully written');
// })

// Writing to an un-created file
// fs.writeFile('./blog2.txt', 'Hi Brix Software Monsters', () => {
//     console.log('File has been successfully written');
// })

// Appending to files
// fs.appendFile('.blog2.txt', ' .I hope everybody is ready for the project', () => {
//     console.log('File has been successfully appended with text');
// })


// Directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('Folder Created');
//     });
// }
// else {
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('Folder Deleted');
//     })
// }


// Deleting Files
if(fs.existsSync('./deleteme.txt')){
    fs.unlink('./deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('File Deleted');
    })
}



