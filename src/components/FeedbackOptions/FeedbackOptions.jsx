import React from "react";
import css from './FeedbackOptions.module.css'
import PropTypes from 'prop-types'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div className={css.container}>
        {options.map((option) => (
          <button className={css.button} key={option} type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  };

  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  }

  export default FeedbackOptions
