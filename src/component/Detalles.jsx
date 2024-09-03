import React from 'react'
import { useProducDetalles } from '../Provider/UserProvider'
function Detalles() {
    const detalles = useProducDetalles();
    console.log(detalles);
    return (
        <div className='container-detalles'>
            <h4>Detalles</h4>
            <p>Detalles del producto</p>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product</th>
                        <th>Model</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{detalles.itemnum}</td>
                        <td>{detalles.description}</td>
                        <td>{detalles.modelo}</td>
                        <td>${detalles.price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Detalles