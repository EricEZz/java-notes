for(let i = 0; i <=7; i++){
    console.log(i);
}
for (let j = 0; j<5; j++){
    console.log(j)
}
//let money =100; 
//while(money >0){
//    money--;
//    console.log(money);

//} 
//i++ is the same as i+=1
//for loop is function fuunction is input output machines 
const numsArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
function linearSearch(num, arr){
    let found = null;    
    for (i=0; arr.length; i++){
        if(arr[i] === num){
            found = arr[i];
            break;
        } else{
            console.log("still looking");
        }
    }
    if(!found){
        console.log("sorry couldnt find that");
    }else{
        console.log(found);
    }
    return found; 
}

linearSearch(2, numsArray);
