let clocks = document.getElementById('Clocks')
let clock = document.getElementById('Clock')



setInterval(function (){
    let date = new Date()
clocks.innerHTML = date.toLocaleTimeString();
clock.innerHTML = `Today Date is : ${date.toLocaleDateString()}`   

// console.log(date);
},1000)
