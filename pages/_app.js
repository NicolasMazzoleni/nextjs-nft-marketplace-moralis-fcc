import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import "../styles/globals.css"
import Header from "../components/Header"

function App({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                <Header/>
                <Component {...pageProps} />
            </NotificationProvider>
        </MoralisProvider>
    )
}

export default App

