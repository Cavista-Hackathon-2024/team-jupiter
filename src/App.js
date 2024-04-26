import { Routes, Route } from 'react-router-dom';
import { HomePage, ReportPage } from './pages';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/report' element={<ReportPage />} />
			</Routes>
		</>
	);
}

export default App;
