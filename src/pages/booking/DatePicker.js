import React from 'react';
// import DP from 'react-horizontal-datepicker';

function DatePicker() {
  const selectedDay = (val) => {
    console.log(val);
  };
  return (
    <div className="max-w-xl mx-auto">
      {/* <DP
        getSelectedDay={selectedDay}
        endDate={100}
        selectDate={new Date('2020-04-30')}
        labelFormat={'MMMM yyyy'}
        color={'#FF7777'}
      /> */}
    </div>
  );
}

export default DatePicker;
