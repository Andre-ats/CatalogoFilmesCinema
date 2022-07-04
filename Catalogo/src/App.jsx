import { useState } from "react"
import "./style/style.css"

function App(){
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(false)
  const [mensagem, setMensagemErro] = useState(false)

  async function filmesfunction(){
    try{
      setLoading(true)
      const api = await fetch("https://api.b7web.com.br/cinema/")
      const json = await api.json()
      setLoading(false)
      setFilmes(json)
    }catch(e){
      setFilmes(false)
      setMensagemErro(true)
    }

  }
  return(

    <div>
      {mensagem === true && <div>Erro!</div>}
        <button onClick={filmesfunction}>Clique aqui</button>
        Quantia de filmes: {filmes.length}
        {loading && <div>Carregando!</div>}
        {filmes.map((item, key)=>(
        <div key={key} className="div-toda">
          <div className="div-filme-toda">
            <div className="div-filme">{item.titulo}</div>
          </div>
          <div className="div-foto-todo">
            <img src={item.avatar}></img>
          </div>
        </div>             
      ))}
    </div>    
  )
}
export default App