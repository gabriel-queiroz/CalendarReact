import React, { Fragment } from 'react';
import moment from 'moment';
export default class Calendario extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currenteDate: moment()
        }
        this.handlerMonth.bind(this);
    }


    getDaysArray(year, month) {
        let names = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
        let date = new Date(year, month - 1, 1);
        let result = [];
        while (date.getMonth() === month - 1) {
            result.push(
                {
                    number: date.getDate(),
                    day: names[date.getDay()]

                });
            date.setDate(date.getDate() + 1);
        }
        return result;
    }

    handlerMonth(argument) {

        const { currenteDate } = this.state;

        if (argument === 'next') {

            let month = parseInt(currenteDate.format('MM')) + 1;
            console.log(month);
            currenteDate.set('month', month - 1);
        }
        else {

            let month = parseInt(currenteDate.format('MM')) - 1;
            console.log(month);
            currenteDate.set('month', month - 1);
        }
        console.log(currenteDate.format('YYYY/MM'));
        this.setState({ currenteDate: currenteDate });

    }

    renderCalendario() {

        let year = this.state.currenteDate.format('MM');



        let month = '';
        month = this.state.currenteDate.format('MM');

        let datas = JSON.stringify(this.getDaysArray(year, month));

        return (
            <div>
                <h1>{`${this.state.currenteDate.format('MMM')}/${this.state.currenteDate.format('YYYY')}`}</h1>
                <p> {datas} </p>
            </div>
        );
    }

    render() {

        return (
            <Fragment>
                <button onClick={() => this.handlerMonth('prev')} >prev </button>
                <button onClick={() => this.handlerMonth('next')} >next</button>
                <h1>{this.state.currenteDate.format('YYYY')}</h1>
                <h1>{this.state.currenteDate.format('MM')}</h1>
                {this.renderCalendario()}
            </Fragment>
        )
    }
}