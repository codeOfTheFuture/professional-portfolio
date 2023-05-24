import { AppProps } from "next/app";
import { ThemeProvider } from "providers/ThemeProvider";
import "../scss/main.scss";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
