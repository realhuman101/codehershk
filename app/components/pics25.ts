const isProd = process.env.NODE_ENV === 'production';

const list = ['/event/audreySpeech.jpg',
	'/event/electronics.jpg',
	'/event/fullHall.jpg',
	'/event/fullTeam.jpg',
	'/event/fun.jpg',
	'/event/gaming.jpg',
	'/event/gaming2.jpg',
	'/event/hardworking.jpeg',
	'/event/mainSpeech.jpeg',
	'/event/panel.jpg',
	'/event/workshop.jpeg']

export default isProd ? list.map((item) => {return '/codehershk'+item}) : list
