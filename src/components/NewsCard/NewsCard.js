import './NewsCard.scss';

import { BsCardImage } from 'react-icons/bs';
import PropTypes from 'prop-types';
import React from 'react';

const NewsCard = ({ images, description, links, headline, categories }) => {
  const item = categories.find((el) => el.createDate);
  return (
    <div className="component news-card">
      <a
        className="card-link"
        target="_blank"
        rel="noopener noreferrer"
        href={links.web.short.href}
      >
        {images[0]?.url ? (
          <div className="image-wrapper">
            <figure>
              <div className="card-image">
                <img src={images[0].url} alt={images[0].alt} />
                {images[0]?.credit ? (
                  <div className="image-credit">
                    <BsCardImage />{' '}
                    <span className="sr-only">Image Credit:</span>{' '}
                    {images[0].credit}
                  </div>
                ) : null}
              </div>
              {images[0]?.caption ? (
                <figcaption className="image-caption">
                  Image Caption: {images[0].caption}
                </figcaption>
              ) : null}
            </figure>
          </div>
        ) : null}
        <div className="card-content">
          <h2 className="card-title">{headline}</h2>
          <p>{description}</p>
          {item?.createDate ? (
            <time dateTime={item.createDate} className="article-date">
              {new Date(item.createDate).toLocaleDateString('en-GB')}
            </time>
          ) : null}
        </div>
      </a>
    </div>
  );
};

NewsCard.propTypes = {
  images: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.object.isRequired,
  headline: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
};

export default NewsCard;
