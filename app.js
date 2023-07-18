const table = document.querySelector('.table')
const redCount = document.querySelector('.red-count')
const greenCount = document.querySelector('.green-count')
const timeCount = document.querySelector('.time-count')
const modal = document.querySelector('.modal')
const restartButton = document.querySelector('.restart-button')

for (let i = 1; i <= 10; i++){
    let tr = document.createElement('tr')
    
    for (let j = 1; j <= 10; j++){
        let td = document.createElement('td')
        
        tr.appendChild(td)
    }
    table.appendChild(tr)
}

function generatorRandomNumbers() {
    let numbers = []
    let random = Math.floor(Math.random() * 100)
    while(numbers.length !== 10) {
        if (!numbers.includes(random)) {
            numbers.push(random)
        }
        random = Math.floor(Math.random()*100)
    }
    return numbers  
}

function countRedAndGreen(){
    let countRed = table.querySelectorAll('.red').length
    let countGreen = table.querySelectorAll('.green').length

    redCount.textContent = countRed
    greenCount.textContent = countGreen
}


const cells = table.querySelectorAll('td')
const randomNumbers = generatorRandomNumbers()
for(let i = 0; i < cells.length;i++){
    let cell = cells[i]
    cell.addEventListener('click', function(){
        cell.classList.add('animate')
        if(randomNumbers.includes(i)){
            cell.classList.add('green')
        }else{
            cell.classList.add('red')
        }
        countRedAndGreen()
        
    })
}

let time = 30
let IntervalID = setInterval(writeTime, 1000)

function writeTime(){
    if(time !== 0){
        time = time-1
        timeCount.textContent = `00:${time <10 ?'0' + time:time}`
    }else{
        clearInterval(IntervalID)
        modal.classList.add('open')
    }
}

