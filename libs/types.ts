export type Sport = {
	id: number;
	name: string;
	image: string;
	description: string;
};

export type Content = {
	id: number;
	title: string;
	body: string;
	video_url: string;
	sport_id: number;
};
