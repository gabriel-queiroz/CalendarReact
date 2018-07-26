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

        console.log(year);
        console.log(month);

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

        let year = this.state.currenteDate.format('YYYY');
        let month = '';
        month = this.state.currenteDate.format('MM');


        let datas = (this.getDaysArray(year, month));

        let segunda = [];
        let terca = [];
        let quarta = [];
        let quinta = [];
        let sexta = [];
        let sabado = [];
        let domingo = [];

        datas.forEach(item => {

            if (item.day === 'segunda') {
                segunda.push(item.number);
            }
            if (item.day === 'terça') {
                terca.push(item.number);
            }
            else if (item.day === 'quarta') {
                quarta.push(item.number);
            }
            else if (item.day === 'quinta') {
                quinta.push(item.number);
            }
            else if (item.day === 'sexta') {
                sexta.push(item.number);
            }
            else if (item.day === 'sábado') {
                sabado.push(item.number);
            }
            else if (item.day === 'domingo') {
                domingo.push(item.number);
            }

        });

        console.log(domingo);


        return (

            <div>
                <table style={{ margin: '0 auto', border: '1px' }}>
                    <thead>
                        <th>Domingo</th>
                        <th>Segunda</th>
                        <th>Terça</th>
                        <th>Quarta</th>
                        <th>Quinta</th>
                        <th>Sexta</th>
                        <th>Sábado</th>
                    </thead>

                    <tbody>

                        <td>1</td>
                        <td>2</td>
                        <td>2</td>
                        <td>3</td>
                        <td>34</td>
                        <td>4</td>
                        <td>44</td>

                    </tbody>

                </table>
                <div>
                    <h1>{`${this.state.currenteDate.format('MMM')}/${this.state.currenteDate.format('YYYY')}`}</h1>
                    <div style={{display:'flex'}}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {domingo.map(item => (
                                <span style={{margin:'10px'}} > {(item == null ? 'null': item)} </span>
                            ))}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {segunda.map(item => (
                                <span style={{margin:'10px'}}> {(item == null ? 'null': item)} </span>
                            ))}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {terca.map(item => (
                                <span style={{margin:'10px'}}> {(item == null ? 'null': item)} </span>
                            ))}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {quarta.map(item => (
                                <span style={{margin:'10px'}}> {(item == null ? 'null': item)} </span>
                            ))}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {quinta.map(item => (
                                <   span style={{margin:'10px'}}> {(item == null ? 'null': item)} </span>
                            ))}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {sexta.map(item => (
                                <span style={{margin:'10px'}}> {(item == null ? 'null': item)} </span>
                            ))}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {sabado.map(item => (
                                <span style={{margin:'10px'}}> {(item == null ? 'null': item)} </span>
                            ))}
                        </div>
                    </div>
                </div>
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
