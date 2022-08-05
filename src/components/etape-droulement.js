import React from 'react'

import PropTypes from 'prop-types'

import './etape-droulement.css'

const EtapeDroulement = (props) => {
  return (
    <div className="etape-droulement-container">
      <h1 className="etape-droulement-text">{props.heading}</h1>
      <div className="etape-droulement-container1">
        <span className="etape-droulement-text1">{props.text}</span>
        <img
          alt={props.image_alt}
          src={props.image_src}
          loading="lazy"
          className="etape-droulement-image"
        />
      </div>
    </div>
  )
}

EtapeDroulement.defaultProps = {
  image_src: '/playground_assets/illustration-alocaz-visible-1-200h.jpg',
  text: 'Nous avons compris les besoins des consommateurs face à leur envie de mieux consommer quotidiennement.',
  image_alt: 'image',
  heading: '2- CHANGER',
}

EtapeDroulement.propTypes = {
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
}

export default EtapeDroulement
