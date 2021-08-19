const inputs = document.getElementsByTagName('input');
const type = document.getElementById('type');


const drink = {
    name: '',
    price: '',
    percent: '',
    type: type.value
}
const button = document.getElementById('submit');

button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateDrinkInputs();
    console.log(drink);
})

function getDrinkInputValue(){
    drink.name = inputs.item(0).value;
    drink.price = inputs.item(1).value;
    drink.percent = inputs.item(2).value;
}

function validateDrinkInputs(){
    getDrinkInputValue();
    if(drink.name == ''|| drink.price ==''){
        alert('preencha o campo destacado do drink viadin');
        inputs[0].insertAdjacentText('afterend', '*');      
        inputs[1].insertAdjacentText('afterend', '*');      
    }else{
        console.log(drink.name);
    }
}

