const isProd = process.env.NODE_ENV === 'production';

const list = ['/event/audreySpeech.jpeg',
	'/event/electronics.jpg',
	'/event/fullHall.JPG',
	'/event/fullTeam.jpg',
	'/event/fun.jpg',
	'/event/gaming.jpg',
	'/event/gaming2.jpg',
	'/event/hardworking.jpeg',
	'/event/mainSpeech.jpeg',
	'/event/panel.jpg',
	'/event/workshop.jpeg']


/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array: Array<string>): Array<string> {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;

	}
	return array
}

export const all = (splice: number = -1, shuffled: boolean = true): Array<string> => {
	// python generated list
	let items =  [ // total of 130 items
		'/event/all/101709959172_.pic_hd.jpg',
		'/event/all/111709959174_.pic_hd.jpg',
		'/event/all/11709959150_.pic_hd.jpg',
		'/event/all/121709959177_.pic_hd.jpg',
		'/event/all/131709959182_.pic_hd.jpg',
		'/event/all/141709959184_.pic_hd.jpg',
		'/event/all/171709959192_.pic_hd.jpg',
		'/event/all/181709959195_.pic_hd.jpg',
		'/event/all/191709959197_.pic_hd.jpg',
		'/event/all/201709959199_.pic_hd.jpg',
		'/event/all/211709959201_.pic_hd.jpg',
		'/event/all/21709959153_.pic_hd.jpg',
		'/event/all/221709959204_.pic_hd.jpg',
		'/event/all/231709959206_.pic_hd.jpg',
		'/event/all/241709959208_.pic_hd.jpg',
		'/event/all/271709959215_.pic_hd.jpg',
		'/event/all/281709959217_.pic_hd.jpg',
		'/event/all/291709959219_.pic_hd.jpg',
		'/event/all/301709959221_.pic_hd.jpg',
		'/event/all/311709959224_.pic_hd.jpg',
		'/event/all/31709959155_.pic_hd.jpg',
		'/event/all/321709959226_.pic_hd.jpg',
		'/event/all/341709959231_.pic_hd.jpg',
		'/event/all/361709959236_.pic_hd.jpg',
		'/event/all/371709959237_.pic_hd.jpg',
		'/event/all/381709959239_.pic_hd.jpg',
		'/event/all/41709959158_.pic_hd.jpg',
		'/event/all/51709959161_.pic_hd.jpg',
		'/event/all/61709959163_.pic_hd.jpg',
		'/event/all/71709959166_.pic_hd.jpg',
		'/event/all/81709959167_.pic_hd.jpg',
		'/event/all/91709959170_.pic_hd.jpg',
		'/event/all/DSC_0005.jpg',
		'/event/all/DSC_0008.jpg',
		'/event/all/DSC_0022.jpg',
		'/event/all/DSC_0028.jpg',
		'/event/all/DSC_0034.jpg',
		'/event/all/DSC_0035.jpg',
		'/event/all/DSC_0036.jpg',
		'/event/all/DSC_0040.jpg',
		'/event/all/DSC_0059.jpg',
		'/event/all/DSC_0062.jpg',
		'/event/all/DSC_0064.jpg',
		'/event/all/DSC_0067.jpg',
		'/event/all/DSC_0069.jpg',
		'/event/all/DSC_0070.jpg',
		'/event/all/DSC_0071.jpg',
		'/event/all/DSC_0072.jpg',
		'/event/all/DSC_0073.jpg',
		'/event/all/DSC_0074.jpg',
		'/event/all/DSC_0075.jpg',
		'/event/all/DSC_0077.jpg',
		'/event/all/DSC_0078.jpg',
		'/event/all/DSC_0081.jpg',
		'/event/all/DSC_0084.jpg',
		'/event/all/DSC_0085.jpg',
		'/event/all/DSC_0088.jpg',
		'/event/all/DSC_0095.jpg',
		'/event/all/DSC_0105.jpg',
		'/event/all/DSC_0106.jpg',
		'/event/all/DSC_0107.jpg',
		'/event/all/DSC_0109.jpg',
		'/event/all/DSC_0110.jpg',
		'/event/all/DSC_0111.jpg',
		'/event/all/DSC_0112.jpg',
		'/event/all/DSC_0116.jpg',
		'/event/all/DSC_0118.jpg',
		'/event/all/DSC_0125.jpg',
		'/event/all/DSC_0126.jpg',
		'/event/all/DSC_0127.jpg',
		'/event/all/DSC_0132.jpg',
		'/event/all/DSC_0134.jpg',
		'/event/all/DSC_0137.jpg',
		'/event/all/DSC_0142.jpg',
		'/event/all/DSC_0143.jpg',
		'/event/all/DSC_0144.jpg',
		'/event/all/DSC_0147.jpg',
		'/event/all/DSC_0155.jpg',
		'/event/all/DSC_0164.jpg',
		'/event/all/DSC_0171.jpg',
		'/event/all/DSC_0172.jpg',
		'/event/all/DSC_0177.jpg',
		'/event/all/DSC_0183.jpg',
		'/event/all/DSC_0204.jpg',
		'/event/all/DSC_0207.jpg',
		'/event/all/DSC_0210.jpg',
		'/event/all/DSC_0211.jpg',
		'/event/all/DSC_0212.jpg',
		'/event/all/DSC_0216.jpg',
		'/event/all/DSC_0219.jpg',
		'/event/all/DSC_0220.jpg',
		'/event/all/DSC_0222.jpg',
		'/event/all/DSC_0227.jpg',
		'/event/all/DSC_0229.jpg',
		'/event/all/DSC_0230.jpg',
		'/event/all/DSC_0231.jpg',
		'/event/all/DSC_0235.jpg',
		'/event/all/DSC_0236.jpg',
		'/event/all/DSC_0245.jpg',
		'/event/all/DSC_0250.jpg',
		'/event/all/DSC_0253.jpg',
		'/event/all/DSC_0258.jpg',
		'/event/all/DSC_0261.jpg',
		'/event/all/DSC_0262.jpg',
		'/event/all/DSC_0268.jpg',
		'/event/all/DSC_0270.jpg',
		'/event/all/DSC_0271.jpg',
		'/event/all/DSC_0273.jpg',
		'/event/all/DSC_0274.jpg',
		'/event/all/DSC_0284.jpg',
		'/event/all/DSC_0285.jpg',
		'/event/all/DSC_0290.jpg',
		'/event/all/DSC_0292.jpg',
		'/event/all/DSC_0293.jpg',
		'/event/all/DSC_0303.jpg',
		'/event/all/DSC_0320.jpg',
		'/event/all/DSC_0322.jpg',
		'/event/all/DSC_0326.jpg',
		'/event/all/DSC_0327.jpg',
		'/event/all/DSC_0332.jpg',
		'/event/all/DSC_0339.jpg',
		'/event/all/DSC_0342.jpg',
		'/event/all/DSC_0343.jpg',
		'/event/all/DSC_0344.jpg',
		'/event/all/DSC_0345.jpg',
		'/event/all/DSC_0347.jpg',
		'/event/all/DSC_0353.jpg',
		'/event/all/DSC_0358.jpg',
		'/event/all/unnamed.jpg',
	].map((item) => {return isProd ? '/codehershk' : '' + item})

	if (shuffled)
		items = shuffleArray(items)

	if (splice < 0 || splice > items.length)
		return items
	else
		return items.splice(0, splice)
}

export default isProd ? list.map((item) => {return ('/codehershk'+item)}) : list
