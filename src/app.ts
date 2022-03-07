// function sum(a:number,b:number){
// return a+b;
// }
// // const a = 10;
// // const b = 20;
// const tong = sum(7,5);
// console.log(tong);
// let number1 : number = 5;
// let number2 : number = 2.8;
// let phrase : string = "Result js";
// let permit : boolean = true;
// const result = number1+number2;
// if(permit){
//     console.log(phrase+result);
    
// }else{
//     console.log("not show result");
    
// }
type TPerson={
    id?:number;
    name:string;
    age:number;
    status?:boolean;
}
const person :TPerson={
    name : "datlt",
    age:20
}
const persons :TPerson[] = [
    {id:1,name:"duy",age:20,status:false},
    {id:2,name:"duy2",age:22,status:true},

]



