import '../styles/global_styles.scss';
import Layout from '../components/layouts/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            {/* this renders the pages */}
            <Component {...pageProps} /> 
        </Layout>
    )
}

export default MyApp;
