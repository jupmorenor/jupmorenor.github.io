import { hydrate, prerender as ssr } from 'preact-iso';

import { Header } from './components/header/index.tsx';
import { Sidebar } from './components/sidebar/index.tsx';
import { Content } from './components/content/index.tsx';

import { data } from './assets/data.tsx';

import './style.css';

export function App() {
	return (
		<>
			<Header data={data.header} />
			<main class={"main"}>
				<Sidebar data={data.sidebar} />
				<Content data={data.content}/>
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
