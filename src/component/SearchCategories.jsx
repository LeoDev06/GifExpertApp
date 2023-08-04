import { useState } from "react"
import PropTypes from 'prop-types'

export const SearchCategories = ({onNewCategory}) => {

  const [searchCategories, setSearchCategories] = useState('')

  const onSearchChange = (event) => {
    const search = event.target.value;
    setSearchCategories(search);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const search = searchCategories.trim();
    if(search.length <= 1) return;
    /*------------------------------------------------------------------
    - enviando directamente al state del componente GiftExpertApp      -
    - setCategories(({categories})=>[searchCategories, ...categories]) -
    -------------------------------------------------------------------*/

    /*---------------------------
    - Emitiendo evento al padre -
    ----------------------------*/
    onNewCategory(search);
    setSearchCategories('');
  }

  return (
    <form className="content__input" onSubmit={(event) => onSubmit(event)}>
      <input 
        type="text" 
        placeholder="Buscar Gifs"
        value={searchCategories}
        onChange={(event) => onSearchChange(event)}
        className="input__search"
      />
    </form>
  )
}

SearchCategories.propTypes = {
  onNewCategory: PropTypes.func
}