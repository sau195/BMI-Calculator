document.getElementById("btn").onclick= function(){
    let height=Number(document.getElementById("height").value) 
    let weight=Number(document.getElementById("weight").value) 
    weight=weight*10000;
    let res=weight/(height*height)
    res=Math.round(res)
    console.log(res)

    if(res<18.5)
    {
        document.getElementById("result").innerHTML="Your BMI is "+res+" you're in the underweight range"
        console.log(result)

    }
    if(res>=18.5 && res<=24.9)
    {
        document.getElementById("result").innerHTML="Your BMI is "+res+" you're in the healthy weight range"
        console.log(result)

    }
    if(res>=25 && res<=29.9)
    {
        document.getElementById("result").innerHTML="Your BMI is "+res+" you're in the overweight range"
        console.log(result)

    }
    if(res>=30)
    {
        document.getElementById("result").innerHTML="Your BMI is "+res+"  you're in the obese range"
        console.log(result)

    }
    
}