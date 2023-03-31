import { useEffect, useState } from 'react';
import './app.scss';
import AddPlusCircle  from './assets/addCircle.svg';
import Delete from './assets/delete.svg';

function App() {
  //Receita
  const [totalReceita, setTotalReceita] = useState(0);
  const [totalDespesa, setTotalDespesa] = useState(0);

  function updateValueReceita(e) {
    setTotalReceita(value => value + Number(e.target.value))
    e.target.setAttribute('disabled','')
  }

  function removeInputReceita(e) {
    const divFather = e.target.parentElement.parentElement;
    let inputValue = divFather.querySelector('input[type="number"]').value
    if(!inputValue) {
      inputValue = 0;
    }
    setTotalReceita(value => value - Number(inputValue))
    divFather.remove();   
  }

  function createInputReceita(e) {
    const inputReceita = document.createElement('div');
    inputReceita.className = 'container_table_receitas_inputReceita';
    inputReceita.innerHTML = `
      <input type="text" placeholder='Descrição'/>
      <input type="number" placeholder='Valor'/>
      <div>
        <img />
      </div>
    `
    const divReceita = e.target.parentElement.parentElement;
    const imgs = inputReceita.querySelector('img');
    const inputValueReceita =  inputReceita.querySelector('input[type="number"]');
    
    inputValueReceita?.addEventListener('blur', updateValueReceita)
    imgs?.setAttribute('src', Delete);
    imgs?.addEventListener('click', removeInputReceita);
    divReceita.appendChild(inputReceita);
  }
  
  //Despesa
  function updateValueDespesa(e) {
    setTotalDespesa(value => value + Number(e.target.value))
    e.target.setAttribute('disabled','')
  }
  function removeInputDespesa(e) {
    const divFather = e.target.parentElement.parentElement;
    let inputValue = divFather.querySelector('input[type="number"]').value
    if(!inputValue) {
      inputValue = 0;
    }
    setTotalDespesa(value => value - Number(inputValue))
    divFather.remove();   
  }
  function createInputDespesa(e) {
    const inputReceita = document.createElement('div');
    inputReceita.className = 'container_table_receitas_inputDespesa';
    inputReceita.innerHTML = `
      <input type="text" placeholder='Descrição'/>
      <select>
      <option>Custo de vida</option>
      <option>Lazer</option>
      </select>
      <input type="number" placeholder='Valor'/>
      <div>
        <img />
      </div>
    `
    const divReceita = e.target.parentElement.parentElement;
    const imgs = inputReceita.querySelector('img');
    const inputValueReceita =  inputReceita.querySelector('input[type="number"]');
    
    inputValueReceita?.addEventListener('blur', updateValueDespesa)
    imgs?.setAttribute('src', Delete);
    imgs?.addEventListener('click', removeInputDespesa);
    divReceita.appendChild(inputReceita);
  }
  
  useEffect(() =>{

  })
  return (
    <div className="App">
      <div className="container">
        <h1 className='container_h1'>Esta aplicação é  baseada no livro: <br />
        “O Homem mais rico da Babilônia”.</h1>
        <div className="container_content">
          <p>O primeiro ensinamento é  sobre a regra das partes 7/2/1.</p>
          <p>-O máximo de 70% da sua receita deve destinado aos custos de sobrevivência.
          Ex: Aluguel, conta de água, luz, alimentação e etc...</p>
          <p>-O máximo de 20% da sua receita deve ser destinado ao lazer.
          Ex: Passeios, lanches...</p>
          <p>-O mínimo de 10% da sua receita deve ser destinada a criação da reserva de segurança e/ou guardar em forma de investimento.</p>
        </div>
      </div>
      <div className="container_table">
        <div className='container_table_receitas'>
          <h2>Receitas</h2>
          <div className='container_table_receitas_addReceita' onClick={createInputReceita}>
            <img src={AddPlusCircle} />
            <p>Adicionar receita</p>
          </div>
          {/* <div className='container_table_receitas_inputReceita'>
            <input type="text" placeholder='Descrição'/>
            <input type="number" placeholder='Valor'/>
            <div>
              <img src={Check} />
              <img src={Delete} />
            </div>
          </div>   */}
        </div>
        <p className='container_table_totalReceita'>{`Total: R$ ${totalReceita}`}</p>
        <div className='container_table_despesas'>
          <h2>Despesas</h2>
          <div className='container_table_receitas_addReceita' onClick={createInputDespesa}>
            <img src={AddPlusCircle} />
            <p>Adicionar despesa </p>
          </div>
        </div>
        <p className='container_table_totalDespesa'>{`Total: R$ ${totalDespesa}`}</p>
      </div>
      <div className='projection'>
        <div className='projection_card'>
          <h3>Custo de Vida</h3>
          <p>R$ {totalDespesa}</p>
        </div>
        <div className='projection_card'>
          <h3>Lazer</h3>
          <p>R$ </p>
        </div>
        <div className='projection_card'>
          <h3>Investimento</h3>
          <p>R$ {totalReceita*0.1}</p>
        </div>
      </div>
    </div>
  )
}

export default App;
