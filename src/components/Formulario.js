import React, { useState } from 'react';
import { FormContainer, Form, InputLabel, Input, Button, Tituloh1 } from '../styles/FormularioStyles';


const Formulario = ({ onAddPagamento }) => {
    const [motoboyData, setMotoboyData] = useState({
        nome: '',
        quantidadeEntregas: '',
        taxa: '',
        caixinha: '',
        alterarValorEntrega: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setMotoboyData({
            ...motoboyData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleAddPagamento = () => {
        onAddPagamento({
            ...motoboyData,
            total: calcularTotal(),
        });

        setMotoboyData({
            nome: '',
            quantidadeEntregas: '',
            taxa: '',
            caixinha: '',
            alterarValorEntrega: false,
        });
    };



    const calcularTotal = () => {
        const { quantidadeEntregas, taxa, caixinha, alterarValorEntrega } = motoboyData;

        // Diária fixa de R$68,50
        const diariaFixa = 68.5;

        // Multiplica a quantidade de entregas pelo valor da entrega
        const valorEntrega = alterarValorEntrega ? 3.0 : 2.5;
        const totalEntregas = parseInt(quantidadeEntregas) * valorEntrega;
        // Soma o valor da diária, o total das entregas, a taxa e a caixinha
        const total = diariaFixa + totalEntregas + parseFloat(taxa) + parseFloat(caixinha);

        return total.toFixed(2);
    };

    return (
        <FormContainer>
            <Tituloh1>Pagamento dos Motoboys da Piacello</Tituloh1>
            <Form>
                <InputLabel>
                    Nome do Motoboy:
                    <Input
                        type='text'
                        name='nome'
                        value={motoboyData.nome}
                        onChange={handleChange}
                    />
                </InputLabel>
                <br />
                <InputLabel>
                    Quantidade de Entregas:
                    <Input
                        type='number'
                        name='quantidadeEntregas'
                        value={motoboyData.quantidadeEntregas}
                        onChange={handleChange}
                    />
                </InputLabel>
                <br />
                <InputLabel>
                    Valor da Taxa:
                    <Input
                        type='number'
                        name='taxa'
                        value={motoboyData.taxa}
                        onChange={handleChange}
                    />
                </InputLabel>
                <br />
                <InputLabel>
                    Valor da Caixinha:
                    <Input
                        type='number'
                        name='caixinha'
                        value={motoboyData.caixinha}
                        onChange={handleChange}
                    />
                </InputLabel>
                <br />
                <InputLabel>
                    Alterar valor da entrega (Domingo, Feriado, Decisão própria)
                    <Input 
                        type='checkbox'
                        name='alterarValorEntrega'
                        checked={motoboyData.alterarValorEntrega}
                        onChange={handleChange}
                    />
                </InputLabel>
                <Button type='button' onClick={handleAddPagamento}>
                    Adicionar Pagamento
                </Button>
            </Form>
        </FormContainer>
    )
};

export default Formulario;