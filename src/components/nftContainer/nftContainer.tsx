import './nftContainer.css';
import nft from '../../assets/0x0.png'
export default function nftContainer() {
	return (
		<div className='container flex flex-col justify-start relative w-[370px] h-[500px] bg-[#0E172A] rounded-[10pt] duration-500 hover:drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] hover:w-[400px]'>
				<div className='nft_c w-full flex justify-center'>
					<img className='nft w-[300px] pt-[20px]' src={nft} alt="" />
				</div>
				<div className='py-[6px]'>
					<h2 className='font-bold w-full text-center text-white text-[40px]'>Bord Ape</h2>
				</div>
				<div className='flex flex-col'>
					<div className='text-[#9F70DD] m-auto w-[300px] text-center border-black rounded-[8pt] flex justify-end flex-row pb-[5px] pr-[8px]'>
						<p className='font-sans inline text-[14px]'><p className='font-sans inline text-white'>17</p> Votes</p>
					</div>
					<div className='m-auto cursor-pointer bg-[#9CB5FE] text-white rounded-[8pt] text-[30px] w-[300px] text-center h-[60px] flex items-center justify-center'>Vote</div>
				</div>
		</div>
	);
}
