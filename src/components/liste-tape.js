import React from 'react'

import PropTypes from 'prop-types'

import './liste-tape.css'

const ListeTape = (props) => {
  return (
    <div className={`liste-tape-container ${props.rootClassName} `}>
      <p className="liste-tape-text">{props.Titre}</p>
      <div className="liste-tape-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="liste-tape-image"
        />
        <span className="liste-tape-text1">{props.Texte}</span>
      </div>
    </div>
  )
}

ListeTape.defaultProps = {
  Texte:
    'Souscrivez à l’abonnement proposé par Alocaz pour faire le premier pas',
  rootClassName: '',
  image_src: '/playground_assets/illustration-alocaz-etape1-1500w.jpg',
  image_alt: 'image',
  Titre: 'ETAPE 1',
}

ListeTape.propTypes = {
  Texte: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  Titre: PropTypes.string,
}

export default ListeTape
