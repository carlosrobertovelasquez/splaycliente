import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, gql } from '@apollo/client';

import ImagHelper from '../../../public/imagenes/icon-1.png';
import { Colores } from '../../../styles/Colores';

import { Dias, Mes, Ano } from '../../../styles/Fecha';

const NUEVA_CUENTA = gql`
	mutation nuevoUsuario($input: UsuarioInput) {
		nuevoUsuario(input: $input) {
			id
			email
			nombre
			apellido
			cumpleanoDia
			cumpleanoMes
			cumpleanoAno
			genero
		}
	}
`;

const index = () => {
	//Mutation para crear nuevos usuarios
	const [ nuevoUsuario ] = useMutation(NUEVA_CUENTA);

	//Routing

	const route = useRouter();

	//Validamos del formulario

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object({
			nombre: Yup.string().required('El Nombre es Obligatorio'),
			email: Yup.string().required('El Correo es Obligatorio'),
			password: Yup.string()
				.required('La contraseña es Obligatorio')
				.oneOf([ Yup.ref('passwordReconfirmar') ], 'Las contraseñas no son Iguales'),
			passwordReconfirmar: Yup.string()
				.required('La contraseña es Obligatorio')
				.oneOf([ Yup.ref('password') ], 'Las Contrasenas no son iguales')
		}),

		onSubmit: async (valores) => {
			getGeoInfo();
			const { nombre, apellido, email, password, cumpleanoDia, cumpleanoMes, cumpleanoAno, genero } = valores;

			console.log(valores);
			try {
				const { data } = await nuevoUsuario({
					variables: {
						input: {
							nombre,
							apellido,
							email,
							password,
							cumpleanoDia,
							cumpleanoMes,
							cumpleanoAno
							/*
							genero,
							pais,
							ciudad,
							latitud,
							longitud
							*/
						}
					}
				});
				//Usuario Creado Correctamente
				toast.success(`Se creo correctamente el Usaurio :${data.nuevoUsuario.nombre}`);
				route.push('/categoria');
			} catch (error) {
				toast.error(error.message.replace('GraphQL error:', ''));
			}
		}
	});
	const getGeoInfo = () => {
		axios
			.get('https://ipapi.co/json/')
			.then((response) => {
				const data = response.data;
				return data;
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<ContainerGeneralSyled>
			<FormRegistroStyled onSubmit={formik.handleSubmit}>
				<ContainerIzquierdoSyled>
					<TituloFormSyled>Crea tu Cuenta</TituloFormSyled>

					<SubTituloFormSyled>Es Simples y Cortos pasos..</SubTituloFormSyled>

					<Input50Syled
						type="text"
						id="nombre"
						required
						autoComplete="on"
						placeholder="Nombre"
						error={formik.errors.nombre && true}
						value={formik.values.nombre}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>

					<Input50Syled
						type="text"
						required
						id="apellido"
						autocomplete="off"
						autoComplete="off"
						placeholder="Apellido"
						required
						value={formik.values.apellido}
						onChange={formik.handleChange}
					/>
					<Input100Syled
						type="text"
						placeholder="Numero de celular o correo eletrónico"
						id="email"
						autocomplete="off"
						required
						value={formik.values.correo}
						onChange={formik.handleChange}
					/>
					{formik.errors.email ? <div>{formik.errors.email}</div> : null}
					<Input100Syled
						type="password"
						id="password"
						autoComplete="new-password"
						placeholder="Contraseña"
						value={formik.values.password}
						onChange={formik.handleChange}
						error={formik.errors.password}
					/>
					{formik.errors.nombre ? <div>{formik.errors.password}</div> : null}
					<Input100Syled
						type="password"
						autoComplete="off"
						id="passwordReconfirmar"
						placeholder=" Repetir contraseña"
						value={formik.values.passwordReconfirmar}
						onChange={formik.handleChange}
						error={formik.errors.passwordRecinfirmar}
					/>
					{formik.errors.passwordReconfirmar ? <div>{formik.errors.passwordReconfirmar}</div> : null}

					<VideoStyled>
						<iframe width="90%" height="250" src="https://www.youtube.com/embed/tgbNymZ7vqY" />
					</VideoStyled>
				</ContainerIzquierdoSyled>
				<ContainerDerechoSyled>
					<LabelFechaStyled>Fecha de nacimiento</LabelFechaStyled>
					<ContainerFechaSyled>
						<ItemContainerSytled>
							<LabelStyled>Dia</LabelStyled>
							<SelectDiaStyled
								id="cumpleanoDia"
								value={formik.values.cumpleanoDia}
								onChange={formik.handleChange}
							>
								<option value=" ">Dia</option>
								<option value="01">01</option>
								<option value="02">02</option>
								<option value="03">03</option>
								<option value="04">04</option>
								<option value="05">05</option>
								<option value="06">06</option>
								<option value="07">07</option>
								<option value="08">08</option>
								<option value="09">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
								<option value="25">25</option>
								<option value="26">26</option>
								<option value="27">27</option>
								<option value="28">28</option>
								<option value="29">29</option>
								<option value="30">30</option>
								<option value="31">31</option>
							</SelectDiaStyled>
						</ItemContainerSytled>
						<ItemContainerSytled>
							<LabelStyled>Mes</LabelStyled>
							<SelectDiaStyled
								id="cumpleanoMes"
								name="cumpleanoMes"
								onChange={formik.handleChange}
								value={formik.values.cumpleanoMes}
							>
								<option value="0">Mes</option>
								<option value="01">ene</option>
								<option value="02">feb</option>
								<option value="03">mar</option>
								<option value="04">abr</option>
								<option value="05">may</option>
								<option value="06">jun</option>
								<option value="07">jul</option>
								<option value="08">ago</option>
								<option value="09">sep</option>
								<option value="10">oct</option>
								<option value="11">nov</option>
								<option value="12">dic</option>
							</SelectDiaStyled>
						</ItemContainerSytled>
						<ItemContainerSytled>
							<LabelStyled>Año</LabelStyled>
							<div>
								<SelectDiaStyled
									id="cumpleanoAno"
									name="cumpleanoAno"
									onChange={formik.handleChange}
									value={formik.values.cumpleanoAno}
								>
									<option value="0" label="Año" />
									<option value="2005" label="2005" />
									<option value="2004" label="2004" />
									<option value="2003" label="2003" />
									<option value="2002" label="2002" />
									<option value="2001" label="2001" />
									<option value="2000" label="2000" />
									<option value="1999" label="1999" />
									<option value="1998" label="1998" />
									<option value="1997" label="1997" />
									<option value="1996" label="1996" />
									<option value="1995" label="1995" />
									<option value="1994" label="1994" />
									<option value="1993" label="1993" />
									<option value="1992" label="1992" />
									<option value="1991" label="1991" />
									<option value="1990" label="1990" />
									<option value="1989" label="1989" />
									<option value="1988" label="1988" />
									<option value="1987" label="1987" />
									<option value="1986" label="1986" />
									<option value="1985" label="1985" />
									<option value="1984" label="1984" />
									<option value="1982" label="1982" />
									<option value="1981" label="1981" />
									<option value="1980" label="1980" />
									<option value="1979" label="1979" />
									<option value="1978" label="1978" />
									<option value="1977" label="1977" />
									<option value="1976" label="1976" />
									<option value="1975" label="1975" />
									<option value="1974" label="1974" />
									<option value="1973" label="1973" />
									<option value="1972" label="1972" />
									<option value="1970" label="1970" />
									<option value="1971" label="1971" />
									<option value="1970" label="1970" />
									<option value="1969" label="1969" />
									<option value="1968" label="1968" />
									<option value="1967" label="1967" />
									<option value="1966" label="1966" />
									<option value="1965" label="1965" />
								</SelectDiaStyled>
							</div>
						</ItemContainerSytled>
						<ItemContainerSytled>
							<ImgHelpStyle />
						</ItemContainerSytled>
					</ContainerFechaSyled>
					<SexoStyled>
						Sexo : Mujer
						<input
							type="radio"
							name="mujer"
							id="mujer"
							value={formik.values.mujer}
							onChange={formik.handleChange}
						/>
						Hombre
						<input
							type="radio"
							name="hombre"
							id="hombre"
							value={formik.values.hombre}
							onChange={formik.handleChange}
						/>
						<ImgHelpStyle />
					</SexoStyled>

					<div>
						<ParrafoStyled>
							Al hacer click en "registrate", aceptas nuestros condiciones y politicas de datos, es
							posible que te enviemos notificaciones por SMS o al correo eletrónico.
						</ParrafoStyled>
					</div>

					<BotonSyled type="submit">Registrate</BotonSyled>
				</ContainerDerechoSyled>
			</FormRegistroStyled>
		</ContainerGeneralSyled>
	);
};

export default index;

function initialValues() {
	return {
		nombre: '',
		apellido: '',
		email: '',
		password: '',
		passwordReconfirmar: '',
		dias: '',
		mes: '',
		ano: '',
		genero: ''
	};
}

const ContainerGeneralSyled = styled.div`
	width: 100%;
	margin: 0px;
	margin-top: 75px;
	padding: 0px;
`;

const FormRegistroStyled = styled.form`
	max-width: 70%;
	margin: auto;
	box-sizing: border-box;
	display: flex;
	padding: 10px;
`;
const ContainerIzquierdoSyled = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const TituloFormSyled = styled.h1`
	padding-top: 10px;
	text-align: left;
	font-size: 50px;
	color: #5a5b5d;
	margin: 0;
`;
const SubTituloFormSyled = styled.p`
	color: #5a5b5d;
	font-size: 20px;
	margin-top: 7px;
	margin-bottom: 7px;
	text-align: left;
	padding: 5px;
	width: 100%;
`;
const Input50Syled = styled.input`
	width: 49%;
	outline: none;
	font-size: 18px;
	padding: 15px;
	margin-top: 0px;
	margin-bottom: 12px;
	flex-wrap: wrap;
	border-radius: 15px;
	border: 2px solid ${Colores.grey_font};
	justify-content: space-between;
	font-family: ${Colores.tipo_letra};
`;
const Input100Syled = styled.input`
	width: 100%;
	outline: none;
	font-size: 18px;
	padding: 15px;
	margin-bottom: 12px;
	border-radius: 15px;

	border: 2px solid ${Colores.grey_font};
`;
const VideoStyled = styled.div`
	width: 100%;
	padding-top: 5%;
	padding-bottom: 20%;
	align-items: center;
	position: relative;
`;

//Lado derecho

const ContainerDerechoSyled = styled.div`
	padding: 12px;
	margin-left: 30px;
	margin-right: 8px;
	width: 100%;
`;
const LabelFechaStyled = styled.p`
	margin-top: 23px;
	margin-left: 60px;
	text-align: left;
	padding: 1px;
	font-size: 22px;
	color: #808080;
`;

//Dia const

const ContainerFechaSyled = styled.div``;
const ItemContainerSytled = styled.div`
	width: 20%;
	display: inline-block;
	margin: 8px;
`;

const SelectDiaStyled = styled.select`
	width: 100%;
	height: 55px;
	font-size: 100%;
	cursor: pointer;
	border-radius: 15px;
	border: 2px solid ${Colores.grey_font};
	font-family: ${Colores.tipo_letra};
	padding: 15px;
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	transition: color 0.3s ease, background-color 0.3s ease, border-bottom-color 0.3s ease;
	:hover,
	focus {
		color: white;
		border: none;
		outline: none !important;
		outline-offset: 0 !important;
		outline-width: 0;
		background-color: #00a79d;
		border-radius: 20px;
		border: 2px solid ${Colores.grey_font};
	}
`;

const LabelStyled = styled.label`
	font-size: 22px;
	color: #808080;
`;
const ImgHelpStyle = styled.img.attrs({ src: ImagHelper })`
width: 30px;
height: 30px;
border: 1px solid blue;`;

const SexoStyled = styled.fieldset`
	text-align: left;
	margin-left: 50px;
	border-style: none;
	padding: 14px;
	float: left;
	font-size: 22px;
	width: 100%;
	color: #808080;
	padding-top: 25px;
	& input {
		margin: 12px;
	}
`;
const ParrafoStyled = styled.p`
	color: #808080;
	margin-left: 50px;
	font-size: 18px;
	text-align: justify;
	margin-top: 12px;
`;
const BotonSyled = styled.button`
	border: 3px solid white;
	margin-top: 33px;
	padding: 10px;
	width: 250px;
	border-radius: 25px;
	font-size: 28px;
	color: white;
	border: 3px solid white;
	background-color: #00a79d;
	white-space: normal;
	outline: none;

	:hover {
		background: white;
		color: #808080;
		cursor: pointer;
		border: 3px solid #808080;
	}
`;
