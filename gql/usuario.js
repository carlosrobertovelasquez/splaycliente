import { gql } from '@apollo/client';
const NUEVA_CUENTA = gql`
	mutation nuevoUsuario($input: UsuarioInput) {
		nuevoUsuario(input: $input) {
			id
			email
			nombre
			apellido
		}
	}
`;

module.exports = NUEVA_CUENTA;
