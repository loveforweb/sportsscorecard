import './NewsCard.scss';

import PropTypes from 'prop-types';
import React from 'react';

const NewsCard = ({ images, description, links, headline, categories }) => {
  const item = categories.find((el) => el.createDate);
  return (
    <div className="component news-card">
      {images[0]?.url ? <img src={images[0].url} alt={images[0].name} /> : null}
      <h2>{headline}</h2>
      <p>{description}</p>
      <br></br>
      {item?.createDate ? (
        <time dateTime={item.createDate}>
          {new Date(item.createDate).toLocaleDateString('en-GB')}
        </time>
      ) : null}
      <br></br>
      <a target="_blank" rel="noopener noreferrer" href={links.web.short.href}>
        Read more
      </a>
      <br></br>
      <br></br>
      {images[0]?.caption ? (
        <div className="news-image-caption">
          Image Caption: {images[0].caption}
        </div>
      ) : null}
      {images[0]?.credit ? (
        <div className="news-image-credit">
          Image Credit: {images[0].credit}
        </div>
      ) : null}
    </div>
  );
};

NewsCard.propTypes = {
  //
};

export default NewsCard;
