//quais ações meu carrinho pode fazer?

//casos de uso:
//-> adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
} 

//-> deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

//-> remover um item - diminui um item
async function removeItem(userCart, item) {
    // Encontrar o índice do item no carrinho
    const index = userCart.findIndex((cartItem) => cartItem.name === item.name);

    // Se o item não for encontrado, sair da função
    if (index === -1) {
        console.log(`Item ${item.name} not found in cart.`);
        return;
    }
    // Diminuir a quantidade ou remover o item do carrinho
    if (userCart[index].quantity > 1) {
        userCart[index].quantity -= 1;
        return;
    }

    // Se a quantidade for 1, remover o item do carrinho
    if (userCart[index].quantity == 1) {
        userCart.splice(index, 1);
        return;
    }

}

//-> calcular total do carrinho
async function calculateTotal(userCart) {
    console.log("\nShopee Cart Total is:");
    const result = userCart.reduce((total, item) => total + item.subtotal(),0);
    console.log(`\n🛒 Total: R$ ${result}`);
}

async function displayCart(userCart) {
    console.log("\nShopee cart list: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal: R$ ${item.subtotal()}`);
    });
}

export { addItem, deleteItem, removeItem, calculateTotal, displayCart };

