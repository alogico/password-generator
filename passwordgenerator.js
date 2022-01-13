//document.getElementById("gen-btn").addEventListener("click",show);

const epwd=[];

function ran(num){

	const min=33;
  const max=127;
	const limit=Math.abs(max-min);
  let pwd="";
  let rounds=num;
  
  
  for(let i=0;i<5;i++){
  
  for(let j=rounds;j>0;j--){
  	let char=min+(Math.random()*limit);
    pwd+=String.fromCharCode(Math.floor(char));
    
    
  }
 
  epwd.push(pwd);
  pwd=""
  }
 
}

function show()
{
	ran(18)
	const arr=epwd;
  //document.getElementById("passread").innerHTML=arr.join("\n");
  console.log(arr)
  

}

show()




