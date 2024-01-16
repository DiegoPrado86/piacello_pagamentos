import React, { useState} from "react";
import Formulario from "./components/Formulario";
import ListaPagamentos from "./components/ListaPagamentos";


const App = () => {
  const [pagamentos, setPagamentos] = useState([]);

  const handleAddPagamento = (novoPagamento) => {
    setPagamentos([...pagamentos, novoPagamento]);
  };

  const handleDeletePagamento = (index) => {
      const novosPagamentos = [...pagamentos]
      novosPagamentos.splice(index, 1);
      setPagamentos(novosPagamentos);
  };

  return (
    <div>
        <Formulario onAddPagamento={handleAddPagamento}/>
        <ListaPagamentos pagamentos={pagamentos} onDeletePagamento={handleDeletePagamento}/>
    </div>
  )
  
};

export default App;

