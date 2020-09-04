import './YearlyOption.scss';

import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import React from 'react';

const years = [
  { id: 1, year: '2019' },
  { id: 2, year: '2020' },
];

const YearlyOption = ({ onYearSelect, selectedOption }) => {
  return (
    <div className="component yearly-option">
      <Form>
        <Form.Group controlId="yearSelection">
          <Form.Label>Select season: </Form.Label>
          <Form.Control
            as="select"
            onChange={onYearSelect}
            value={selectedOption}
            custom
          >
            {years.map((option) => {
              return (
                <option value={option.year} key={option.id}>
                  {option.year}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

YearlyOption.propTypes = {
  onYearSelect: PropTypes.func.isRequired,
  selectedOption: PropTypes.number.isRequired,
};

export default YearlyOption;
