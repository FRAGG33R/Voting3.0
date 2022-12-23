pragma solidity >=0.4.16 <0.9.0;

contract nftCollection {

	bytes[] private	collection = [
			"QmVUMezmjvy5yZawz4PkxxzdN3iquoYDA7UtcRTmpHCTxj",
			"WQmNZrX7pg4kVFvq8hp933cfY2K4jDLSTd5zWnsbJE2SgW",
			"QmVymqnF8Us4xJTo29vApVmxrpjsTsPb9DE31YSBQLACJ7",
			"QmZn651gBeN7aS8iNXHRHbV84oCtnsV9DKgXcVBU4FpR4T",
			"QmZvbaRWCNRpoyHcncnPXGVo1KYxQDScXJ27anH3xcsWX6",
			"QmeivGRZf3fR8Mc4qfc1E5omLFciZ9VdCRSKizye7G45vM",
			"Qme9E8Grv6yVMxnBw4rK8a1DE2wxjmxXyKTQtrSBLDnTC3",
			"Qmbp533Bqu9nPWyPfBQ9Vn9tbJzAXCqNbNbVcxiD17kMPM",
			"Qmb2XTLf9KJiYevsutNAYkFc1PHPjDTj8oNE97bCnTNaQv",
			"Qmabnovypzx7wF7AXrioEMdb1WeyksaFGvZ3BJrULLoNxW",
			"QmdSuF1GPDQd3iRqYeYwejLVasFCvghPAW7Sy3bTRDWYm2",
			"QmcenJFLUy4AMrFzDTVLd2Ld6Jz9E7fEyTK6HTykFkeb7Z"
	];

	function getCollection() view public returns(bytes[])
	{
		return (this.collection);
	}
}