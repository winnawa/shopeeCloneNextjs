import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, from } from "@apollo/client";
import {onError} from '@apollo/client/link/error'
import NotiContextComponent from '../components/ultility/NotiContext';


const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
})
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    )
  if (networkError) console.error(`[Network error]: ${JSON.stringify(networkError, null, 2)})`)
})

const client = new ApolloClient({
    //uri: 'http://localhost:4000/',
    link : from ([errorLink,httpLink]),
    cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return( 
  <ApolloProvider client={client}>
      <NotiContextComponent>
        <Component {...pageProps} />
      </NotiContextComponent>
  </ApolloProvider>
  )
}

export default MyApp
