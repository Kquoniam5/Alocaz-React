import React from 'react'

import PropTypes from 'prop-types'

import './case-facebook.css'

const CaseFacebook = (props) => {
  return (
    <div className="case-facebook-container">
      <h2 className="case-facebook-text sous-Titre">{props.heading}</h2>
      <div className="case-facebook-container1">
        <div className="case-facebook-container2"></div>
        <div className="case-facebook-container3">
          <button className="case-facebook-button button">
            {props.button}
          </button>
          <span className="case-facebook-text1">{props.text}</span>
        </div>
      </div>
    </div>
  )
}

CaseFacebook.defaultProps = {
  text: "Suivez-nous sur Facebook pour nous soutenir et en apprendre davantage sur l'équipe et l'avancement du projet.",
  button: 'Rejoindre',
  heading: 'Facebook',
}

CaseFacebook.propTypes = {
  text: PropTypes.string,
  button: PropTypes.string,
  heading: PropTypes.string,
}

export default CaseFacebook
