import '../styles/globals.css';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import defaultValues from '../mock/defaultValues';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/localStorage';

const App = ({ Component, pageProps }: AppProps) => {

  useEffect(() => {
    if (!getLocalStorageItem('students')) {
      setLocalStorageItem('students', defaultValues);
    }
  }, []);

  return <Component {...pageProps} />
}

export default App;
