import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Web3 from 'web3';
import logo from './assets/logo.png'
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
					className="block h-50 w-10 md:hidden"
					height={0}
					width={0}
				/>
				<img
					src={logo}
					alt="Company logo"
					className="hidden h-50 w-10 md:block"
					height={0}
					width={0}
				/>
			  </div>
			  <div className="hidden sm:ml-12 md:block">
				<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 	group-hover:from-purple-500 group-hover:to-pink-500 text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
					<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#1A263F] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
					Connect wallet
					</span>
				</button>
			  </div>
			</div>
		  </div>
		</div>
		<Disclosure.Panel className="md:hidden">
		  <div className="space-y-1 px-2 pt-2 pb-3">
			<Disclosure.Button>
			<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
					<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#1A263F] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
					Connect wallet
					</span>
				</button>
			</Disclosure.Button>
		  </div>
		</Disclosure.Panel>
	  </>
	)}
  </Disclosure>
  );
}