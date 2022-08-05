import React from 'react'

import { Helmet } from 'react-helmet'

import ListeTape from '../components/liste-tape'
import EtapeDroulement from '../components/etape-droulement'
import './professionnels.css'

const Professionnels = (props) => {
  return (
    <div className="professionnels-container">
      <Helmet>
        <title>Professionnels - Alocaz</title>
        <meta property="og:title" content="Professionnels - Alocaz" />
      </Helmet>
      <div className="professionnels-pro-intro">
        <div className="professionnels-pro-text-g">
          <h2 className="professionnels-titre-h2 titre-Partie">
            <span>
              DÉVELOPPEZ VOTRE
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="professionnels-text01">VISIBILITÉ</span>
          </h2>
          <span className="professionnels-texte">
            Écoutant les retours de clients achetant des produits de seconde
            main, il est difficile de trouver des magasins dans lesquels en
            acheter ! Pourquoi ? Notamment parce qu’ils sont généralement mal
            référencés… Alocaz a trouvé la solution : créer une application qui
            permet aux clients de ce secteur de simplifier leurs recherches.
          </span>
          <span className="professionnels-texte1">
            <span></span>
            <span>
              L’application met en avant une liste de magasins de seconde main
              dans une zone géographique choisie par l’utilisateur, grâce à une
              carte interactive aidant à visualiser l’ensemble des boutiques.
            </span>
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/illustration-alocaz-probleme-1200w.jpg"
          className="professionnels-pro-text-d"
        />
      </div>
      <div className="professionnels-pro-section1">
        <h2 className="professionnels-heading">LES AVANTAGES D’ALOCAZ ?</h2>
        <div className="professionnels-container01">
          <ListeTape></ListeTape>
          <ListeTape
            Texte="Accédez à l’espace professionnel de l’application en vous connectant"
            Titre="ETAPE 2"
            image_src="/playground_assets/illustration-alocaz-etape2-1500w.jpg"
            rootClassName="liste-tape-root-class-name"
          ></ListeTape>
          <ListeTape
            Texte="Renseignez l’ensemble des informations sur votre société demandées"
            Titre="ÉTAPE 3"
            image_src="/playground_assets/illustration-alocaz-etape3-1500w.jpg"
            rootClassName="liste-tape-root-class-name1"
          ></ListeTape>
          <ListeTape
            Texte="Mettez en avant les catégories/éléments importants de votre magasins"
            Titre="ÉTAPE 4"
            image_src="/playground_assets/illustration-alocaz-etape4-1500w.jpg"
            rootClassName="liste-tape-root-class-name2"
          ></ListeTape>
        </div>
      </div>
      <div className="professionnels-container02">
        <h1 className="professionnels-text04">POUR LES UTILISATEURS ?</h1>
        <div className="professionnels-container03">
          <EtapeDroulement></EtapeDroulement>
          <EtapeDroulement></EtapeDroulement>
          <EtapeDroulement></EtapeDroulement>
        </div>
      </div>
      <div className="professionnels-container04">
        <img
          alt="image"
          src="/playground_assets/appercu-application-boutique-500w.png"
          className="professionnels-image"
        />
        <div className="professionnels-container05">
          <h2 className="professionnels-heading1 titre-Partie">
            <span>
              NOTRE
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="professionnels-text06">VISION</span>
          </h2>
          <span className="professionnels-text07">
            La mise en place de votre boutique sur l’application Alocaz vous
            permet de mettre en avant des informations pour vos clients.
          </span>
          <div className="professionnels-container06">
            <svg
              viewBox="0 0 585.1428571428571 1024"
              className="professionnels-icon"
            >
              <path d="M438.857 365.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM585.143 365.714c0 34.857-4 70.857-18.857 102.286l-208 442.286c-12 25.143-38.286 40.571-65.714 40.571s-53.714-15.429-65.143-40.571l-208.571-442.286c-14.857-31.429-18.857-67.429-18.857-102.286 0-161.714 130.857-292.571 292.571-292.571s292.571 130.857 292.571 292.571z"></path>
            </svg>
            <span className="professionnels-text08">
              <span></span>
              <span>Votre adresse</span>
              <span></span>
            </span>
          </div>
          <div className="professionnels-container07">
            <svg viewBox="0 0 1024 1024" className="professionnels-icon02">
              <path d="M938 512v-256h-340v256h340zM598 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM342 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM938 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-852q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h852zM896 342l-128 84-128-84v-44l128 86 128-86v44z"></path>
            </svg>
            <span className="professionnels-text12">
              <span></span>
              <span>Vos informations de contact</span>
              <span></span>
            </span>
          </div>
          <div className="professionnels-container08">
            <svg viewBox="0 0 1024 1024" className="professionnels-icon04">
              <path d="M554 362v-84h-84v84h84zM554 554v-84h-84v84h84zM554 746v-84h-84v84h84zM938 426q-34 0-59 26t-25 60 25 60 59 26v170q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-170q36 0 60-25t24-61q0-34-25-60t-59-26v-170q0-36 25-61t59-25h684q36 0 60 25t24 61v170z"></path>
            </svg>
            <span className="professionnels-text16">
              <span>Vos horaires d’ouverture</span>
            </span>
          </div>
          <div className="professionnels-container09">
            <svg viewBox="0 0 1024 1024" className="professionnels-icon06">
              <path d="M128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 554v-84h768v84h-768zM640 298v86h-512v-86h512zM640 640v86h-512v-86h512z"></path>
            </svg>
            <span className="professionnels-text18">
              <span></span>
              <span>Une description détaillée</span>
              <span></span>
            </span>
          </div>
          <div className="professionnels-container10">
            <svg viewBox="0 0 1024 1024" className="professionnels-icon08">
              <path d="M298 214h598v84h-598v-84zM298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM170 704q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM170 192q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18zM170 448q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18z"></path>
            </svg>
            <span className="professionnels-text22">
              <span></span>
              <span>Les catégories de produits</span>
              <span></span>
            </span>
          </div>
          <div className="professionnels-container11">
            <svg viewBox="0 0 1024 1024" className="professionnels-icon10">
              <path d="M362 534l-148 192h596l-192-256-148 192zM982 768q0 34-26 60t-60 26h-768q-34 0-60-26t-26-60v-512q0-34 26-60t60-26h768q34 0 60 26t26 60v512z"></path>
            </svg>
            <span className="professionnels-text26">
              <span></span>
              <span>Des photos de votre boutique</span>
              <span></span>
            </span>
          </div>
          <span className="professionnels-text30">
            Vous allez pouvoir aussi mettre en place les différents événments à
            venir. Votre clientèle pourra mettre des commentaires et ajouter des
            photos supplémentaires pour partager leurs expériences.
          </span>
        </div>
      </div>
      <div className="professionnels-container12">
        <h1 className="professionnels-text31">VOS AVANTAGES</h1>
        <div className="professionnels-container13">
          <span className="professionnels-text32">
            <span>
              Augmenter la visibilité de votre boutique grâce à un meilleur
              référencement
            </span>
          </span>
          <span className="professionnels-text34">
            <span>
              Gagnez
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>davantage de nouveaux clients pour votre boutique</span>
          </span>
          <span className="professionnels-text37">
            <span>
              Accroissez votre chiffre d’affaires grâce à l’augmentation de vos
              ventes
            </span>
            <span></span>
            <span></span>
          </span>
          <span className="professionnels-text41">
            <span>
              Obtenez de nombreux retours positifs par de nouveaux clients
              satisfaits
            </span>
          </span>
        </div>
      </div>
      <div className="professionnels-container14">
        <div className="professionnels-container15">
          <h2 className="professionnels-heading2 titre-Partie">
            <span>
              ADOPTEZ
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="professionnels-text44">ALOCAZ</span>
          </h2>
          <span className="professionnels-text45">
            Testez l’application Alocaz dès maintenant en la téléchargeant. Prêt
            à mieux consommer et porter une action écologique ? Alors qu’est ce
            que vous attendez ? Faite le premier pas !
          </span>
          <span className="professionnels-text46">
            <span>Télécharger l’application :</span>
          </span>
          <div className="professionnels-container16">
            <img
              alt="image"
              src="/playground_assets/appstore.svg"
              className="professionnels-image1"
            />
            <img
              alt="image"
              src="/playground_assets/playstore.svg"
              className="professionnels-image2"
            />
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/illustration-alocaz-solution-1200w.jpg"
          className="professionnels-image3"
        />
      </div>
    </div>
  )
}

export default Professionnels
