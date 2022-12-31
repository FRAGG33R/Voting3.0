import ButtonAlert from './components/buttonAlert/buttonAlert';
import NavBar from './navBarComponent';
import './index.css'
import NftContainer from './components/nftContainer/nftContainer';
function App() {
	return (
		
		<div className="w-screen bg-[#19263f] relative h-auto min-h-screen">
			<NavBar />
			<div className='w-[98%] m-auto flex justify-center flex-wrap shrink-0'>
				<NftContainer></NftContainer>
				<NftContainer></NftContainer>
				<NftContainer></NftContainer>
				<NftContainer></NftContainer>
				<NftContainer></NftContainer>
				<NftContainer></NftContainer>
			</div>
		</div>
	);
}

export default App;
