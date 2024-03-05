import PropTypes from 'prop-types';
import styled from 'styled-components';
import formatNumber from '../../lib/formatNumber';

export default function AverageResults({ average, total, amount }) {
  let classes = '';

  if (average === 0) {
    classes = '0';
  } else if (average > 2000) {
    classes = 'red';
  } else if (average < 2000 || average === 2000) {
    classes = 'green';
  }

  return (
    <AverageStyles className={classes}>
      <p>
        Average:{' '}
        <span className="average">
          {formatNumber(Math.floor(average))} {average === 0 ? '' : 'g'}
        </span>
      </p>
      <p>
        Total:{' '}
        <span>
          {formatNumber(total)} {total === 0 ? '' : 'g'}
        </span>
      </p>
      <p>
        Parcels: <span>{amount}</span>
      </p>
    </AverageStyles>
  );
}

AverageResults.propTypes = {
  average: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

const AverageStyles = styled.div`
  --green1: #2ecc71;
  --green2: #27ae60;
  --greenBackground: rgb(39, 174, 96, 0.25);
  --red1: #e74c3c;
  --red2: #c0392b;
  --redBackground: rgb(231, 76, 60, 0.25);
  margin-top: 30px;
  font-family: 'Montserrat', sans-serif;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 15px;
  p {
    font-size: 16px;
    line-height: 35px;
  }
  span {
    padding-left: 15px;
  }
  &.red {
    border: 3px solid var(--red2);
    background-color: var(--redBackground);
  }
  &.green {
    border: 3px solid var(--green2);
    background-color: var(--greenBackground);
  }
`;
