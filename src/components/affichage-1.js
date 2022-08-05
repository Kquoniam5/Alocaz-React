import React from 'react'

import PropTypes from 'prop-types'

import './affichage-1.css'

const Affichage1 = (props) => {
  return (
    <div className={`affichage-1-container ${props.rootClassName} `}>
      <div className="affichage-1-container1">
        <h2 className="affichage-1-heading titre-Partie">{props.Heading}</h2>
        <span className="affichage-1-text">{props.text}</span>
        <span className="affichage-1-text1">{props.text1}</span>
      </div>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="affichage-1-image"
      />
    </div>
  )
}

Affichage1.defaultProps = {
  Heading: 'Notre projet',
  text: "Dans le cadre de leurs études, un groupe de cinq étudiants de My Digital School sont chargés de lancer une startup. Pendant une période de 18 mois, ils doivent développer ce projet en prenant en compte la communication, la création du produit, l'étude de marché et le business plan.",
  text1:
    "C'est une réelle mise en situation pour ces étudiants qui proposent des idées innovantes. Ceux-ci ont choisi de créer Alocaz. ",
  image_alt: 'image',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMxfHxTVFVERU5UfGVufDB8fHx8MTY1ODQ0MzE1NQ&ixlib=rb-1.2.1&h=300',
}

Affichage1.propTypes = {
  Heading: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default Affichage1
