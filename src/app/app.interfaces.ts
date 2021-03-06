export interface IGame {
	name: string;
	img: string;
}

export interface IStack {
	description: string;
	type: string;
	comp: string;
	owner: string;
	category: number;
	tank_heroes: string;
	dps_heroes: string;
	support_heroes: string;
	platform: string;
	skill_range: ISkillRange;
	dateTime: Date;
	slots: ISlot[]; 
	cost: number;
	pot: number;
	locked: boolean;
}

export interface ISlot {
	name: string;
	userID: string;
	username: string;
}

export interface ISkillRange {
	lower: number;
	upper: number;
}

export interface IProfile {
	Username: string;
	PSN: string;
	Xbox: string;
	Steam: string;
	Beers: number;
}