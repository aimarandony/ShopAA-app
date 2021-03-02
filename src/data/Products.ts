import { Product } from "../models/Product";
import { categories } from "./Categories"

export const products: Product[] = [
    {
        id: 1,
        description: "Gloria Azul Grande",
        price: 3.30,
        category: categories[0],
        status: true
    },
    {
        id: 2,
        description: "Gloria Amarrillo Grande",
        price: 3.40,
        category: categories[0],
        status: true
    },
    {
        id: 3,
        description: "Gloria Roja Grande",
        price: 3.40,
        category: categories[0],
        status: true
    },
    {
        id: 4,
        description: "Gloria Deslactosada Grande",
        price: 3.50,
        category: categories[0],
        status: true
    },
    {
        id: 5,
        description: "Inka Cola 3Lt.",
        price: 10.50,
        category: categories[1],
        status: true
    },
    {
        id: 6,
        description: "Primor 1Lt.",
        price: 7.50,
        category: categories[2],
        status: true
    },
    {
        id: 7,
        description: "Cocinero 1Lt.",
        price: 6.00,
        category: categories[2],
        status: true
    },
    {
        id: 8,
        description: "Sao 1Lt.",
        price: 5.50,
        category: categories[2],
        status: true
    }
]