import React from 'react';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import moment from 'moment';
import MomentUtils from "@date-io/moment";

const MyDatePicker = (props) => {

  const handleDateChange = (date) => {
    props.onEditingDate(date);
  };

  return (
    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
      <DatePicker
        disablePast
        value={props.value}
        name='date'
        format="DD.MM.YYYY"
        onChange={date => handleDateChange(date)}
        styles
      />
    </MuiPickersUtilsProvider>
  );
}

export default MyDatePicker;
