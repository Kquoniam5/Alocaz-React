import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <div className="component-container1">
        <span className="component-text">{props.text}</span>
        <svg viewBox="0 0 1024 1024" className="component-icon">
          <path
            d="M214 768h596v86h-596v-86zM384 682v-256h-170l298-298 298 298h-170v256h-256z"
            className=""
          ></path>
        </svg>
      </div>
      <div className="component-container2">
        <span className="component-text1">
          <span className="">
            La croissance de la seconde main devrait être exponentielle, soit
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="">
            25 fois supérieure d’ici 4 ans
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="">à la croissance de l’e-commerce.</span>
        </span>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  text: 'x25',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default AppComponent
