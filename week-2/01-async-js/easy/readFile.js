var fs = require('fs');

let myPromise = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        fs.readFile("example.txt","utf-8",(err,data)=>{
            if(err){
                reject(err);
            }
            else{
            resolve(data);
        }
        })

    },3000)
    
});


function writeData(data,func){
    return new Promise ((resolve,reject)=>{
        fs[func]('example.txt', data , function (err) {
            if (err) reject("Some Thing went wrong");
            console.log('Saved!');
            resolve("Data inserted successfully" + data);
          });
    })
}


async function demo(){
try{
    let prevData = await myPromise;
    console.log(prevData);
    let presentData = "Hello bae124"
    let func = "writeFile";
    let status= await writeData(presentData,func)
    console.log(status)
}catch(err){
    console.log(
        "Error"+err
    );
    
}finally{
    console.log("harsh")
//     fs.unlink('example.txt', function (err) {
//         if (err) throw err;
//         console.log('File deleted!');
//       });
}
}

demo()