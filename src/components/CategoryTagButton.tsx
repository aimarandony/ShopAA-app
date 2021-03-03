import React from 'react'
import styled from 'styled-components'
import { Category } from '../models/Category'

const TagCategory = styled.div`
    background: ${props => props.color};
    padding: 5px 10px;
    margin-bottom: 5px;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    &:hover{
        background: #161616;
    }
    &:last-child{
        margin-bottom: 0;
    }
`

type Props = {
    category: Category
}

const CategoryTagButton = ({ category } : Props) => {
    return (
        <TagCategory color={category.color}>
            {category.name}
        </TagCategory>
    )
}

export default CategoryTagButton
