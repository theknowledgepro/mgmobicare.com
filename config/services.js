import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ElderlyIcon from '@mui/icons-material/Elderly';
import MoodIcon from '@mui/icons-material/Mood';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const services = [
	{
		title: 'Specialized Healthcare Services',
		summary: 'Customized care for specific health needs, offering expertise and support tailored to individual requirements.',
		description: `Discover excellence with our <span class='font-[600] text-[var(--color-primary)]'>Specialized Healthcare Services.</span> Tailored for unique health needs, our skilled professionals provide expert support. Whether managing chronic conditions or offering advanced interventions, we prioritize your well-being. Trust us for a comprehensive approach to health, ensuring a fulfilling and healthier life.<br /> <br /> Let us be your dedicated partner in health, providing personalized attention and expertise.`,
		icon: <HealthAndSafetyIcon className='text-[var(--color-primary)] text-[50px]' />,
		thumbnail: ''
	},
	{
		title: 'Personalized Care Plans',
		summary: 'Tailored assistance for unique needs, ensuring comprehensive and individualized care plans.',
		description: `Embrace tailored support with our <span class='font-[600] text-[var(--color-primary)]'>Personalized Care Plans.</span> Crafted for individual needs, our dedicated team ensures a comprehensive and unique care approach. From daily assistance to specialized requirements, our plans prioritize your well-being. Trust us for personalized, compassionate care that enhances your quality of life. With attention to detail and a commitment to individual needs, we're here to make a positive difference in your daily life.`,
		icon: <MoodIcon className='text-[var(--color-primary)] text-[50px]' />,
		thumbnail: ''
	},
	{
		title: 'Holistic Wellness Programs',
		summary: 'Engaging activities go beyond physical care, promoting mental stimulation and overall well-being for a fulfilling life.',
		description: `Experience well-rounded care with our <span class='font-[600] text-[var(--color-primary)]'>Holistic Wellness Programs.</span> Designed for a fulfilling life, these programs go beyond physical care, encompassing mental and social well-being. Engage in tailored activities promoting overall health, from fitness routines to mental stimulation. Trust our holistic approach to enhance your vitality and happiness in the comfort of your home. Our commitment extends beyond basic assistance, fostering a comprehensive sense of well-being through innovative and personalized wellness initiatives. Embrace a life that is not just healthy but truly fulfilling with our Holistic Wellness Programs.`,
		icon: <AccessibilityNewIcon className='text-[var(--color-primary)] text-[50px]' />,
		thumbnail: ''
	},
	{
		title: 'Medication Management',
		summary: 'Professional oversight ensures precise and timely medication administration, prioritizing health and safety.',
		description: `Ensure precise and timely care with our <span class='font-[600] text-[var(--color-primary)]'>Medication Management.</span> service. Our professional oversight guarantees accurate administration, prioritizing health and safety. Trust us to handle the complexities of medication schedules, providing peace of mind for you and your loved ones. With a dedicated focus on your well-being, our team ensures that medication management is a seamless and secure part of your personalized care plan. Let us take the worry out of medication routines, allowing you to focus on what matters most—your health and quality of life.`,
		icon: <MedicationLiquidIcon className='text-[var(--color-primary)] text-[50px]' />,
		thumbnail: ''
	},
	{
		title: 'Comprehensive Health Assessments',
		summary: `Periodic evaluations to track and optimize overall health, addressing potential concerns proactively.`,
		description: `Optimize your well-being with our <span class='font-[600] text-[var(--color-primary)]'>Comprehensive Health Assessments.</span> Tailored for proactive care, our thorough evaluations track and address your health needs. From identifying potential concerns to personalized recommendations, our assessments provide a holistic view of your health. Trust our expert team to guide you on the path to optimal well-being, ensuring a proactive and informed approach to your overall health. Discover a comprehensive understanding of your health, empowering you to make informed decisions for a healthier and more fulfilling life.`,
		icon: <LocalHospitalIcon className='text-[var(--color-primary)] text-[50px]' />,
		thumbnail: ''
	},
	{
		title: 'In-Home Rehabilitation',
		summary: `Professional rehabilitation services in the comfort of the client's home for a seamless recovery process.`,
		description: `Recover with confidence through our <span class='font-[600] text-[var(--color-primary)]'>In-Home Rehabilitation.</span> Our professional rehabilitation services bring the expertise to your doorstep. Tailored for a seamless recovery, we prioritize your comfort and well-being. Trust our skilled team to guide you through personalized rehabilitation programs, combining convenience with effective recovery strategies. Experience the benefits of in-home care, where rehabilitation meets the familiarity and comfort of your own surroundings. Let us support your journey to recovery, ensuring a holistic and personalized approach to your rehabilitation needs`,
		icon: <AddHomeWorkIcon className='text-[var(--color-primary)] text-[50px]' />,
		thumbnail: ''
	},
	{
		title: 'Nutritional Counseling & Meal Provision',
		summary: `Professional rehabilitation services in the comfort of the client's home for a seamless recovery process.`,
		description: `Elevate your well-being with our <span class='font-[600] text-[var(--color-primary)]'>Nutritional Counseling & Meal Provision.</span> Our personalized counseling focuses on your unique dietary needs, promoting optimal health. Beyond advice, we provide carefully curated meals to meet your nutritional requirements. Trust our expert guidance and convenient meal services to enhance your overall wellness. Experience the benefits of a tailored nutrition plan that combines expert advice with delicious and nourishing meals, fostering a healthier and more fulfilling lifestyle.`,
		icon: <RestaurantIcon className='text-[var(--color-primary)] text-[50px]' />,
		thumbnail: ''
	},
	{
		title: 'Adaptive Home Modifications',
		summary: `Customizing living spaces for accessibility and health promoting, ensuring a safe and comfortable environment.`,
		description: `Transform your living space with <span class='font-[600] text-[var(--color-primary)]'>Adaptive Home Modifications.</span> Our expert team designs and implements custom changes to enhance accessibility and safety. From ramps to bathroom modifications, trust us to create a home environment that meets your unique needs. Our commitment is to make your living space comfortable and secure, ensuring independence and peace of mind. Experience the freedom of a home tailored to your requirements, where every modification contributes to a more accessible and supportive living environment.`,
		icon: <RoomPreferencesIcon className='text-[var(--color-primary)] text-[50px]' />,
		thumbnail: ''
	},
	{
		title: 'Outdoor Mobility Assistance',
		summary: `Supporting clients with outdoor activities, ensuring they can enjoy the fresh air safely.`,
		description: `Explore the world with confidence through our <span class='font-[600] text-[var(--color-primary)]'>Outdoor Mobility Assistance.</span> Our dedicated team ensures safe and enjoyable outdoor experiences, providing support for activities and excursions. From walks in the park to shopping trips, trust us to enhance your mobility and independence outdoors. Our commitment is to make every outdoor endeavor accessible and enjoyable, promoting an active and fulfilling lifestyle. Experience the freedom of outdoor mobility with our support, where every step is a stride toward independence and well-being.`,
		icon: <ElderlyIcon className='text-[var(--color-primary)] text-[50px]' />,
		thumbnail: ''
	},

	{
		title: 'Palliative Care Services',
		summary: `Compassionate care focused on improving the quality of life for individuals with serious illnesses.`,
		description: `Experience compassionate support with our <span class='font-[600] text-[var(--color-primary)]'>Palliative Care Services.</span> Tailored for comfort and quality of life, our specialized care focuses on alleviating symptoms and enhancing well-being. Trust our dedicated team to provide comfort, emotional support, and personalized care during challenging times. Our palliative care services prioritize dignity and compassion, ensuring individuals and their families navigate difficult moments with sensitivity and comprehensive support. Discover a compassionate approach to care that brings comfort, peace, and a focus on improving the overall quality of life for those facing serious illnesses.`,
		icon: <VolunteerActivismIcon className='text-[var(--color-primary)] text-[50px]' />,
		thumbnail: ''
	},
	{
		title: 'Respite Care',
		summary: 'Temporary relief for family caregivers, allowing them to recharge while maintaining the highest standards of care.',
		description: `Take a well-deserved break with our <span class='font-[600] text-[var(--color-primary)]'>Respite Care' services.</span> Designed to provide temporary relief for family caregivers, we offer compassionate support and professional care for your loved ones. Trust our dedicated team to ensure continuity in care, allowing you to recharge and return to your caregiving role with renewed energy. Our respite care services prioritize the well-being of both caregivers and their loved ones, creating a supportive environment that offers peace of mind and an opportunity for a much-needed break. Experience the balance of caregiving and self-care with our trusted respite care services.`,
		icon: <EmojiPeopleIcon className='text-[var(--color-primary)] text-[50px]' />,
		thumbnail: ''
	},
	{
		title: 'Transportation Assistance',
		summary: 'Safe and reliable transportation services for medical appointments and essential errands, ensuring accessibility and convenience.',
		description: `Navigate the road of convenience with our <span class='font-[600] text-[var(--color-primary)]'>Transportation Assistance.</span> Our reliable service ensures safe and comfortable transportation for medical appointments and essential errands. Trust our dedicated team to provide timely and secure transit, eliminating transportation barriers. Whether it's a doctor's visit or a grocery run, our transportation assistance prioritizes accessibility, ensuring you reach your destination with ease. Experience the freedom of hassle-free mobility, where each journey is a step towards maintaining independence and well-being. Count on us for reliable and compassionate transportation services tailored to your needs.`,
		icon: <NoCrashIcon className='text-[var(--color-primary)] text-[50px]' />,
		thumbnail: ''
	}
];

export default services;
