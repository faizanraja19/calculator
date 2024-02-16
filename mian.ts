// calculator 
import inquirer from "inquirer";
let ques = await inquirer.prompt([
    {
        name:"numA",
        type:"number",
        message:"write first mumber"
},
{
    name:"operat",
    type:"list",
    choices:["add","subtract","multi","divide",],
    message:"select your operator"

},
{
    name:"numB",
    type:"number",
    message:"write second mumber"

}])
if (ques.operat==="add"){
    console.log(ques.numA+ques.numB)
}
else if (ques.operat==="sub"){
    console.log(ques.numA-ques.numB)
}
else if(ques.operat==="multi"){
    console.log(ques.numA*ques.numB)
}
else if (ques.operat==="divide"){
    console.log(ques.numA/ques.numB)
}else{
    console.log("invalid input")
}