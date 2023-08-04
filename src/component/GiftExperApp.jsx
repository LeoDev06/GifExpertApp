import { useState } from "react"
import { SearchCategories, GifGrid } from "./index";

export const GiftExperApp = () => {

  const [categories, setCategories] = useState(['Dragon ball']);

  const onAddCategories = (newCategory) => {
    const category = newCategory.toLowerCase();
    if(categories.includes(category)) return;
    setCategories([category])
  }

  return (
    <div className="main">
      <div className="main__head">
        <h1 className="main__title">GiftExperApp</h1>
        <p className="main__subtitle">Encuentra Gifs espectaculares</p>
      </div>
      
      <SearchCategories onNewCategory = { (event) => onAddCategories(event)} />
      
      <section className="container__letters">
        {
          categories.map((category) =>{
            return(
              <GifGrid key={category} category = {category}/>
            )
          })
        }
      </section>

    </div>
  )
}
