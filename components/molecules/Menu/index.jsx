import React from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';

/*
.btn-link-footer {
    border: 1px solid $primary_color;
    color: #808080;
    padding: 2px 7px;
    border-radius: 15px;
    margin: 10px 3px;
  }
  .btn-link-footer:hover {
    background-color: $primary_color;
    color: #fff;
    border: 1px solid #808080;
  }
  .btn-contact {
    background-color: $primary_color;
    color: #fff;
    border: 1px solid #808080;
  }
  .btn-contact:hover {
    background-color: #fff;
    border: 1px solid $primary_color;
    color: #808080;
    padding: 2px 7px;
    border-radius: 15px;
    margin: 10px 3px;
  }
	<div className="footer-links">

*/
const LineaStyled = styled.div`
	border-top: 3px #fff solid;
	padding-top: 10px;
    margin-left:16%;
    margin-right:16%;
    
`;

const Menu = () => {
	return (
		
			<LineaStyled>
				<Button href="/">Iniciar Sesión</Button>

				<Button href="/Registro">Registrarse</Button>

				<Button href="/">Crear Anuncio</Button>

				<Button href="/">Privacidad</Button>

				<Button href="/">Anuncios</Button>

				<Button href="/">Politica</Button>

				<Button href="/">Contatenos</Button>
			</LineaStyled>
		
	);
};

export default Menu;