import React from 'react'

import PropTypes from 'prop-types'

import './case-tik-tok.css'

const CaseTikTok = (props) => {
  return (
    <div className="case-tik-tok-container">
      <h2 className="case-tik-tok-text sous-Titre">{props.heading}</h2>
      <div className="case-tik-tok-container1">
        <div className="case-tik-tok-container2"></div>
        <div className="case-tik-tok-container3">
          <button className="case-tik-tok-button button">{props.button}</button>
          <span className="case-tik-tok-text1">{props.text}</span>
        </div>
      </div>
    </div>
  )
}

CaseTikTok.defaultProps = {
  heading: 'TikTok',
  text: "Suivez-nous sur TikTok pour nous soutenir et en apprendre davantage sur l'équipe et l'avancement du projet.",
  button: 'Rejoindre',
}

CaseTikTok.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
}

export default CaseTikTok
