const htmlMainButtons = document.querySelector('.main__buttons');
const htmlInputBill = document.querySelector('#bill')
const htmlButtonReset = document.querySelector('.main__button-reset')

//Events
htmlMainButtons.addEventListener('click', addClassSelect);
htmlMainButtons.addEventListener('click', getDate);
document.addEventListener('keyup', getDate);
htmlInputBill.addEventListener('click', getDate);
htmlButtonReset.addEventListener('click', reset);


// Add the porcent class if the button element is selected
function addClassSelect(e){
    if(e.target.classList[0] == 'main__button' || e.target.classList[0] == 'main__input-custom'){
        const cantPorcent = e.target;
        const buttonsPorcent = e.target.parentElement.children;


        for (let item of buttonsPorcent) {
            if(item.id == cantPorcent.id){
                item.classList.add('porcent')
                if(item.id != 6){
                    item.style.color = 'hsl(183, 100%, 15%)'
                    item.style.backgroundColor = 'hsl(172, 67%, 45%)'
                }

                
            } else{
                item.classList.remove('porcent')
                if(item.id != 6){
                    item.style.backgroundColor = 'hsl(183, 100%, 15%)'
                    item.style.color = 'white'
                }
            }
        } 
        
    }
}


// Get from data
function getDate(e){

    let bill = document.querySelector('#bill').value;
    let porcent = document.querySelector('.porcent').value;
    let cantPeople = document.getElementById('cantPeople').value;

    const fromData = {
        bill: Number(bill),
        porcent: Number(porcent),
        cantPeople: Number(cantPeople)
    }

    notZero(fromData)
    
}



function calc(fromData){ 
    let total = 0;
    let amount = 0;

    bill = fromData.bill
    porcent = fromData.porcent
    cantPeople = fromData.cantPeople



    amount = ((bill * porcent) / 100) / cantPeople;
    total = (bill / cantPeople) + amount;

    const totalBill = {
        amount: amount,
        total: total
    }
    showResult(totalBill)
}


function showResult(totalBill){
    const tipAmount = document.querySelector('#result_amount')
    const totalResult = document.querySelector('#result_total')
    tipAmount.textContent = `$${parseFloat(totalBill.amount).toFixed(2)}`;
    totalResult.textContent = `$${parseFloat(totalBill.total).toFixed(2)}`;
}

function notZero(fromData){
    const htmlCantPeople = document.getElementById('cantPeople');
    const htmlLabelPeople = document.querySelector('.main__label--red');

 
    if(fromData.cantPeople <= 0) {
        htmlCantPeople.style.border = "2px solid red"
        htmlLabelPeople.style.visibility = "visible"

    } else {
        htmlCantPeople.style.border = "2px solid hsl(172, 67%, 45%)"
        htmlLabelPeople.style.visibility = "hidden"

        calc(fromData)  
    }
}


function reset(){

    let bill = document.querySelector('#bill').value = 0;
    let porcent = document.querySelector('.porcent').value = 0;
    let cantPeople = document.getElementById('cantPeople').value = 1;

    const fromData = {
        bill: Number(bill),
        porcent: Number(porcent),
        cantPeople: Number(cantPeople)
    }

    calc(fromData)

}