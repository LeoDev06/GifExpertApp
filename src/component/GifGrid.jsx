import PropTypes from 'prop-types'
import { GifItems } from './index';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h2 className='container__title'>{category}</h2>
      {
        isLoading && (<h3 className='container__loading'>Cargando....</h3>)
      }
      <section className="content__letters">
        {
          images.map((img) =>{
            return(
              <GifItems key={img.id} {...img}/>
            )
          })
        }
      </section>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string
}
