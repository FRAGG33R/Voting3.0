import Spline from '@splinetool/react-spline';

export default function LandingPage()
{
	return (
		<div className="w-full h-[1200px] flex xl:flex-row-reverse sm:flex-col">
			<div className="md:flex sm:hidden justify-center items-center xl:w-1/2 h-full ">
				<Spline scene="https://prod.spline.design/H9XWCN0gHEuBSlv0/scene.splinecode" />
			</div>
			<div className="flex justify-center space-y-8 text-left flex-col text-white xl:w-1/3 items-cetner  h-full">
				<div className='font-bold  sm:text-3xl xl:text-5xl sm:self-center xl:self-start'>NFT Voting Arena</div>
				<p className='text-xl leading-loose xl:w-full sm:w-10/12 md:w-1/2 sm:self-center xl:self-start'>NFTs are changing the way we think about digital ownership and value. By allowing users to vote for their favorite NFTs on our platform, we're empowering them to shape the future of the digital art market.</p>
			</div>
		</div>
	)
}