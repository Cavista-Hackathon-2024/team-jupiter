import React from 'react';

const ReportPage = () => {
	return (
		<div>
			<header>
				<div className='fx_between'>
					<h1 className='font-normal'>Eternal</h1>

					<div className='btn'>Edit</div>
				</div>
			</header>

			<main className='container mx-auto p-6'>
				<section className='mb-10'>
					<h2 className='mb-4 text-xl font-bold'>Result</h2>

					<div className='grid md:grid-cols-2 gap-4'>
						<div className='textBox'>
							<h5>Possible Conditions</h5>
							<div>
								<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
								<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
								<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							</div>
						</div>

						<div className='textBox'>
							<h5>Possible Causes</h5>
							<div>
								<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
								<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
								<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							</div>
						</div>

						<div className='textBox'>
							<h5>Skin care tips</h5>
							<div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iusto dolorum provident totam,
								sunt ratione quos atque maiores vitae earum optio numquam perferendis ipsam fugiat laboriosam
								tempora ad harum
							</div>
						</div>

						<div className='textBox'>
							<h5>Product suggestions</h5>
							<div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iusto dolorum provident totam,
								sunt ratione quos atque maiores vitae earum optio numquam perferendis ipsam fugiat laboriosam
								tempora ad harum
							</div>
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
							class='bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
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
			</main>
		</div>
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
		<div className='btn_primary'>Book</div>
	</div>
);

export default ReportPage;
