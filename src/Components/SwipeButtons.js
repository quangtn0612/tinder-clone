import React from 'react'
import CachedIcon from '@material-ui/icons/Cached';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import './SwipeButtons.css'

function SwipeButtons() {
  return (
    <div className = "SwipeButtons">
      <IconButton className = "Button">
        <CachedIcon fontSize = "large" />
      </IconButton>
      
      <IconButton className = "Button">
        <CloseIcon fontSize = "large" />
      </IconButton>

      <IconButton className = "Button">
        <StarIcon fontSize = "large"/>
      </IconButton>

      <IconButton className = "Button">
        <FavoriteIcon fontSize = "large" />
      </IconButton>

      <IconButton className = "Button">
        <FlashOnIcon fontSize = "large" />
      </IconButton>

      
    </div>
  )
}

export default SwipeButtons

