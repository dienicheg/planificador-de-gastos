import React from 'react'
import { formatearFecha } from '../helpers/index.js'

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

  //Diccionario iconos
const diccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  varios: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones
}
function Gasto({gasto, setGastoEditar, eliminarGasto}) {
  const {categoria, nombre, cantidad, fecha, id } = gasto

  return (
  <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <img src={diccionarioIconos[categoria]} alt="Icono Categoria" />
        <div className='descripcion-gasto'>
          <p className='categoria'>
            {categoria}
          </p>
          <p className='nombre-gasto'>{nombre}</p>

          <p className='fecha-gasto'>
              Agregado el: {' '}
              <span>{formatearFecha(fecha)}</span>
          </p>
        </div>
      </div>
      <div>
        <p className='cantidad-gasto'>${cantidad}</p>
        <div className='contenedor-botones'>
          <button
            className='btn-editar'
            onClick={e => setGastoEditar(gasto)}
          >Editar</button>
          <button
            className='btn-eliminar'
            onClick={e => eliminarGasto(id)}
          >Eliminar</button>
        </div>
      </div>
  </div>
  )
}

export default Gasto