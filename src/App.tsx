import ButtonAlert from './components/buttonAlert/buttonAlert';
import NavBar from './components/NavBar/navBarComponent';
import './index.css'
import nft0 from './assets/nft1.png'
import nft1 from './assets/nft2.png'
import nft2 from './assets/nft3.png'
import nft3 from './assets/nft4.png'
import nft4 from './assets/nft5.png'
import nft5 from './assets/nft6.png'
import nft6 from './assets/nft7.png'
import nft7 from './assets/nft8.png'
import nft8 from './assets/nft9.png'
import nft9 from './assets/nft10.png'
import nft10 from './assets/nft11.png'
import NftContainer from './components/nftContainer/nftContainer';
import LandingPage from './components/LandingPage/LandingPageComponent';
function App()
{
	const NFTs = [
		{ path: nft0, name : "Divine Enlightenment"},
		{ path: nft1, name : "The Mystic"},
		{ path: nft2, name : "Celestial Dreamer"},
		{ path: nft3, name : "The Oracle"},
		{ path: nft4, name : "Psychedelic Visionary"},
		{ path: nft5, name : "The Seer"},
		{ path: nft6, name : "The Shaman"},
		{ path: nft7, name : "Sacred Journeys"},
		{ path: nft8, name : "The Visionary"},
		{ path: nft9, name : "Mystical Realms"},
		{ path: nft10, name : "The Enlightened One"},
	]
	return (
		<div className="w-full bg-[#19263f] relative h-full min-h-screen gap-x-12">
			<NavBar />
			<LandingPage />
			<div className='w-[98%] m-auto h-full flex justify-center flex-wrap shrink-0 bg-[#19263f]'>
				{NFTs.map((item) => <NftContainer image={item.path} name={item.name}></NftContainer>)}
			</div>
		</div>
	);
}

export default App;
