import type { AppProps } from 'next/app'
import { Providers } from '../components';

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default App;
