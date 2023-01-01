import ButtonAlert from './components/buttonAlert/buttonAlert';
import NavBar from './navBarComponent';
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
function App() {
	return (
		
		<div className="w-full bg-[#19263f] relative h-auto min-h-screen">
			<NavBar />
			<div className='w-[98%] m-auto flex justify-center flex-wrap shrink-0'>
				<NftContainer image={nft0} name="Divine Enlightenment"></NftContainer>
				<NftContainer image={nft1} name="The Mystic"></NftContainer>
				<NftContainer image={nft2} name="Celestial Dreamer"></NftContainer>
				<NftContainer image={nft3} name="The Oracle"></NftContainer>
				<NftContainer image={nft4} name="Psychedelic Visionary" ></NftContainer>
				<NftContainer image={nft5} name="The Seer"></NftContainer>
				<NftContainer image={nft6} name="The Shaman" ></NftContainer>
				<NftContainer image={nft7} name="Sacred Journeys" ></NftContainer>
				<NftContainer image={nft8} name="The Visionary"></NftContainer>
				<NftContainer image={nft9} name="Mystical Realms" ></NftContainer>
				<NftContainer image={nft10} name="The Enlightened One"></NftContainer>
				{/* <NftContainer></NftContainer>
				<NftContainer></NftContainer>
				<NftContainer></NftContainer>
				<NftContainer></NftContainer>
				<NftContainer></NftContainer>
				<NftContainer></NftContainer>
				<NftContainer></NftContainer>
				<NftContainer></NftContainer>
				<NftContainer></NftContainer> */}
			</div>
		</div>
	);
}

export default App;
