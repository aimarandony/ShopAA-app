import React from 'react'
import { Product } from '../models/Product'
import styled from 'styled-components'

const CardProduct = styled.div`
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid salmon;
    &:hover{
        background: #0f0f0f;
    }
    .left{
        display: flex;
        flex-direction: column;
    }
`

const DescriptionProduct = styled.p`
    margin-bottom: 5px;
`

const TagCategory = styled.span`
    font-size: 12px;
    padding: 2px 6px;
    background: ${props => props.color}
`

type Props = {
    product: Product
}

const ProductComponent = ({ product }: Props) => {
    return (
        <CardProduct>
            <div className="left">
                <div>
                    <DescriptionProduct>{product.description}</DescriptionProduct>
                </div>
                <div>
                    <TagCategory color={product.category.color}>{product.category.name}</TagCategory>
                </div>
            </div>
            <div>
                <h4>S/{product.price}</h4>
            </div>
        </CardProduct>
    )
}

export default ProductComponent
