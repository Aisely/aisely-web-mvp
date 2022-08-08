import '.../styles/app.css'
import '.../styles/util.css'
import Layout from '../common/components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}