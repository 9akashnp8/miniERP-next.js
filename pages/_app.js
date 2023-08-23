import Layout from '../components/Layout';

import { Provider } from 'react-redux';
import { useStore } from '../lib/store';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  const getLayout = Component.getLayout || ((page) => {
    return (
        <Provider store={store}>
          <Layout>
            {page}
          </Layout>
        </Provider>
    )
  })

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
