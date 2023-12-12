import { useState, useEffect } from "react";
import { ItemsList } from "../../components/ItemsList/ItemsList";
import ItemServices from '../../services/Item.js';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initializeItems } from "../../reducers/itemReducer/itemReducer";
import './Home.css';
import inventory from './inventory.jpg';

const Home = ({ user }) => {
	const [search, setSearch] = useState('');
	const [showAll, setShowAll] = useState(true);

	const dispatch = useDispatch();
	const items = useSelector((state) => state.items);

	const handleSearch = (e) => {
		e.preventDefault();
		const searchData = search;
		setSearch(searchData);
		// fixes bug i had where hitting enter would sometimes show all instead of filter results
		showAll ? setShowAll(!showAll) : setShowAll(showAll);
	};

	const itemsToShow = showAll
    ? items
    : items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

	const showBtn = () => {
		setShowAll(true);
	};

	useEffect(() => {
		dispatch(initializeItems());
	}, []);

    return (
    <main>
		<header>
			<a href="#" className="logo">
			<h1>CELC Inc.</h1></a>
		<ul className="navbar">
			<li><a href="#home" className="active">Home</a></li>
			<li><Link to="/login" className= "active">Admin</Link></li>
			{ user && <li><Link to="/cart" className= "active">Cart</Link></li>}
		</ul>

		<div className="icons">
			
			<a href="#">search</a>
			<form onSubmit={handleSearch}>
				<input value={search} onChange={(e) => setSearch(e.target.value)} />
				<div>
				<button type="submit">Search</button>
				</div>
			</form>
			<button onClick={showBtn}>Show All</button>
		
			<a href="#">cart</a>
		</div>
		</header>
		<body>
		<section className="home">
		  <div className="home-text">
        	<h2>All Items:</h2>
		  </div>
		  <div className="home-img">
			<img src={inventory}/>
		  </div>
		</section>
		<Link to='/newItem' className= "btn">Post New Item</Link>
        <ItemsList items={itemsToShow} />
		</body>
    </main>
    )
};

export default Home;