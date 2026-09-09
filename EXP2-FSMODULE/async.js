const fs=require('fs');
fs.writeFile(
    'sample.txt','welcome to full stack development',(err) =>{
    if(err){
        console.log('error creating file',err);
    }
    
        console.log('file crated successfully')
    
    
    }
)

fs.readFile('sample.txt','utf-8',(err,data) => {
    if(err){
        console.log('error in reading file:',err);
        return;
    }
    console.log('file content:');
    console.log(data)
}
)
//append
fs.appendFile('sample.txt','\nSemester:3',(err)=>{
    if(err){
        console.log('error updating file',err);

    }
    else{
        console.log('file updated')
    }
})

//delete

fs.unlink('example.txt',(err)=>{
    if(err){
        console.error('error deleting file:',err);
    }
    else{
        console.log('\n4.file deleted successfully');
    }
})

