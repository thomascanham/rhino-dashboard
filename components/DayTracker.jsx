import { format, sub } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  box-shadow: var(--bs);
  border-radius: 0.25rem;
  max-width: 345px;

  .card-header {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: var(--grey);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }

  .list-group {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
  }
  .list-group-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;

    border-top-color: rgba(0, 0, 0, 0.125);
    border-top-style: solid;
    border-top-width: 1px;
    /* border-right-color: rgba(0, 0, 0, 0.125); */
    /* border-right-style: solid;
    border-right-width: 1px; */
    /* border-left-color: rgba(0, 0, 0, 0.125);
    border-left-style: solid;
    border-left-width: 1px; */
  }
  .flex-between {
    display: flex;
    justify-content: space-between;
  }

  .line-item-flex {
    display: flex;
    align-items: center;
  }

  .orb {
    width: 10px;
    height: 10px;
    display: block;
    border-radius: 50%;
    margin-right: 15px;
  }

  .orb-red {
    background-color: #e74c3c;
  }
  .orb-yellow {
    background-color: #e67e22;
  }
  .orb-green {
    background-color: #2ecc71;
  }
`;

function getNextMonday(date = new Date()) {
  const dateCopy = new Date(date.getTime());

  const nextMonday = new Date(
    dateCopy.setDate(
      dateCopy.getDate() + ((7 - dateCopy.getDay() + 1) % 7 || 7)
    )
  );

  return nextMonday;
}

export default function DayTracker() {
  const nextMonday = getNextMonday();

  const days = {
    ten: sub(new Date(nextMonday), { days: 10 }),
    twelve: sub(new Date(nextMonday), { days: 12 }),
    fourteen: sub(new Date(nextMonday), { days: 14 }),
  };

  return (
    <Card>
      <div className="card-header flex-between">
        <p>Next Monday:</p> <b>{format(new Date(nextMonday), 'do MMM')}</b>
      </div>

      <div className="list-group">
        <li className="list-group-item flex-between">
          <span className="line-item-flex">
            {' '}
            <span className="orb orb-red" />
            14 Days:
          </span>
          <span>{format(new Date(days.fourteen), 'do MMM')}</span>
        </li>

        <li className="list-group-item flex-between">
          <span className="line-item-flex">
            <span className="orb orb-yellow" />
            12 Days:
          </span>
          <span>{format(new Date(days.twelve), 'do MMM')}</span>
        </li>

        <li className="list-group-item flex-between">
          <span className="line-item-flex">
            <span className="orb orb-green" />
            10 Days:
          </span>
          <span>{format(new Date(days.ten), 'do MMM')}</span>
        </li>
      </div>
    </Card>
  );
}
