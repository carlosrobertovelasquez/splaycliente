import React from 'react'
import styled from 'styled-components'

import LogoOficial from '../../atoms/LogoOficial'
import Login from '../../molecules/Login'

const index = () => {
    return (
        <NavbarStyled>
        <ContainerLogoStyled>
            <LogoOficial/>
        </ContainerLogoStyled>
        <Login/>
    </NavbarStyled>
    )
}


export default index

/*css*/

const NavbarStyled = styled.header`

	background: #00a79d;
	width:100%;
	display: flex;
	position: fixed;
    height: 100px;
	z-index: 100px;
	margin-top:0;
	top: 0;
	right:0;
`;
const ContainerLogoStyled=styled.div`  
	margin-left:8%;
	width:25%;
	padding:10px;
	text-align:right;
	align-items:right;
	top:0;
`