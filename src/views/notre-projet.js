import React from 'react'

import { Helmet } from 'react-helmet'

import Affichage1 from '../components/affichage-1'
import CaseFacebook from '../components/case-facebook'
import CaseInstagram from '../components/case-instagram'
import CaseTikTok from '../components/case-tik-tok'
import './notre-projet.css'

const NotreProjet = (props) => {
  return (
    <div className="notre-projet-container">
      <Helmet>
        <title>Alocaz</title>
        <meta property="og:title" content="Alocaz" />
      </Helmet>
      <Affichage1></Affichage1>
      <div className="notre-projet-container1">
        <h1 className="notre-projet-text sous-Titre">
          Découvrir notre travail
        </h1>
        <video
          src="/playground_assets/presentation-alocaz.mp4"
          loop
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          autoPlay
          className="notre-projet-video"
        ></video>
      </div>
      <div className="notre-projet-container2">
        <CaseFacebook></CaseFacebook>
        <CaseInstagram></CaseInstagram>
        <CaseTikTok></CaseTikTok>
      </div>
    </div>
  )
}

export default NotreProjet
