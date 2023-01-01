import './nftContainer.css';
import nft from '../../assets/0x0.png'
import nft1 from '../../assets/sadf.avif'
type images = 
{
	image: string
	name: string
}
export default function nftContainer(props: images) {
	return (
		<div className='shrink-0 m-[12pt] container flex flex-col justify-start relative h-[500px] bg-[#0E172A] rounded-[8pt] duration-300 hover:drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] hover:w-[400px]'>
			<div className='nft_c w-full flex justify-center'>
				<img className='nft w-[300px] mt-[20px] rounded-[8pt]' src={props.image} alt="" />
			</div>
			<div className='py-[6px] shrink-0'>
				<h2 className='font-bold w-full text-center text-white text-[35px]'>{props.name}</h2>
			</div>
			<div className='flex flex-col'>
				<div className='text-[#845cbc] m-auto w-[300px] text-center border-black rounded-[8pt] flex justify-end flex-row pb-[5px] pr-[8px]'>
					<p className='font-sans inline text-[14px] border-[1px] rounded-[15pt] w-[90px] border-[#845cbc]'><p className='font-sans inline text-white'>17</p> Votes</p>
				</div>
				<div className='vote m-auto cursor-pointer bg-[#845cbc] text-white rounded-[15pt] text-[30px] w-[300px] text-center h-[50px] flex items-center justify-center mt-4'>Vote</div>
			</div>
		</div>
	);
}
