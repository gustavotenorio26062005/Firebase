import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';

const Carrossel = ({ animes, onImageClick }) => {
  return (
    <BootstrapCarousel>
      {animes.map((anime, index) => (
        index % 2 === 0 && (
          <BootstrapCarousel.Item key={index}>
            <div className="d-flex justify-content-center">
              <div className="position-relative w-50" onClick={() => onImageClick(anime.id)}>
                <img
                  className="d-block w-100"
                  src={anime.url}
                  alt={`Imagem ${index + 1}`}
                  style={{ height: '400px', objectFit: 'cover' }} // Adicionando estilo inline para garantir consistência
                />
                <BootstrapCarousel.Caption>
                  <p>{anime.name}</p>
                </BootstrapCarousel.Caption>
              </div>
              {animes[index + 1] && (
                <div className="position-relative w-50" onClick={() => onImageClick(animes[index + 1].id)}>
                  <img
                    className="d-block w-100"
                    src={animes[index + 1].url}
                    alt={`Imagem ${index + 2}`}
                    style={{ height: '400px', objectFit: 'cover' }} // Adicionando estilo inline para garantir consistência
                  />
                  <BootstrapCarousel.Caption>
                    <p>{animes[index + 1].name}</p>
                  </BootstrapCarousel.Caption>
                </div>
              )}
            </div>
          </BootstrapCarousel.Item>
        )
      ))}
    </BootstrapCarousel>
  );
};

export default Carrossel;
