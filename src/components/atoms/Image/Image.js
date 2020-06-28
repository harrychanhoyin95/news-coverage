import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NoPhoto from '../../../assets/img/no-photo.svg';

const Container = styled.div`
  width: 40px;
  height: 40px;
`;

const NoPhotoSVG = styled(NoPhoto)`
  width: 24px;
  height: 24px;
  fill: #fff;
`;

const ImageTag = styled.img`
  max-width: 100%;
`;

const Image = ({ src, alt }) => {
  if (!src) {
    return (
      <Container>
        <NoPhotoSVG />
      </Container>
    );
  }

  return <ImageTag src={src} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  src: null,
};

export default Image;
