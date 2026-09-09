const fs=require('fs');
fs.writeFileSync('example.txt','this is experiment 2 in FSD workshop','utf8');

console.log('create file run successfully');

const data=fs.readFileSync('example.txt','utf8');
console.log('file content is:',data);

// fs.appendFileSync('example.txt','\n This is the new line');
// console.log('example file is appended');

// fs.unlinkSync('student.txt');
// console.log('student file is deleted');

// folder operation


fs.mkdir('sample folder');
console.log('a new folder is created');

fs.rmdieSync('sample folder');
console.log('new folder is deleted');

if(fs.existsSync('example.txt')){
    console.log('file exist');

}

else{
    console.log('file not exists');
}



