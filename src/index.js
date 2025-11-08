import { createItem } from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishlist = [];

console.log("Welcome to the your Shopee Cart!");

//Criando Itens
const item1 = await createItem("hotwheels ferrari", 20.99, 7);
const item2 = await createItem("hotwheels", 39.99, 3);

//Adicionando Itens no carrinho e na Lista de Desejos
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

//Deletando item do carrinho
//await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);