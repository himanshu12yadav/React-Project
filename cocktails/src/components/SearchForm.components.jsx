import { useEffect } from 'react';
import { useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
    const serchValue = useRef('');
    const { setSearchTerm } = useGlobalContext();
    
    const searchCocktail = () => {
        setSearchTerm(serchValue.current.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
    }


    useEffect(() => {
        serchValue.current.focus();
    }, []);

    return (
        <section className="section search">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">search your favourite cocktail</label>
                    <input type='text' name='name' id='name' ref={serchValue} onChange={searchCocktail} />
                </div>
            </form>
        </section>
    )
}

export default SearchForm;