import { useEffect, useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import Loading from './components/states/Loading';
import Error from './components/states/Error';
import List from './components/List';
import Navbar from './components/Navbar';
import NoResults from './components/states/NoResults';
import './App.css';

const App = () => {
	const [stories, setStories] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

	const fetchData = () => {
		setIsLoading(true);
		
		fetch('http://localhost:3001/')
			.then(res => res.json())
			.then(stories => {
				setStories(stories);
				setIsLoading(false);
			}).catch(error => {
				console.error('Error fetching data:', error);
				setIsLoading(false);
			});
	};

	useEffect(() => { 
		fetchData();
	}, []);

	const filteredStories = !stories.error && stories.filter(story => story?.title.toLowerCase().includes(search.toLowerCase()));

	return (
		<div className="App">
			<Navbar refetch={fetchData} setSearch={setSearch} showSearchBar={!isLoading && !stories.error} />
				{isLoading ? <Loading /> : stories.error ? <Error /> : (
					<>
						<div className="list-container">
							{
								filteredStories.length > 0 ? filteredStories.map((story, i)=> <List key={story.id} index={i} story={story} />)
								: <NoResults />
							}
						</div>
            {filteredStories.length === 10 && <RefreshIcon className="refresh-icon" onClick={fetchData} />}
						<footer>Developed by Carolina Viero for Good Tape, April 2024</footer>
					</>
				)}
		</div>
	);
}

export default App;
