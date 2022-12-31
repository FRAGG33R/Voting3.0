import ButtonAlert from './components/buttonAlert/buttonAlert';
import NavBar from './navBarComponent';
import './index.css'
import NftContainer from './components/nftContainer/nftContainer';
function App() {
	return (
		
		<div className="w-screen h-screen bg-gradient-to-bl from-sky-800 via-sky-500 to-pink-400">
			<NavBar />
			<NftContainer></NftContainer>
		</div>
	);
}

export default App;
