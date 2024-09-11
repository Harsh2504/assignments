i=0;
// setInterval(()=>{console.log(i+=1)},1000);

// for(i=1;i>0;i++){    
//             setTimeout((i)=>{
//                 console.log(i);
//                 },1000)
// }

function counter(i) {
    console.log(i);
    setTimeout(() => counter(i + 1), 1000);
}

counter(1);
