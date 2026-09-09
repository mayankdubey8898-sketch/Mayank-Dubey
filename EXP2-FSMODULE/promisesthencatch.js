const fs=require("fs").promises;

async function writeFile() {
    try{
        await fs.writeFile("promis.txt","hello Students!");
        console.log("promise.txt","hello students");
        console.log("file created and data written successfully.");
    } catch(error){
        console.log("Error:",error);
    }
}
writeFile();

//read file

async function readFile(){
    try{
        const data=await fs.readFile('promis.txt','utf8');
        console.log("file content:");
        console.log(data);
    }catch(error){
        console.error("error:",error);
    }
}
readFile();

async function renameFile(){
    try{
        await fs.rename("promis.txt","promis_new.txt");

        console.log("file renamed succesfully.");

    }catch(error){
        console.log("error:",error);
    }
}

renameFile();