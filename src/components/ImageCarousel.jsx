import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = ({ items, onImageClick }) => {
  return (
    <Carousel>
      {items.map((item, index) => (
        index % 2 === 0 && (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              <div className="position-relative w-50" onClick={() => onImageClick(item.id)}>
                <img
                  className="d-block w-100"
                  src={item.url}
                  alt={`Image ${index + 1}`}
                />
                <Carousel.Caption>
                  <p>{item.name}</p>
                </Carousel.Caption>
              </div>
              {items[index + 1] && (
                <div className="position-relative w-50" onClick={() => onImageClick(items[index + 1].id)}>
                  <img
                    className="d-block w-100"
                    src={items[index + 1].url}
                    alt={`Image ${index + 2}`}
                  />
                  <Carousel.Caption>
                    <p>{items[index + 1].name}</p>
                  </Carousel.Caption>
                </div>
              )}
            </div>
          </Carousel.Item>
        )
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
