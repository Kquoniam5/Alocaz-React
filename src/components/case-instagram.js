import React from 'react'

import PropTypes from 'prop-types'

import './case-instagram.css'

const CaseInstagram = (props) => {
  return (
    <div className="case-instagram-container">
      <h2 className="case-instagram-text sous-Titre">{props.heading}</h2>
      <div className="case-instagram-container1">
        <div className="case-instagram-container2"></div>
        <div className="case-instagram-container3">
          <button className="case-instagram-button button">
            {props.button}
          </button>
          <span className="case-instagram-text1">{props.text}</span>
        </div>
      </div>
    </div>
  )
}

CaseInstagram.defaultProps = {
  text: "Suivez-nous sur Instagram pour nous soutenir et en apprendre davantage sur l'équipe et l'avancement du projet.",
  heading: 'Instagram',
  button: 'Rejoindre',
}

CaseInstagram.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
  button: PropTypes.string,
}

export default CaseInstagram
