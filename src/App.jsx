// 1. Import React router dom
import { Link, Route, Routes } from 'react-router-dom';

import './App.css';

// 2. Import Page yang dibutuhkan
import Menu1 from './pages/Menu1/Menu1';
import Menu2 from './pages/Menu2/Menu2';
import Menu3 from './pages/Menu3/Menu3';
import Menu4 from './pages/Menu4/Menu4';

function App() {

	return (
		<>
			{/* 4. Membuat Link untuk mengarahkan ke menu tertentu */}
			<ul>
				<li> <Link to="/">Menu 1</Link> </li>
				<li> <Link to="/menu2">Menu 2</Link> </li>
				<li> <Link to="/menu3">Menu 3</Link> </li>
				<li> <Link to="/menu4">Menu 4</Link> </li>
			</ul>

			{/* 3. Membuat routes untuk page */}
			<Routes>
				<Route path='/' element={<Menu1 />} />
				<Route path='/menu2' element={<Menu2 />} />
				<Route path='/menu3' element={<Menu3 />} />
				<Route path='/menu4' element={<Menu4 />} />
			</Routes>
		</>
	);
}

export default App;
