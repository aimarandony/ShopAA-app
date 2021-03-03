import React from 'react'
import styled from 'styled-components'

const Search = styled.div`
    background: #000;
    padding: 15px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
`

const InputSearch = styled.input`
    background: #1f1f1f;
    color: #fff;
    padding: 5px 10px;
    border: 1px solid #eee;
    font-size: 15px;
    outline: none;
`

const ButtonSearch = styled.button`
    padding: 5px 10px;
    margin-left: 10px;
`

type Props = {
    onSetWordSearch: Function
}

const SearchProducts = ({ onSetWordSearch }: Props) => {

    const setValue = (value: string) => {
        onSetWordSearch(value)
    }

    const openModalCategories = () => {
        console.log("Hello");
    }

    return (
        <Search>
            <InputSearch type="text" onChange={e => setValue(e.target.value)} placeholder="Buscar producto ..." />
            <ButtonSearch onClick={openModalCategories}>🥌</ButtonSearch>
            {/* <ModalCategoriesFilter/> */}
        </Search>
    )
}

export default SearchProducts
