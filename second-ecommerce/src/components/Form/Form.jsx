import React from 'react'
import { useState } from 'react';
import { useFormContext } from '../../Context/formContext';
import Loading from '../Loading/Loading';


const Form = () => {

    const { generarOrden, setTelefono, setMail, setNombre, nombre, mail, telefono } = useFormContext();


    const [loading, setLoading] = useState(true)
    setTimeout(() => setLoading(false), 1300)

    return (
        <>

            {loading ? <Loading /> :
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nombre completo</label>
                        <input type="text" className="form-control" id="inputNombre" aria-describedby="emailHelp"
                            value={nombre} onChange={((e) => setNombre(e.target.value))} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" value={mail} onChange={((e) => setMail(e.target.value))} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Telefono</label>
                        <input type="text" className="form-control" id="inputTelefono" value={telefono} onChange={((e) => setTelefono(e.target.value))} />
                    </div>

                    <button className='btn btn-primary' onClick={generarOrden}>Pagar  </button>
                </form>
            }


        </>
    )
}

export default Form