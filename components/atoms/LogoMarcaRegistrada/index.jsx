import React from 'react';
import logocopyright from '../../../public/imagenes/Logo-copyright.png';

import styled from 'styled-components';

const LogoRegistradoStyled = styled.div`
	width: 100%;
	text-align: center;
	margin-top: 10px;
`;

const LogoCopyRightStyled = styled.img.attrs({ src: logocopyright })`
height: 30px;
  
`;

export default function LogoMarcaRegistrada() {
	return (
		<LogoRegistradoStyled>
			<LogoCopyRightStyled />
		</LogoRegistradoStyled>
	);
}