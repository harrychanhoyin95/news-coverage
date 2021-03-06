import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import Heading from '../../atoms/Heading/Heading';

const Container = styled.div`
  padding: 24px;

  @media ${(props) => props.theme.breakpoints.desktopOrTablet} {
    padding: 0 96px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Date = styled.div`
  margin-bottom: 24px;
  color: ${(props) => props.theme.colors.whites[2]};
`;

const Table = styled.table`
  width: 100%;
`;

const TH = styled.th`
  text-align: ${(props) => props.textAlign};
  padding: 8px;
  border-bottom: 1px solid #fff;
`;

const TData = styled.td`
  text-align: ${(props) => props.textAlign};
  padding: 8px;
  border-bottom: 1px solid ${(props) => props.theme.colors.whites[0]};
`;

const Currency = ({ response }) => {
  const acceptedCurrencies = [
    'HKD',
    'CAD',
    'GBP',
    'JPY',
    'EUR',
    'CNY',
    'AUD',
    'CHF',
  ];
  const { data } = response;

  return (
    <Container>
      <Flex>
        <Heading>
          Base:
          {data.base}
        </Heading>
        <Date>{moment().format('DD/MM/YYYY hh:mm:ss')}</Date>
      </Flex>
      <Table>
        <thead>
          <tr>
            <TH textAlign="left">Currency</TH>
            <TH textAlign="right">$1=</TH>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data.rates)
            .sort()
            .map((r) => {
              if (acceptedCurrencies.includes(r)) {
                return (
                  <tr key={r}>
                    <TData textAlign="left">{r}</TData>
                    <TData textAlign="right">
                      {(Math.round(data.rates[r] * 10000) / 10000).toFixed(4)}
                    </TData>
                  </tr>
                );
              }
              return null;
            })}
        </tbody>
      </Table>
    </Container>
  );
};

Currency.propTypes = {
  response: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object])
  ).isRequired,
};

export default Currency;
