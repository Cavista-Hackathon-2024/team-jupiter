import { useState } from 'react';
import { PiCamera } from 'react-icons/pi';
import HomeWrapper from './styles';
import TextAreaInput from '../../ui/TextArea/TextAreaInput';
import Input from '../../ui/Input/Input';
import { ImagePlaceholder } from '../../assets/images';
import Layout from '../../ui/Layout';

const HomePage = () => {
	const [imageURL, setImageURL] = useState('');
	const [formData, setFormData] = useState({
		image: '',
		age: '',
		gender: '',
		allergies: '',
		medications: '',
		nature: '',
		appearance: '',
		duration: '',
		changes: '',
		sun_exposure: '',
		skin_care_routine: '',
		dietary_habit: '',
		location: '',
		spread: '',
		intensity: '',
		trigger: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const reader = new FileReader();

	const handleFileSelect = (name, value) => {
		setFormData((prev) => ({ ...prev, [name]: value[0] }));

		reader.onload = function (event) {
			const imagePath = event.target.result; // Get the data URL
			setImageURL(imagePath);
		};

		reader.readAsDataURL(value[0]);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<Layout>
			<HomeWrapper>
				<section className='upload-image rounded-md bg-gray-100 border border-gray-300 mb-8 mt-4'>
					<div className='image'>
						<img
							src={imageURL ? imageURL : ImagePlaceholder}
							className={!imageURL && 'opacity-20'}
							alt='skin_image'
						/>
						<label htmlFor='image'>
							<input
								type='file'
								name='image'
								id='image'
								onChange={(e) => handleFileSelect(e.target.name, e.target.files)}
							/>
							<PiCamera size={40} />
						</label>
						<p className='mt-3 font-semibold'>Add Photo</p>
					</div>
				</section>

				<section className='input-section'>
					<form onSubmit={handleSubmit}>
						<div className='category'>
							<h6>Personal Information</h6>

							<div className='input-boxes'>
								<Input
									name='age'
									label='Age'
									placeholder='Certain skin conditions are more common in specific age groups.'
									value={formData.age}
									onChange={(event) => handleChange(event)}
								/>

								<Input
									name='gender'
									label='Gender'
									placeholder='Some skin issues are influenced by gender due to hormonal differences.'
									value={formData.gender}
									onChange={(event) => handleChange(event)}
								/>

								<TextAreaInput
									name='allergies'
									label='Allergies'
									placeholder='Known allergies, particularly to medications, food, or environmental factors.'
									value={formData.allergies}
									rows={6}
									onChange={(event) => handleChange(event)}
								/>
								<TextAreaInput
									name='medications'
									label='Medications'
									placeholder='Known medication, particularly to medications, food, or environmental factors.'
									value={formData.medications}
									rows={6}
									onChange={(event) => handleChange(event)}
								/>
							</div>
						</div>

						<div className='category'>
							<h6>symptoms</h6>
							<div className='input-boxes'>
								<TextAreaInput
									name='nature'
									label='Nature of symptoms'
									placeholder='Details about itchiness, pain, burning, tingling, etc.'
									rows='10'
									value={formData.nature}
									onChange={(event) => handleChange(event)}
								/>

								<div>
									<Input
										name='appearance'
										label='Appearance'
										placeholder='Color changes, swelling, scaling, oozing, or any other visible markers.'
										value={formData.appearance}
										onChange={(event) => handleChange(event)}
									/>
									<Input
										name='duration'
										label='Duration'
										placeholder='How long the symptoms have been present. '
										value={formData.duration}
										onChange={(event) => handleChange(event)}
									/>
									<Input
										name='changes'
										label='Changes over time'
										placeholder='Whether symptoms are getting worse, improving, or changing in nature. '
										value={formData.changes}
										onChange={(event) => handleChange(event)}
									/>
								</div>
							</div>
						</div>

						<div className='category'>
							<h6>Lifestyle </h6>
							<div className='input-boxes'>
								<Input
									name='sun_exposure'
									label='Sun exposure'
									placeholder='Amount of daily or frequent Sun exposure.'
									value={formData.sun_exposure}
									onChange={(event) => handleChange(event)}
								/>
								<TextAreaInput
									name='dietary_habit'
									label='Dietary habits'
									placeholder='General diet, known allergies, recent changes in diet.'
									value={formData.dietary_habit}
									rows={6}
									onChange={(event) => handleChange(event)}
								/>
							</div>
						</div>

						<div className='category !mb-3'>
							<h6>Area of localization</h6>
							<div className='input-boxes'>
								<Input
									name='location'
									label='Location'
									placeholder='Specific body parts affected by the condition..'
									value={formData.location}
									onChange={(event) => handleChange(event)}
								/>

								<Input
									name='intensity'
									label='Intensity'
									placeholder='Rate the level of pain or discomfort on a numerical scale.'
									value={formData.intensity}
									onChange={(event) => handleChange(event)}
								/>

								<TextAreaInput
									name='spread'
									label='Spread'
									placeholder='Whether the condition is localized or spreading, and how rapidly.'
									value={formData.spread}
									rows={6}
									onChange={(event) => handleChange(event)}
								/>

								<Input
									name='trigger'
									label='Trigger'
									placeholder='Any known triggers that exacerbate the condition, such as stress, certain activities, or exposure to specific substances.
'
									value={formData.trigger}
									onChange={(event) => handleChange(event)}
								/>
							</div>
						</div>

						<button className='btn_primary !px-20 !py-2 font-medium mb-14'>Submit</button>
					</form>
				</section>
			</HomeWrapper>
		</Layout>
	);
};

export default HomePage;
