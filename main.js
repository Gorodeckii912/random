const element = document.querySelector("#slider")
const ele = document.querySelector("#slider1")
const span = document.querySelector("#random-num");
const btn = document.querySelector("#btn-click")
const currentRange = document.querySelector("#current-range") 
const cerrentRangeMin = document.querySelector("#current-range-min")

btn.addEventListener("click", function() {
    let numMax = +element.value;
    let numMin = +ele.value;

    let min = numMin;
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

ele.addEventListener("input", function() {
    cerrentRangeMin.textContent = +ele.value
})
window.addEventListener("load", function() {
    cerrentRangeMin.textContent = +ele.value
}) 


let arr = [
    "Номер 1",
    "Номер 2",
    "Номер 3",
    "Номер 4",
    "Номер 5",
    "Номер 6",
    "Номер 7",
    "Номер 8",
    "Номер 9",
    "Номер 10",
    "Номер 11",
    "Номер 12",
    "Номер 13",
    "Номер 14",
    "Номер 15",
    "Номер 16",
    "Номер 17",
    "Номер 18",
    "Hello 19",
    "Номер 20",
    "Номер 21"
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