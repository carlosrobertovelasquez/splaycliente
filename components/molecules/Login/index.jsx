import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { gql, useMutation } from '@apollo/client';
import { setToken, decodeToken } from '../../../utils/token';
import Button from '../../atoms/Button';
import { Colores } from '../../../styles/Colores';
import useAuth from '../../../hooks/useAuth';

const AUTENTICAR_USUARIO = gql`
	mutation autenticarUsuario($input: AutenticarInput) {
		autenticarUsuario(input: $input) {
			token
		}
	}
`;

const Index = () => {
	//Router
	const router = useRouter();
	const User = useAuth();

	//State para el mensaje
	const [ mensaje, guardarMensaje ] = useState(null);
	//Mutation para crear nuevos usuarios en apollo
	const [ autenticarUsuario ] = useMutation(AUTENTICAR_USUARIO);

	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: Yup.object({
			email: Yup.string().email('El email no es valido').required('El email no puede ir vacio'),
			password: Yup.string().required('El password es obligarorio')
		}),
		onSubmit: async (valores) => {
			const { email, password } = valores;

			try {
				const { data } = await autenticarUsuario({
					variables: {
						input: {
							email,
							password
						}
					}
				});
				guardarMensaje('Autenticado......');
				//Guardar el token en localstorage
				const { token } = data.autenticarUsuario;
				//localStorage.setItem('token', token);
				setToken(token);

				//Direccionar a Favoritos
				router.push('muro');
			} catch (error) {
				toast.error(error.message.replace('GraphQL error:', ''));
			}
		}
	});
	const mostrarMensaje = () => {
		return (
			<div>
				<p>{mensaje}</p>
			</div>
		);
	};

	return (
		<FormStyle onSubmit={formik.handleSubmit}>
			<ItemStyled>
				<div>{mensaje && mostrarMensaje()}</div>
				<InputSyled
					type="text"
					placeholder="Email o Telefono"
					name="email"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
			</ItemStyled>
			<ItemStyled>
				<InputSyled
					type="password"
					placeholder="Password"
					name="password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
				/>
			</ItemStyled>
			<InicarSescionStyled type="submit">Iniciar Sesión</InicarSescionStyled>
			<BotonLargo onClick={() => Router.push('/myroute')}>¿Olvidaste Tu Cuenta?</BotonLargo>
		</FormStyle>
	);
};

export default Index;

/* estilos css */

const FormStyle = styled.form`
	float: right;
	display: flex;
	margin: 0;
	align-items: center;
	width: 50%;
`;

const ItemStyled = styled.div`padding: 3px;`;
const InputSyled = styled.input`
	height: 28px;

	text-decoration: none;
	border: 3px solid white;
	outline: none;
	color: ${Colores.grey_font};
	text-align: center;
	::hover {
		background-color: ${Colores.white_color};
		color: ${Colores.white_color};
		border: 3px solid ${Colores.grey_font};
	}
`;
const InicarSescionStyled = styled.button`
	outline: none;
	border: 3px solid white;
	color: ${Colores.white_color};
	background-color: ${Colores.Primario};
	padding: 2px 2px;
	border-radius: 15px;
	margin: 2px 2px;
	width: 13%;
	height: 20px;
	box-sizing: content-box;
	display: inline-block;
	text-decoration: none;
	white-space: normal;
	word-wrap: break-Word;
	text-align: center;
	cursor: pointer;
	:hover {
		background: white;
		color: ${Colores.grey_font};
		border: 3px solid ${Colores.grey_font};
	}
`;
const BotonLargo = styled(InicarSescionStyled)`
width: 21%; 
`;
