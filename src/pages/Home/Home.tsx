// import useSEO from '../../hooks/useSEO';
import './Home.scss'
import { Helmet } from 'react-helmet-async'

const Home = () => {

  // useSEO('Home', 'This is the Home page');
  return (
    <main className="home">
      <Helmet>
        <title>Home | AppPelículas</title>
        <link rel="canonical" href={`demo-contentful-and-seo.vercel.app`} />
        <meta name="robots" content="index, follow"></meta>
      </Helmet>
      <h1 className="home__title">Home</h1>
      <p className="home__description">This is the Home page</p>
    </main>
  )
}

export default Home
