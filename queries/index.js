import { gql, useMutation } from '@apollo/client';

export const USUARIO_ACTUAL = gql`
	query obtenerUsuario {
		obtenerUsuario {
			usuario
		}
	}
`;
