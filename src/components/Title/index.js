// import './style.css'
import {tituloStyle,tituloStyleAuxiliar} from './style'
export default function Title({texto}){
    return (
        <h2 
            className="titulo" 
            style={tituloStyleAuxiliar}>
                {texto}
        </h2>
    )
}