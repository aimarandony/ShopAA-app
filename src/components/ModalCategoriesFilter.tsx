import React from 'react'
import styled from 'styled-components'
import ListCategoriesTags from './ListCategoriesTags'

const ModalCategory = styled.div`
    background: #000;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
`

const ButtonClose = styled.div`
    position: absolute;
    right: -15px;
    top: -15px;
    background: white;
    border-radius: 50%;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items:center;
    &:hover{
        background: #333;
    }
`

const ModalCategoriesFilter = () => {
    return (
        <ModalCategory>
            <ButtonClose>
                ❌
            </ButtonClose>
            <ListCategoriesTags />
        </ModalCategory>
    )
}

export default ModalCategoriesFilter
