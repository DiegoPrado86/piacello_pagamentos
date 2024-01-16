import styled from "styled-components";

export const TituloH2 = styled.h2`
    text-align: center;
    color: green;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

    @media (max-width: 600px) {
        font-size: 14px; /* Ajuste o tamanho da fonte para telas menores se necessário */
    }
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f2f2f2;
    }
`;

export const TableHeader = styled.th`
    padding: 10px;
    text-align: center; /* Adicionado para centralizar o texto */
`;

export const TableData = styled.td`
    padding: 10px;
    text-align: center; /* Adicionado para centralizar o texto */
`;

export const ExcluirButton = styled.button`
    background-color: #ff5c5c;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;