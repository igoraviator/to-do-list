import React, { useState } from 'react';
import styled from "styled-components";
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";

const GuestFormContainer = styled.main``;

const GuestForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const send = (dados) => {
        console.log(dados);
    }

    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const genres = [
        { name: 'Masculino', code: 'M' },
        { name: 'Feminino', code: 'F' },
        { name: 'Não especificar', code: 'N' }
    ];

    const states = [
        { name: 'Acre', code: 'AC' }, { name: 'Alagoas', code: 'AL' }, { name: 'Amapá', code: 'AP' }, { name: 'Amazonas', code: 'AM' },
        { name: 'Bahia', code: 'BA' }, { name: 'Ceará', code: 'CE' }, { name: 'Distrito Federal', code: 'DF' }, { name: 'Espírito Santo', code: 'ES' },
        { name: 'Goiás', code: 'GO' }, { name: 'Maranhão', code: 'MA' }, { name: 'Mato Grosso', code: 'MT' }, { name: 'Mato Grosso do Sul', code: 'MS' },
        { name: 'Minas Gerais', code: 'MG' }, { name: 'Pará', code: 'PA' }, { name: 'Paraíba', code: 'PB' }, { name: 'Paraná', code: 'PR' },
        { name: 'Pernambuco', code: 'PE' }, { name: 'Piauí', code: 'PI' }, { name: 'Rio de Janeiro', code: 'RJ' }, { name: 'Rio Grande do Norte', code: 'RN' }, { name: 'Rio Grande do Sul', code: 'RS' }, { name: 'Rondônia', code: 'RO' }, { name: 'Roraima', code: 'RR' }, { name: 'Santa Catarina', code: 'SC' }, { name: 'São Paulo', code: 'SP' }, { name: 'Sergipe', code: 'SE' }, { name: 'Tocantins', code: 'TO' }
    ];

    const cities = [
        { name: 'Caucaia' },
        { name: 'Fortaleza' },
        { name: 'Messejana' }
    ];

    return (
        <GuestFormContainer className="h-screen surface-100 flex justify-content-center align-items-center">
            <form
                onSubmit={handleSubmit(send)}
                className="w-3 surface-0 p-3 border-round-sm"
            >
                <h3>Seja bem-vindo(a), visitante</h3>
                <label
                    htmlFor="nome"
                    className="block text-sm font-bold uppercase mb-1"
                > Nome do visitante
                </label>
                <InputText
                    id="nome"
                    type="nome"
                    placeholder="Nome"
                    className="w-full mb-3"
                    {...register("nome", { required: true })}
                />
                <label
                    htmlFor="cpf"
                    className="block text-sm font-bold uppercase mb-1"
                > CPF
                </label>
                <InputText
                    id="cpf"
                    type="cpf"
                    placeholder="CPF"
                    className="w-full mb-3"
                    {...register("cpf", { required: true })}
                />
                <label
                    htmlFor="profissao"
                    className="block text-sm font-bold uppercase mb-1"
                > Profissão
                </label>
                <InputText
                    id="profissao"
                    type="profissao"
                    placeholder="Profissão"
                    className="w-full mb-3"
                    {...register("profissao", { required: true })}
                />
                <label
                    htmlFor="genero"
                    className="block text-sm font-bold uppercase mb-1"
                > Gênero
                </label>
                <Dropdown
                    value={selectedGender}
                    onChange={(e) => setSelectedGender(e.value)}
                    id="genero"
                    type="genero"
                    options={genres}
                    optionLabel="name"
                    placeholder="Gênero"
                    className="w-full mb-3"
                    {...register("genero", { required: true })}
                />
                <label
                    htmlFor="idade"
                    className="block text-sm font-bold uppercase mb-1"
                > Idade
                </label>
                <InputText
                    id="idade"
                    type="idade"
                    placeholder="idade"
                    className="w-full mb-3"
                    {...register("idade", { required: true })}
                />
                <label
                    htmlFor="estado"
                    className="block text-sm font-bold uppercase mb-1"
                > Estado
                </label>
                <Dropdown
                    value={selectedState}
                    id="estado"
                    type="estado"
                    onChange={(e) => setSelectedState(e.value)}
                    options={states}
                    optionLabel="name"
                    placeholder="Estado"
                    className="w-full mb-3"
                    {...register("estado", { required: true })}
                />
                <label
                    htmlFor="cidade"
                    className="block text-sm font-bold uppercase mb-1"
                > Cidade
                </label>
                <Dropdown
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={cities}
                    id="cidade"
                    type="cidade"
                    optionLabel="name"
                    placeholder="Cidade"
                    className="w-full mb-3"
                    {...register("cidade", { required: true })}
                />
                <Button label="Enviar" type="submit" className="w-full" />
            </form>
        </GuestFormContainer>
    );
};

export default GuestForm;