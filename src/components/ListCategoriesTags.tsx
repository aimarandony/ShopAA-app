import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { categories } from '../data/Categories'
import { Category } from '../models/Category'
import CategoryTagButton from './CategoryTagButton'

const TagsCategories = styled.div`
    height: auto;
    max-height: 350px;
    overflow: auto;
`

const ListCategoriesTags = () => {

    const [listCategories, setListCategories] = useState<Category[]>([])

    useEffect(() => {
        setListCategories(categories)
    }, [])

    return (
        <TagsCategories>
            {
                listCategories.map(data => <CategoryTagButton key={data.id} category={data} />)
            }
        </TagsCategories>
    )
}

export default ListCategoriesTags
