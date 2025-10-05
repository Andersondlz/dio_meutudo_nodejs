export const products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 699.99 },
    { id: 3, name: 'Tablet', price: 499.99 },
  ];

export const getProductById = (id) => {
    return products.find(product => product.id === id);
}