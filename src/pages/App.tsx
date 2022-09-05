import { useState } from 'react';
import Form from '../components/Form/form';
import List from '../components/List/list';
import StopWatch from '../components/StopWatch/stopWatch';
import { ITarefa } from '../types/tarefa';
import './App.scss';

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([])

  const[selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className="App">
     <Form setTarefas={setTarefas}/>
     <StopWatch selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
     <List 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
      />
    </div>
  );
}

export default App;
