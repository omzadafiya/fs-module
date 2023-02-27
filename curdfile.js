const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'CURD');
const filePath = `${dirPath}/curd.txt`

    //file crteate karva mate

fs.writeFileSync(filePath,'this is a simple curd file');

    //file ne read karva mate

fs.readFile(filePath, 'utf8', (err, item) => {
    console.log(item);
})

    // file ne update karva mate//

fs.appendFile(filePath,' and is name is curd.txt',(err)=>{
    if(!err) console.log("file is updated")
})

    // file nu name rename karva mate

// fs.rename(filePath, `${dirPath}/curd1.txt`,(err)=>{
//     if(!err) console.log("file name is updated")
// })   

// // file ne deleat karva mate
// fs.unlinkSync(`${dirPath}/curd1.txt`)