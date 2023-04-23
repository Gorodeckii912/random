const element = document.querySelector("#slider")
const span = document.querySelector("#random-num");
const btn = document.querySelector("#btn-click")
const currentRange = document.querySelector("#current-range") 

btn.addEventListener("click", function() {
    let numMax = +element.value;

    let min = 0;
    let max = numMax;

    let rangeNum = max - min + 1;

    let randonNum = Math.floor(Math.random() * rangeNum) + min

    span.textContent = randonNum
    // console.log(randonNum)

    f(randonNum)
})


element.addEventListener("input", function() {
    currentRange.textContent = +element.value
})


window.addEventListener("load", function() {
    currentRange.textContent = +element.value
}) 


let arr = [
    "Hello1",
    "Hello2",
    "Hello3",
    "Hello4",
    "Hello5",
    "Hello6",
    "Hello7",
    "Hello8",
    "Hello9",
    "Hello10",
    "Hello10",
    "Hello10",
    "Hello10",
    "Hello10",
    "Hello10",
    "Hello10",
    "Hello10",
    "Hello10",
    "Hello10",
    "Hello777777",
]


function f(index) {
    alert(arr[index])
    // console.log(arr[index])
}



//=========================================================================== 


let arr1 = [
    "Hello1",
    "Hello2",
    "Hello3",
    "Hello4",
    "Hello5",
    "Hello6",
    "Hello7",
    "Hello8",
    "Hello9",
    "Hello10",
    "Hello10",
    "Hello10",
    "Hello10",
    "Hello10",
    "Hello10",
    "Hello10",
    "Hello10",
    "Hello10",
    "Hello10",
    "Hello777777",
]

function f1 () {

    let min = 0;
    let max = 20;

    let rangeNum = max - min + 1;



    let newArr = []
    let str = ""

    for (let i = 0 ; i < 5; i ++) {
        console.log(Math.floor(Math.random() * rangeNum) + min)

        let randomIndex = Math.floor(Math.random() * rangeNum) + min

        // newArr.push(arr1[randomIndex])
        // alert(arr1[randomIndex])
        newArr.push(randomIndex)
        str += arr1[randomIndex] +"\n"

    }
    console.log(newArr)
    alert(str)
    // console.log(newArr)
    // console.log(newArr.join(","))
    // console.log(newArr.join(", "))
    // alert(newArr.join(", "))


    // for (const item of newArr) {
    //     alert(item)
    // }
    

}

// f1()