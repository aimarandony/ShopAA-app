import React, { useState } from 'react'
import ListProducts from '../../components/ListProducts'
import SearchProducts from '../../components/SearchProducts'

const Home = () => {

    const [wordSearch, setWordSearch] = useState<string>("")

    return (
        <div>
            <ListProducts wordKey={wordSearch}/>
            <SearchProducts onSetWordSearch={setWordSearch}/>
        </div>
    )
}

export default Home
