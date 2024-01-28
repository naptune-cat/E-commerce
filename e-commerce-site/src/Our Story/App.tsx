import { FC } from 'react';

import './style.css';
// const im = import('./painting.png');
export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <div className="mainStyle1">
        <div className="heading">
          <h1>An authentic platform for pure craft.</h1>
        </div>
        <div className="paraStyle1">
          <p>
            Our platform celebrates the fusion of traditional art forms with
            contemporary aesthetics, providing a space for artists to explore
            new expressions while preserving the essence of their heritage. Each
            piece is a testament to the resilience and creativity of Indian
            artisans, bringing forth a unique blend of history and modernity.
          </p>
        </div>
      </div>
      <hr className="lineDivider"></hr>
      <div className="mainStyle2">
        <div className="texts">
          <div className="heading2">
            <h1>
              We aim at passing down the traditional art to upcoming
              generations.
            </h1>
          </div>
          <div className="paraStyle2">
            <p>
              Immerse yourself in the captivating world of Indian art, where
              every stroke, weave, and detail tells a story deeply rooted in
              tradition. From intricate handwoven textiles to mesmerizing folk
              paintings, our curated collection showcases the authentic
              craftsmanship of local traders who have inherited and perfected
              their art over generations.
            </p>
          </div>
        </div>
        <div className="imgSpace">{/* <img src="" /> */}</div>
      </div>
      <hr className="lineDivider"></hr>
      <div className="mainStyle1">
        <div className="texts">
          <div className="paraStyle1">
            <p>
              We believe that art has the power to transcend borders and connect
              people from different corners of the world. Our platform acts as a
              cultural ambassador, fostering a global appreciation for the rich
              artistic traditions of India. Whether you're a seasoned collector
              or a first-time admirer, our collection offers something for
              everyone..
            </p>
          </div>
          <div className="heading">
            <h1>Bridging Cultures, Connecting Hearts♡︎</h1>
          </div>
        </div>
        <hr className="lineDivider"></hr>
        <div className="mainStyle2-1">
          <div className="imgSpace">{/* <img src="" /> */}</div>
          <div className="texts-1">
            <div className="heading2-1">
              <h1>Proudly handcrafted with love❤︎ in India.</h1>
            </div>
            <div className="paraStyle2-1">
              <p>
                Embark on a journey through the colors, textures, and narratives
                of India's artistic landscape with [Meawmeaw.com]. Join us in
                celebrating the beauty of diversity, preserving cultural
                heritage, and making Indian art a cherished part of homes around
                the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
