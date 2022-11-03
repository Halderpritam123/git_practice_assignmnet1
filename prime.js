function primeNo(N){
let factor=0;
   for(let i=1;i<=N;i++){
	if(N%i==0){
	factor++;
	}
 }
  if(factor==2){
	console.log("prime no");
	}else{
	console.log("Non Prime");
	}
}