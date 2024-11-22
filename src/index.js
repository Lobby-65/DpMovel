import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

/// PARTE 1 DA ATIVIDADE

// function Usuario(props){
//  return <p>{props.pessoa} {props.sobrenome} {props.cpf} {props.contato} {props.email}</p>
// }

// function App(){
//   return (
//     <div>
//       <Usuario pessoa ="joão" />
//       <Usuario sobrenome ="Oliveira" />
//       <Usuario cpf ="111.222.333-45" />
//       <Usuario contato ="(84) 12345-6789" />
//       <Usuario email ="Djaum@email.com" />
//     </div>
//   )
// }


/// PARTE 02 DA ATIVIDADE

function CalcularadoraIMC(props) {

  const calcularIMC = (peso, altura) => {
    return peso / (altura * altura); 
  };
    
    const classificarIMC = (imc) => {
      if (imc < 18.5) return "Abaixo de Peso";
      if (imc >= 18.5 && imc < 24.9) return "Peso Normal";
      if (imc >= 24.9 && imc < 29.9) return "Sobrepeso";
      return "Obesidade";
    };

    const imc = calcularIMC(props.peso, props.altura);

    const resultado = classificarIMC(imc);
   
    return (
      <div>
        <p> Peso: {props.peso} kg, Altura: {props.altura}</p>
        <p>IMC: {props.peso / (props.altura * props.altura)}</p>
        <p>Resultado: {resultado}</p>
      </div>
    );
  }

  

function App() {
  return (
    <div>
      <CalcularadoraIMC peso={90} altura={1.87} />
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
