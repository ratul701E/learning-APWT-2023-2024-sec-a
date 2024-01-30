//control flow

let ami = 10
let tumi = 9

if(ami > tumi) console.log("ami boro")
else console.log("tumi boro")


switch(true){
    case ami > 20:
        console.log("Ami 20 theke boro")
        break
    case ami > 15:
        console.log("Ami 15 theke boro")
        break
    case ami > 10:
        console.log("Ami 10 theke boro")
        break
    case ami > 5:
        console.log("Ami 5 theke boro")
        break
    default:
        console.log("Ami onek choto")
}

for(let i = 0; i < 10; i++){
    console.log("this is " + i)
}

let controller = 0
while(controller <= 10){
    console.log("Hacking nasa " + controller*10 + "% ..")
    if(controller === 10) {
        console.log("Hacking done")
    }
    controller++
}

do {
    console.log("printed from console.log")
}while(false)

let arr = [1, 2, 3, 4]
for(i in arr){
    console.log(arr[i])
}

for(val of arr){
    console.log(val)
}