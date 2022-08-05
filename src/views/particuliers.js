import React from 'react'

import { Helmet } from 'react-helmet'

import CaseAvantage from '../components/case-avantage'
import AppComponent from '../components/component'
import './particuliers.css'

const Particuliers = (props) => {
  return (
    <div className="particuliers-container">
      <Helmet>
        <title>Particuliers - Alocaz</title>
        <meta property="og:title" content="Particuliers - Alocaz" />
      </Helmet>
      <div className="particuliers-container01">
        <div className="particuliers-container02">
          <div className="particuliers-container03">
            <h1 className="particuliers-text">
              <span>C</span>
              <span>ONSOMMEZ MIEUX</span>
              <br></br>
              <span>ET MOINS CHER !</span>
            </h1>
            <span className="particuliers-text05">AVEC ALOCAZ</span>
            <div className="particuliers-container04">
              <img
                alt="image"
                src="/playground_assets/appstore.svg"
                className="particuliers-image"
              />
              <img
                alt="image"
                src="/playground_assets/playstore.svg"
                className="particuliers-image01"
              />
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/application-alocaz-600h.png"
            className="particuliers-image02"
          />
        </div>
      </div>
      <div className="particuliers-container05">
        <div className="particuliers-container06">
          <h2 className="particuliers-heading titre-Partie">
            <span>QU’EST CE QU’</span>
            <span className="particuliers-text07">ALOCAZ</span>
            <span> ?</span>
          </h2>
          <span className="particuliers-text09">
            Alocaz à pour objectif la mise en relation entre les professionnels
            de la seconde main avec leurs clients et prospects. Elle propose un
            meilleur référencement et une visibilité accrue pour les
            professionnels, ainsi qu’un accès aux informations plus accessible
            pour les consommateurs.
          </span>
          <span className="particuliers-text10">
            <span></span>
            <span>
              Grâce à une application mobile qui permet de mettre en relation
              les professionnels de la seconde main avec ses consommateurs,
              facilitant alors la recherche de l’utilisateur à travers diverses
              fonctionnalités.
            </span>
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/illustration-alocaz-carte-1500w.jpg"
          className="particuliers-image03"
        />
      </div>
      <div className="particuliers-container07">
        <h1 className="particuliers-text13">LES AVANTAGES D’ALOCAZ ?</h1>
        <div className="particuliers-container08">
          <CaseAvantage rootClassName="case-avantage-root-class-name2"></CaseAvantage>
          <div className="particuliers-container09">
            <h1 className="particuliers-text14">2- CHANGER</h1>
            <div className="particuliers-container10">
              <span className="particuliers-text15">
                Nous avons compris les besoins des consommateurs face à leur
                envie de mieux consommer quotidiennement.
              </span>
              <img
                alt="image"
                src="/playground_assets/illustration-alocaz-visible-1-1400w.jpg"
                className="particuliers-image04"
              />
            </div>
          </div>
          <div className="particuliers-container11">
            <h1 className="particuliers-text16">3- GRATUIT</h1>
            <div className="particuliers-container12">
              <span className="particuliers-text17">
                L’utilisation de l’application ALOCAZ est totalement gratuite
                pour l&apos;ensemble des utilisateurs.
              </span>
              <img
                alt="image"
                src="/playground_assets/illustration-alocaz-changer-1-1400w.jpg"
                className="particuliers-image05"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="particuliers-container13">
        <img
          alt="image"
          src="/playground_assets/illustration-alocaz-magasin-1500w.jpg"
          className="particuliers-image06"
        />
        <div className="particuliers-container14">
          <h2 className="particuliers-heading1 titre-Partie">
            <span>
              NOTRE
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="particuliers-text19">VISION</span>
          </h2>
          <span className="particuliers-text20">
            Nous vivons aujourd’hui dans un monde dans lequel la surconsommation
            est de mise, en effet, les grandes multinationales mettent beaucoup
            de moyens pour que le consommateur soit satisfait et obtienne ce
            qu’il souhaite le plus rapidement possible.
          </span>
          <span className="particuliers-text21">
            <span></span>
            <span>
              Nous pouvons simplement acheter tout ce dont nous avons besoin en
              seconde main à un prix plus attractif que le neuf. De plus, cela
              est plus écologique et permet de réemployer des objets qui peuvent
              toujours servir, être réparés ou bien remis au goût du jour.
            </span>
          </span>
        </div>
      </div>
      <div className="particuliers-container15">
        <h1 className="particuliers-text24">LES CHIFFRES CLÉS</h1>
        <div className="particuliers-container16">
          <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
          <div className="particuliers-container17">
            <div className="particuliers-container18">
              <span className="particuliers-text25">80%</span>
              <svg viewBox="0 0 1024 1024" className="particuliers-icon">
                <path d="M598 362q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM598 534q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM426 726q18 0 31 12t13 30-13 30-31 12-30-12-12-30 12-30 30-12zM426 362q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM598 874q20 0 20 22t-20 22q-22 0-22-22t22-22zM598 726q18 0 30 12t12 30-12 30-30 12-31-12-13-30 13-30 31-12zM896 576q22 0 22 22 0 20-22 20t-22-20q0-22 22-22zM768 214q18 0 30 12t12 30-12 30-30 12-30-12-12-30 12-30 30-12zM768 384q18 0 30 12t12 30-12 31-30 13-30-13-12-31 12-30 30-12zM768 726q18 0 30 12t12 30-12 30-30 12-30-12-12-30 12-30 30-12zM768 554q18 0 30 13t12 31-12 30-30 12-30-12-12-30 12-31 30-13zM426 534q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM426 298q-18 0-30-12t-12-30 12-30 30-12 31 12 13 30-13 30-31 12zM426 150q-20 0-20-22t20-22q22 0 22 22t-22 22zM426 874q22 0 22 22t-22 22q-20 0-20-22t20-22zM128 576q22 0 22 22 0 20-22 20t-22-20q0-22 22-22zM598 150q-22 0-22-22t22-22q20 0 20 22t-20 22zM598 298q-18 0-31-12t-13-30 13-30 31-12 30 12 12 30-12 30-30 12zM896 448q-22 0-22-22 0-20 22-20t22 20q0 22-22 22zM256 214q18 0 30 12t12 30-12 30-30 12-30-12-12-30 12-30 30-12zM128 406q22 0 22 20 0 22-22 22t-22-22q0-20 22-20zM256 384q18 0 30 12t12 30-12 31-30 13-30-13-12-31 12-30 30-12zM256 726q18 0 30 12t12 30-12 30-30 12-30-12-12-30 12-30 30-12zM256 554q18 0 30 13t12 31-12 30-30 12-30-12-12-30 12-31 30-13z"></path>
              </svg>
            </div>
            <div className="particuliers-container19">
              <span className="particuliers-text26">
                <span>
                  Encore aujourd’hui, 80% des produits neufs achetés sont
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  jetés en décharge ou incinérés
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>au lieu d’être recyclés ou réutilisés.</span>
              </span>
            </div>
          </div>
          <div className="particuliers-container20">
            <div className="particuliers-container21">
              <span className="particuliers-text30">52%</span>
              <svg viewBox="0 0 1024 1024" className="particuliers-icon2">
                <path d="M554 554v-256h-84v256h84zM554 726v-86h-84v86h84zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
              </svg>
            </div>
            <div className="particuliers-container22">
              <span className="particuliers-text31">
                <span>
                  52% des personnes interrogées* ont indiqués avoir des
                  difficultés à
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  trouver des magasins
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>de seconde main près de chez eux.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="particuliers-container23">
        <div className="particuliers-container24">
          <h2 className="particuliers-heading2 titre-Partie">
            <span>
              ADOPTEZ
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="particuliers-text36">ALOCAZ</span>
          </h2>
          <span className="particuliers-text37">
            Testez l’application Alocaz dès maintenant en la téléchargeant. Prêt
            à mieux consommer et porter une action écologique ? Alors qu’est ce
            que vous attendez ? Faite le premier pas !
          </span>
          <span className="particuliers-text38">
            <span>Télécharger l’application :</span>
          </span>
          <div className="particuliers-container25">
            <img
              alt="image"
              src="/playground_assets/appstore.svg"
              className="particuliers-image07"
            />
            <img
              alt="image"
              src="/playground_assets/playstore.svg"
              className="particuliers-image08"
            />
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/illustration-alocaz-solution-1500w.jpg"
          className="particuliers-image09"
        />
      </div>
    </div>
  )
}

export default Particuliers
