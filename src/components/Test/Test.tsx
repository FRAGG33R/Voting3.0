import './Test.css';

type TestArg = 
{
	name:string
	nono:string
	children:string//this children par in the datatype TestArg is meant to handel the data inserted in the tag when it's called
}

export default function Test(props:TestArg) {
	return (
		<div>
			<h1>this is Test name is {props.name} {props.nono}</h1>
			<h3>{props.children}</h3>
		</div> 
	);
}
