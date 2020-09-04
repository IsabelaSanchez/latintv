import React, { useState, useEffect } from 'react';
import Month from './Month'
import {getAllData} from '../firebase/firestore'
import './styles/CalendarColumn.scss';
import logo from '../Images/logo_forms.png';
import { Link } from "react-router-dom";
import 'firebase/firebase-auth'
import {signOut} from '../firebase/auth'

const CalendarColumn = (props) => {
    const initPrice = {
        L: {cant : '-', monto: '-'},
        M: {cant : '-', monto: '-'},
        Mi: {cant : '-', monto: '-'},
        J: {cant : '-', monto: '-'},
        V: {cant : '-', monto: '-'},
        S: {cant : '-', monto: '-'},
        D: {cant : '-', monto: '-'},
    }
    const [ price, setPrice] = useState(initPrice);

    useEffect(() => {
        getAllData((spaces) => {
            const spaceDates = spaces.map((space) => {
                const dateParts = (space.date).split('-');
                const date = `${dateParts[1]}-${dateParts[0]}-${dateParts[2]}`
                return (new Date(date)).getTime();
            })
            console.log(spaceDates);
         }, 'reservedSpaces');
    }, []);
    const { week } = props;
    return (
        <div className="column">
            <div className="container-column">
                <h2 className="main-title-column">Calendario de Reserva</h2>
                <Month/><br/>
                <div className="table-second">
                <p className="titulo-column">PUBLICIDAD INGRESADA</p>
                <p className="titulo-column">{week}</p>
                    <table className="table-column">
                        <tbody>
                            <tr>
                            <td className="little-space"></td>
                            <th>Cant</th>
                            <th>Monto</th>
                            </tr>
                            <tr>
                            <th className="normal-font">L</th>
                            <td>0</td>
                            <td>0</td>
                            </tr>
                            <tr>
                            <th className="normal-font">M</th>
                            <td>0</td>
                            <td>0</td>
                            </tr>
                            <tr>
                            <th className="normal-font">Mi</th>
                            <td>1</td>
                            <td>$ 3,150</td>
                            </tr>
                            <tr>
                            <th className="normal-font">J</th>
                            <td>0</td>
                            <td>0</td>
                            </tr>
                            <tr>
                            <th className="normal-font">V</th>
                            <td>0</td>
                            <td>0</td>
                            </tr>
                            <tr>
                            <th className="normal-font">S</th>
                            <td>0</td>
                            <td>0</td>
                            </tr>
                            <tr>
                            <th className="normal-font">D</th>
                            <td>0</td>
                            <td>0</td>
                            </tr>
                            <tr>
                            <th>Sub-total</th>
                            <td>1</td>
                            <td>$ 3,150</td>
                            </tr>
                            <tr>
                            <th>IGV 18%</th>
                            <td className="little-space"></td>
                            <td>$567</td>
                            </tr>
                            <tr>
                            <th>Total</th>
                            <td>1</td>
                            <td>$3717</td>
                            </tr>
                        </tbody>
                        </table>
                    <a href='#modal-final' id="show-modal-final"className="btn-salir">Salir</a>
                        <aside id="modal-final" className="modal-final">
                            <div className="content-modal-final">
                                <section className='logoModalFinal'>
                                    <section className='containerModalFinal'>
                                        <a href="#" className="close-modal-final final">X</a><br/>
                                        <img className='' src={logo} alt=''/>
                                    </section>
                                    <section className='descriptionModalFinal'>
                                        Tu reserva se ha 
                                        realizado con éxito.
                                        Gracias por anunciar 
                                        con nosotros. 
                                        
                                    </section>
                                    <section className='containerCloseModalFinal'><Link className='close-modal-final' onClick={()=>{signOut();}} to={'/'}>Salir</Link></section>
                                </section> 
                            </div>
                        </aside>
                    </div>
            </div>
        </div>
    )
};
export default CalendarColumn;