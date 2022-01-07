import '../styles/global.css'
import {AppProps} from 'next/app'

// export default function app({Component, pageProps}) {
//   return <Component {...pageProps} />
// }

function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default App
