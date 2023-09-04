//your JS code here. If required.
const output=document.getElementById("output");
	let prom=new Promise((resolve)=>{
		setTimeout(()=>{
		resolve("Hello, world!")
		})
	})
prom.then((data)=>{
	output.innerText=data
})
