
//Example 1
// producer code

function someAPI(){
let p1=new  Promise(function(resolve , reject){
    console.log("i am promise");

    setTimeout(()=>{
        console.log("mai promise 1 hu");
        let x=Math.round(Math.random()*10+1);
         if(x%2==0){
        resolve();
    }
    else
        reject();
    },5000);
   

    // resolve();
    // reject();
});
return p1;
}

function someAPI2(){
let p2=new  Promise(function(resolve , reject){
    console.log("i am promise");

    setTimeout(()=>{
        console.log("mai promise 2 hu");
        let x=Math.round(Math.random()*10+1);
         if(x%2==0){
        resolve();
    }
    else
        reject();
    },3000);
   

    // resolve();
    // reject();
});
return p2;
}

let p1=someAPI();
let p2=someAPI2();
p1.then((result)=>{
    console.log("promise fullfilled"+result);
},
(error)=>{
  console.log("promise rejected"+error);
})

p2.then((result)=>{
    console.log("promise fullfilled"+result);
},
(error)=>{
  console.log("promise rejected"+error);
})



