import axios from "axios";

async function sendDrink(drink){
    try {
        await axios.post('/drink', drink);
    } catch (error) {
        
    }
}