import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => {
  return (
    <Layout>
      {page}
    </Layout>
  )})

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
