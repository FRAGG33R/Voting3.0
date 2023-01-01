import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Web3 from 'web3';
import logo from './assets/logo.png'
import wallet from './assets/wallet-solid.svg'
export default function NavBar() {
	const navigation = [
		{ name: 'Connect wallet', href: '#', current: false },
	]
	function classNames(...classes : any[]) {
		return classes.filter(Boolean).join(' ')
	}
	const connectWallet = async () => {
		if (window.ethereum != 'undefined')
		{
			const web3 = new Web3(window.ethereum);
			await window.ethereum.enable();
			const accounts = await web3.eth.getAccounts();
			const message : string = "Welcome to Voting !\n\nClick to sign in and accept the voting3.0 Terms\n\nAddress:\n" + accounts[0];
			const sign  = await web3.eth.personal.sign(message,  accounts[0], "");
			await web3.eth.personal.ecRecover(message, sign).then((res) => console.log(res));
		}
		else
			window.open('https://metamask.io/', '_blank');
	}
  return (
	<Disclosure as="nav" className="bg-transparent-800">
	{({ open }) => (
	  <>
		<div className="mx-auto max-w-7xl px-2 sm:px-6 md:px-8">
		  <div className="relative flex h-20 items-center justify-between">
			<div className="absolute inset-y-0 left-0 flex items-center md:hidden">
			  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
				<span className="sr-only">Open main menu</span>
				{open ? (
				  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
				) : (
				  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
				)}
			  </Disclosure.Button>
			</div>
			<div className="flex flex-1 sm:justify-center md:justify-between  sm:items-stretch">
			  <div className="flex flex-shrink-0 items-center">
				<img
					src={logo}
					alt="Company logo"
					className="block h-50 w-14 md:hidden"
					height={0}
					width={0}
				/>
				<img
					src={logo}
					alt="Company logo"
					className="hidden h-50 w-14 md:block"
					height={0}
					width={0}
				/>
			  </div>
			  <div className="hidden sm:ml-12 md:block">
				<a href="#_" onClick={() => { connectWallet()}} className="relative inline-block text-lg group">
					<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
					<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#845CBD]"></span>
					<span className="absolute left-0 w-56 h-56 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
					<span className="relative font-bold flex flex-row items-center">
						<img className='h-6 w-7 pr-2' src={wallet}/>
						Connect Wallet
					</span>
					</span>
					<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
				</a>
			  </div>
			</div>
		  </div>
		</div>
		<Disclosure.Panel className="md:hidden">
		  <div className="space-y-1 px-2 pt-2 pb-3">
			<Disclosure.Button>
				<a href="#_" onClick={() => { connectWallet()}}  className="relative inline-block text-lg group">
					<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
					<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#845CBD]"></span>
					<span className="absolute left-0 w-56 h-56 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
					<span className="relative font-bold flex flex-row items-center">
						<img className='h-6 w-8 pr-2' src={wallet}/>
						Connect Wallet
					</span>
					</span>
					<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
				</a>
			</Disclosure.Button>
		  </div>
		</Disclosure.Panel>
	  </>
	)}
  </Disclosure>
  );
}