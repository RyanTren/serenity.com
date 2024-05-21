// import React from 'react';
import './styles/footer.css';
import githubFooter from './assets/githubFooter.png';
import instagramFooter from './assets/instagramFooter.png';
import linkedinFooter from './assets/linkedinFooter.png';


export function Footer() {
  return (
    <footer className="footer-background">
      <div className="background">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1600 1000"
        >
          <defs>
            <path
              id="wave1"
              fill="rgba(183, 0, 255, 0.6) "
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
          s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
            <path
              id="wave2"
              fill="rgba(255, 0, 189, 0.3)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
          s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
            <path
              id="wave3"
              fill="rgba(3, 0, 255, 0.5)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
          s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave1" opacity=".4">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="7s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave2" opacity=".6">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave3" opacity=".9">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="5s"
                calcMode="spline"
                values="0 230;-140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>


      </div>

      <section>
        <ul className="socials">
          <li><a className="fa-brands fa-instagram" href="https://www.instagram.com/uohto/"><img src={instagramFooter}/></a></li>
          <li><a className="fa-brands fa-github" href="https://github.com/RyanTren/"><img src={githubFooter} /></a></li>
          <li><a className="fa-brands fa-linkedin" href="https://www.linkedin.com/in/ryantren/"><img src={linkedinFooter}/></a></li>
        </ul>
        <ul className="links">
          <li><a className="link-colors" href="index.html">Home</a></li>
          <li><a className="link-colors" href="https://www.linkedin.com/in/ryantren/">About</a></li>
          <li><a className="link-colors" href="https://ryantren.github.io/protfolio-website/">Portfolio</a></li>
        </ul>
        <p className="footer-legal">Ryan Tran © 2024 All Rights Reserved</p>
      </section>
    </footer>
  );
}

export default Footer;
