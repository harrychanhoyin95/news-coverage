import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const NewsSource = styled.div`
  font-size: 20px;
`;

const NewsCard = ({ news }) => {
  return (
      <div>{news}</div>
  );
};

export default NewsCard;
