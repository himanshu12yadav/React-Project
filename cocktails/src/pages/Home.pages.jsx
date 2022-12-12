import React from 'react';
import CocktailList from '../components/CocktailList.components';
import SearchForm from '../components/SearchForm.components';

const Home = () => {
    return (
        <main>
            <SearchForm />
            <CocktailList/>
        </main>
    );
}

export default Home;