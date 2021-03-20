//Object property shorthand

const name = 'Anish'
const userAge = 32

const user = {
    name,
    age: userAge,
    location: 'Sydney'
}

console.log(user)

//Object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

const {label: productLabel, stock, rating = 5} = product

const transaction = (type, {label, stock, rating = 5}) => {
    console.log(label)
    console.log(stock)
    console.log(rating)
}

transaction('order', product)