// code your solution here
function saturdayFun (default1 = 'roller-skate'){
    return(`This Saturday, I want to ${default1}!`);
}
saturdayFun();

function mondayWork (default2 = 'go to the office'){
    return (`This Monday, I will ${default2}.`);
}
mondayWork();


function wrapAdjective() {
    return function (default3 = 'special') {
        return (`You are ${default3}!`)
       // const part2 = "there";
        //return function () {
            //return(`${part1.toUpperCase()} ${part2} ${name}`);
        //};
    };
}
  
demoChain("Dr. Stephen Strange")()(); //=> HI there Dr. Stephen Strange