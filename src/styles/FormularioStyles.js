import styled from "styled-components";


export const Tituloh1 = styled.h1`
    color: green;
`

export const FormContainer = styled.div`
    text-align: center;
    
    @media (max-width: 600px) {
        padding: 0 20px; /* Adapta o espaçamento para telas menores */
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px; /* Definindo a largura máxima para o formulário */
    margin: 0 auto; /* Centraliza o formulário horizontalmente */
`;

export const InputLabel = styled.label`
    margin-bottom: 5px;
    color: green;
`;

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px; /* Aumentei o espaço entre os inputs */
    box-sizing: border-box;
`;

export const Button = styled.button`
    background-color: #4caf50;
    margin-top: 10px; /* Ajustei o espaçamento acima do botão */
    color: white;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    width: 100%;
`;