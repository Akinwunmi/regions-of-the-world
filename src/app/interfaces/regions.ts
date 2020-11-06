export interface IFlag {
  imageUrl: string;

  ratioWidth: number;
  ratioHeight: number;

  yearApproved: Date;
  yearFirstUsed: Date;
}

export interface IContinent {
  name: string;

  flag: IFlag;

  countries: ICountry[];
}

export interface ICountry {
  name: string;
  nameNational: string;

  flag: IFlag;

  childRegions: IRegion[];
}

export interface IRegion {
  name: string;
  nameNational: string;
  nameLocal: string;

  flag: IFlag;

  governmentType: string;

  parentRegion?: IContinent | ICountry | IRegion;
  childRegions?: IRegion[];

  unions?: string[];
  partnerCities?: string[];
}

export interface IUnion {
  name: string;

  flag: IFlag;
}
