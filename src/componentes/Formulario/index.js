import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const times = [
        'Cientifico',
        'Cósmico',
        'Habilidade',
        'Mistico',
        'Mutante',        
        'Tecnologico',        
        'Superior'
    ]

    const [campeao, setNome] =useState('')
    const [habilidade, setHabilidade]=useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')



    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCampeaoCadastrado({
            campeao,
            habilidade,
            imagem,
            time
        })
    }
    
      return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Colaborador</h2>
                <CampoTexto 
                    obritatorio={true} 
                    label="Campeão" 
                    placeholder="Digite o nome do Campeão"
                    valor={campeao}
                    aoAlterado={valor =>setNome(valor)}
                />

                <CampoTexto 
                    obritatorio={true} 
                    label="Habilidade" 
                    placeholder = "Digite sua habilidade"
                    valor={habilidade}
                    aoAlterado={valor => setHabilidade(valor)}

                />  

                <CampoTexto 

                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obritatorio={true} 
                    label= "time" 
                    itens={times}
                    Valor={time}
                    aoAlterado={valor => setTime(valor)}
                                     
                    />
                <Botao> 
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario