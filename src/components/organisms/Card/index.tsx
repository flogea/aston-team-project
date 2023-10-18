import React from 'react'

import './Card.scss'

import fav from '../../../assets/icons/fav.png'
import favFilled from '../../../assets/icons/fav-filled.png'

function Card({ id, urls, description = 'title', liked_by_user }) {
  const [isLiked, setIsLiked] = React.useState(liked_by_user)
  const handleLikePost = () => {
    setIsLiked(() => !isLiked)
  }

  return (
    <div className='card'>
      <div className='fav'>
        <button className='favBtn' onClick={handleLikePost}>
          <img src={isLiked ? favFilled : fav} alt='' />
        </button>
      </div>
      <div className='cardPicture'>
        <img src={urls.regular} alt='image' />
      </div>
      <div className='cardBottom'>
        <div className='cardTitle'>{description}</div>
      </div>
    </div>
  )
}

export default Card
