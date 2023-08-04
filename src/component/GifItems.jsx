import PropTypes from 'prop-types';

export const GifItems = ({id, title, url}) => {

  return (
    <div className="letters" key={id}>
      <p className='letters__title'>{title}</p>
      <img className='letters__img' src={url}/>
    </div>
  )
}

GifItems.propTypes = {
  id : PropTypes.string,
  title : PropTypes.string,
  url : PropTypes.string
}