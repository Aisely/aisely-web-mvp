import '../styles/util.css'
import '../styles/app.css'
import Layout from '../layout/Layout'
import { TableDataContextProvider } from '../contexts/TableDataContext'

function MyApp({ Component, pageProps }) {
  return (
    <TableDataContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TableDataContextProvider>
  )
}

export default MyApp;

