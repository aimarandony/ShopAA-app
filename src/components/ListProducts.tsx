import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { products } from '../data/Products'
import { Product } from '../models/Product'
import ProductComponent from './Product'

const CardProducts = styled.div`
    height: calc(100vh - 55px);
    overflow: auto;
`

type Props = {
    wordKey: string
}

const ListProducts = ({ wordKey = "" }: Props) => {
    // eslint-disable-next-line
    const [listProducts, setListProducts] = useState<Product[]>(products)
    const [filterData, setFilterData] = useState<Product[]>([])

    useEffect(() => {        
        setFilterData(listProducts.filter(data => data.description.toLowerCase().includes(wordKey?.toLowerCase())))
        // eslint-disable-next-line
    }, [wordKey])

    return (
        <CardProducts>
            {
                filterData.length === 0 ? listProducts.map(data => <ProductComponent key={data.id} product={data} />) :
                    filterData.map(data => <ProductComponent key={data.id} product={data} />)
            }
        </CardProducts>
    )
}

export default ListProducts
