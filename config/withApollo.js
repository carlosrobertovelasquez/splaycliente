import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';

export default withApollo(
	({ headers }) =>
		new ApolloClient({
			uri: 'http://localhost:4000/graphql',
			credentials: 'include',
			headers
		})
);