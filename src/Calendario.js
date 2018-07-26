import React, { Fragment } from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';

export default class Calendario extends React.Component {
  state = {
     date: new Date(),
   }

   onChange = async (date) => {
    await this.setState({ date })
    console.log(this.state.date);
   }

   render() {
     return (
       <div>
         <Calendar
           onChange={this.onChange}
           value={this.state.date}
         />
       </div>
     );
   }
}
