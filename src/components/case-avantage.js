import React from 'react'

import PropTypes from 'prop-types'

import './case-avantage.css'

const CaseAvantage = (props) => {
  return (
    <div className={`case-avantage-container ${props.rootClassName} `}>
      <h1 className="case-avantage-text">{props.heading}</h1>
      <div className="case-avantage-container1">
        <span className="case-avantage-text1">{props.text}</span>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="case-avantage-image"
        />
      </div>
    </div>
  )
}

CaseAvantage.defaultProps = {
  image_src: '/playground_assets/illustration-alocaz-garantie-1400w.jpg',
  image_alt: 'image',
  rootClassName: '',
  heading: '1- GARANTIE',
  text: 'Alocaz garantit un accès à l’information de manière réactive et intuitive pour les utilisateurs.',
}

CaseAvantage.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default CaseAvantage
