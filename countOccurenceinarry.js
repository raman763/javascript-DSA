function countOccurence(){
 let arr=[1,2,3,4,5,6,5,5,5,5,1,1,1,1,1];
 let obj={};
 let max=arr[0]; let maxCount=1;
 for(let i=0; i<arr.length; i++){
     let newarr=arr[i];
     // if(obj[newarr]==null){
     //     obj[newarr]=1;
     // }else obj[newarr]++;
     obj[newarr]=(obj[newarr]||0)+1;
     
     if(obj[newarr]>maxCount){
     max=newarr;
     maxCount=obj[newarr]
     }
 }

 

 return max;
}
console.log(countOccurence());