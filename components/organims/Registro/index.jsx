import React from 'react';
import CuentaPersonal from '../../molecules/CuentaPersonal';
import styled from 'styled-components';
import CuentaEmpresarial from '../../molecules/CuentaEmpresarial';
import logofondo from '../../../public/imagenes/Logo-bg.png';

const SectionStyled = styled.section`
	background-image: url(${logofondo});
	background-repeat: no-repeat;
	background-size: 75%;
	background-position-y: bottom;
	background-color: #e6e7e9;
`;

const index = () => {
	return (
		<SectionStyled>
			<CuentaPersonal />
		</SectionStyled>
	);
};

export default index;
