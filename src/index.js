//import * as database from './utils/database.js';
//database.connectToDatabase('myDB');
//database.desconnectFromDatabase('myDB');

import { connectToDatabase, desconnectFromDatabase, dataBaseType} from './utils/database.js';
import { key, getDataFromAPI } from './utils/api.js';
import { products, getProductById } from './data/produtcs.js';
import readline from 'readline';
import logSymbols from 'log-symbols';
import connectToDatabase1 from './database/data.js';

console.log(key.value);
console.log(key.permission);
console.log(logSymbols.success + ' ' + key.type);

await getDataFromAPI('/users');

await connectToDatabase('myDB');
await desconnectFromDatabase('myDB');
console.log(dataBaseType.userType);

//...existing code...

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askNewProduct() {
    rl.question('Deseja adicionar um novo produto? (s/n): ', (answer) => {
        if (answer.toLowerCase() === 's') {
            rl.question('Nome do produto: ', (name) => {
                rl.question('Preço do produto: ', (price) => {
                    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
                    products.push({
                        id: newId,
                        name,
                        price: parseFloat(price)
                    });
                    console.log('Produto adicionado com sucesso!');
                    askNewProduct(); // Pergunta novamente
                });
            });
        } else {
            rl.close();
            // Exibe a lista atualizada
            products.forEach(product => {
                console.log(`Product ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`);
            });
            // Soma dos preços dos produtos
            const total = products.reduce((sum, product) => sum + product.price, 0);
            console.log(`Soma total dos preços dos produtos: $${total}`);
        }
    });
}

askNewProduct();

// ...existing code...

// Exibe a lista de produtos
products.forEach(product => {
    console.log(`Product ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`);
});

// Soma dos preços dos produtos
const total = products.reduce((sum, product) => sum + product.price, 0);
console.log(`Soma total dos preços dos produtos: $${total}`);



async function main() {

    await connectToDatabase1(process.env.USERDATABASE, process.env.PASSWORDDATABASE);   

}

main();