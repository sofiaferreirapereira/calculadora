const monitor = document.getElementById("calculator__monitor")
const button = document.querySelectorAll("#calculator__buttons button")


button.forEach((button) => {
    button.addEventListener("click", function(){
        const value = this.value
        if (value === "=") {
            monitor.innerText = eval(monitor.innerText)
        } 
        else if (value === "c") 
        {
            monitor.innerText = ''
        } 
        else 
        {
            if(monitor.innerText === 'null') 
            {
                monitor.innerText = ''
            }
            else 
            {
                monitor.innerText += value;
            }
        }
    })
})


// Outro modo de fazer:
// function calcula(value){
//     console.log(value)
// }