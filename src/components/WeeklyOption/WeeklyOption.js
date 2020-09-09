import './WeeklyOption.scss';

import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import React from 'react';

const numberOfWeek = [
  { id: 1, week: 1 },
  { id: 2, week: 2 },
  { id: 3, week: 3 },
  { id: 4, week: 4 },
  { id: 5, week: 5 },
  { id: 6, week: 6 },
  { id: 7, week: 7 },
  { id: 8, week: 8 },
  { id: 9, week: 9 },
  { id: 10, week: 10 },
  { id: 11, week: 11 },
  { id: 12, week: 12 },
  { id: 13, week: 13 },
  { id: 14, week: 14 },
  { id: 15, week: 15 },
  { id: 16, week: 16 },
  { id: 17, week: 17 },
];

const WeeklyOption = ({ onWeekSelect, selectedOption }) => {
  return (
    <div className="component weekly-option">
      <Form>
        <Form.Group controlId="weekSelection">
          <Form.Label>Select week: </Form.Label>
          <Form.Control
            as="select"
            onChange={onWeekSelect}
            value={selectedOption}
            custom
            data-testid="weekly-select"
          >
            {numberOfWeek.map((option) => {
              return (
                <option
                  data-testid="weekly-option"
                  value={option.id}
                  key={option.id}
                >
                  Week {option.week}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

WeeklyOption.propTypes = {
  onWeekSelect: PropTypes.func.isRequired,
  selectedOption: PropTypes.number.isRequired,
};

export default WeeklyOption;
