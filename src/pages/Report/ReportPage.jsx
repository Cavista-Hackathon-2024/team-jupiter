import React, { useEffect, useState } from 'react';
import Layout from '../../ui/Layout';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Link, useLocation } from 'react-router-dom';

const ReportPage = () => {
	const [loading, setLoading] = useState(true);
	const [response1, setResponse1] = useState();
	const [response2, setResponse2] = useState();
	const [response3, setResponse3] = useState();
	const [response4, setResponse4] = useState();
	const location = useLocation();
	const data = location.state;

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

		const generateResultAI = (data) => {
			// Access your API key (see "Set up your API key" above)
			const genAI = new GoogleGenerativeAI('AIzaSyCKYbGei2EgsdiOnOu2qDERE5SAUlNAWEc');

			// For text-only input, use the gemini-pro model
			const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

			const template = `that match the user’s symptom and details. symptom description: ${data.nature} | Appearance: ${data.appearance}  | Gender: ${data.gender} | NOTE: don't format response.`;

			const prompt1 = `generate a list(max 5) of potential skin conditions ${template}.`;
			const prompt2 = `generate a list(max 5) of possible cause of the skin conditions ${template}.`;
			const prompt3 = `generate a list(max 5) of skin care tips ${template}.`;
			const prompt4 = `generate a list(max 5) of Product Suggestions ${template}.`;

			async function run(prompt, setResponse) {
				const result = await model.generateContent(prompt);
				const response = await result.response;
				const text = response.text();
				setResponse(text);
			}

			run(prompt1, setResponse1)
				.then(() => run(prompt2, setResponse2))
				.then(() => run(prompt3, setResponse3))
				.then(() => {
					run(prompt4, setResponse4);
					setLoading(false);
				});
		};

		generateResultAI(data);
	}, [data]);

	return (
		<>
			{loading && <Loader />}

			<Layout
				actionBtn={
					<Link to='/' className='btn'>
						Go Back
					</Link>
				}>
				<section className='mb-10 mt-2'>
					<h2 className='mb-4 text-xl font-bold'>Result</h2>

					<div className='grid md:grid-cols-2 gap-4'>
						<div className='textBox'>
							<h5>Possible Conditions</h5>
							<div>{response1}</div>
						</div>

						<div className='textBox'>
							<h5>Possible Causes</h5>
							<div>{response2}</div>
						</div>

						<div className='textBox'>
							<h5>Skin care tips</h5>
							<div>{response3}</div>
						</div>

						<div className='textBox'>
							<h5>Product suggestions</h5>
							<div>{response4}</div>
						</div>
					</div>
				</section>

				<section className='mb-10'>
					<h2 className='mb-5 text-xl font-bold'>Book an appointment with a doctor</h2>

					<div className='grid md:grid-cols-4 gap-4'>
						<XCard />
						<XCard />
						<XCard />
						<XCard />
					</div>
				</section>

				<section className='mb-10'>
					<h2 className='mb-4 text-xl font-bold'>Chat with AI</h2>

					<div className='border rounded-md border-gray-300 bg-gray-50'>
						<div className='h-28'></div>
					</div>

					<div className='fx_between mt-4 gap-2'>
						<input
							type='text'
							id='first_name'
							className='bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
							placeholder='Enter message'
							required
						/>

						<div className='btn_primary h-[40px] !rounded _flex justify-center !mt-0'>
							<svg
								fill='#000000'
								height='20px'
								width='20px'
								version='1.1'
								id='Capa_1'
								xmlns='http://www.w3.org/2000/svg'
								xmlnsXlink='http://www.w3.org/1999/xlink'
								viewBox='0 0 495.003 495.003'
								xmlSpace='preserve'>
								<g id='SVGRepo_bgCarrier' strokeWidth={0} />
								<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
								<g id='SVGRepo_iconCarrier'>
									<g id='XMLID_51_'>
										<path
											id='XMLID_53_'
											d='M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616 l-67.6-32.22V456.687z'
										/>
										<path
											id='XMLID_52_'
											d='M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422 c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414 l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956 L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z'
										/>
									</g>
								</g>
							</svg>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};

const XCard = () => (
	<div className='xCard '>
		<img
			src='https://randomuser.me/api/portraits/women/89.jpg'
			className='w-[50px] h-[50px] rounded-full mx-auto'
			alt='doctor'
		/>
		<h5>Mary Cavis</h5>
		<span className='text-xs'>Lagos, Nigeria</span>
		{/* <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iusto dolorum provident totam</div> */}
		<div className='btn_primary cursor-pointer'>Book</div>
	</div>
);

const Loader = () => (
	<div class='absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center'>
		<div class='flex items-center'>
			{/* <span class='text-3xl mr-4'>Loading</span> */}
			<svg
				class='animate-spin h-8 w-8 text-gray-800'
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'>
				<circle class='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'></circle>
				<path
					class='opacity-75'
					fill='currentColor'
					d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
			</svg>
		</div>
	</div>
);

export default ReportPage;
