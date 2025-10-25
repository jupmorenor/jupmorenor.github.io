import { hydrate, prerender as ssr } from 'preact-iso';

import { Header } from './components/header/index.tsx';
import { Sidebar } from './components/sidebar/index.tsx';
import { Content } from './components/content/index.tsx';

import './style.css';

export function App() {
	return (
		<>
			<Header />
			<main>
				<Sidebar />
				<Content />
			</main>
		</>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
