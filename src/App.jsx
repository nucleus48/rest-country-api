import Loading from "./components/Loading";
import { GlobalStyle } from "./components/styles/Global";
import ContextProvider from "./providers/ContextProvider";
import StyleProvider from "./providers/StyleProvider";
import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Detail = lazy(() => import("./pages/Detail"));

export default function App() {
	return (
		<ContextProvider>
			<StyleProvider>
				<GlobalStyle />
				<Suspense fallback={<Loading />}>
					<HashRouter>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/detail/:alpha" element={<Detail />} />
						</Routes>
					</HashRouter>
				</Suspense>
			</StyleProvider>
		</ContextProvider>
	);
}
