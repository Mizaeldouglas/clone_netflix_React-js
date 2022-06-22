const API_KEY = 'a429bee72c032fef0ef71e9a835b4d8f';

const API_BASE =  'https://api.themoviedb.org/3';



const basicFetch = async(endpoint) =>{
	const req = await fetch(`${API_BASE}${endpoint}`);
	const json = await req.json();

	return json;
}





export default{
	getHomeList: async () =>{
		return [
			{
				slug: 'originals',
				title: 'Originais do NetFlix',
				items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'trending',
				title: 'Recomendaodos para você',
				items: await basicFetch(`/trending/all/all/week?language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'toprated',
				title: 'Em Alta',
				items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'action',
				title: 'ação',
				items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'comedy',
				title: 'comedia',
				items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'horror',
				title: 'Terror',
				items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'romance',
				title: 'Romance',
				items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'documentery',
				title: 'Documentario',
				items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
			},
			
		];
	}
}