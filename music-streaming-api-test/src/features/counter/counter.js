import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './counter.module.css';

import {
  selectValue,
  setValue,
} from './counterSlice.js';

export function Counter(props) {
  const value = useSelector(selectValue);
  const dispatch = useDispatch();

  const classes = classNames({
    [styles.red]: value % 2 === 0,
    [styles.blue]: value % 2 === 1,
  });
  const onClick = () => dispatch(setValue({
    value: value + 1,
  }));

  return (
    <label>
      {props.label}:&nbsp;
      <button className={classes} onClick={onClick}>
        {value}
      </button>
    </label>
  );
}

Counter.propTypes = {
  label: PropTypes.string.isRequired,
};
