## 🛒 Shopee Cart – Carrinho de Compras em JavaScript

Este projeto é uma simulação simples de um carrinho de compras ao estilo **Shopee**, desenvolvido em JavaScript (Node.js).
Ele permite criar itens, adicioná-los ao carrinho, removê-los, listar o carrinho e calcular o total.

---

## 📁 Estrutura do Projeto

```
/
├── index.js
├── services
│   ├── cart.js
│   └── item.js
└── README.md
```

---

## 🚀 Funcionalidades

* ✅ Criar itens com nome, preço e quantidade
* ✅ Adicionar itens ao carrinho
* ✅ Remover 1 unidade de um item
* ✅ Deletar completamente um item
* ✅ Exibir os itens do carrinho
* ✅ Calcular o valor total
* ✅ Lista de desejos (Wishlist) — futura expansão

---

## 🧩 Como funciona

### **1. Criando itens**

Os itens são criados através da função `createItem`:

```js
const item1 = await createItem("hotwheels ferrari", 20.99, 7);
const item2 = await createItem("hotwheels", 39.99, 3);
```

---

### **2. Adicionando itens ao carrinho**

```js
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
```

---

### **3. Removendo 1 unidade de um item**

```js
await cartService.removeItem(myCart, item1);
```

---

### **4. Deletando um item inteiro**

```js
await cartService.deleteItem(myCart, item1.name);
```

---

### **5. Exibindo o carrinho**

```js
await cartService.displayCart(myCart);
```

---

### **6. Calculando o total**

```js
await cartService.calculateTotal(myCart);
```

---

## 🧠 Lógica de Funcionamento

### **item.js**

Cria itens com subtotal calculado automaticamente.

```js
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    };
}
```

---

### **cart.js**

Gerencia todas as ações do carrinho:

* `addItem` — adiciona um item
* `removeItem` — reduz quantidade ou remove
* `deleteItem` — remove totalmente
* `displayCart` — lista itens
* `calculateTotal` — soma geral

---

## ▶️ Como executar

1. Instale o Node.js (v18+ recomendado)
2. Clone o repositório:

```sh
git clone https://github.com/seuusuario/seu-repo.git
```

3. Execute no terminal:

```sh
node index.js
```

---
