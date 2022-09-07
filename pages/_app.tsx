import '../styles/globals.css';
import type { AppPropsWithLayout } from '#lib/types/layouts';

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.layout ?? (page => page);
  return getLayout(<Component {...pageProps} />);
}

export default App;
