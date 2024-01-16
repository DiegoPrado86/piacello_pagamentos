import React from "react";

import { Table, TableRow, TableHeader, TableData, ExcluirButton, TituloH2 } from "../styles/ListaPagamentosStyles";

const ListaPagamentos = ({ pagamentos, onDeletePagamento }) => {
    return (
        <div>
            <TituloH2>Registro de Pagamentos</TituloH2>
            <Table>
                <thead>
                    <TableRow>
                        <TableHeader>Nome</TableHeader>
                        <TableHeader>Quantidade de Entregas</TableHeader>
                        <TableHeader>Taxa</TableHeader>
                        <TableHeader>Caixinha</TableHeader>
                        <TableHeader>Total</TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    {pagamentos.map((pagamento, index) =>( 
                        <TableRow key={index}>
                            <TableData>{pagamento.nome}</TableData>
                            <TableData>{pagamento.quantidadeEntregas}</TableData>
                            <TableData>{pagamento.taxa}</TableData>
                            <TableData>{pagamento.caixinha}</TableData>
                            <TableData>{pagamento.total}</TableData>
                                <ExcluirButton onClick={() => onDeletePagamento(index)}>
                                    Excluir
                                </ExcluirButton>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ListaPagamentos;