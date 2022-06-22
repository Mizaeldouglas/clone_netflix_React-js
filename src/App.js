import Tmdb from "./Tmdb";
import { useEffect,useState } from 'react'

function App() {
	
	
	useEffect(() => {
		const loadAll = async () =>{
			let list = await Tmdb.getHomeList()
			console.log(list)
		}
		loadAll()
	}, []);



  return (
    <div >
      <h1>HeLLo WorlD</h1>
    </div>
  );
}

export default App;
