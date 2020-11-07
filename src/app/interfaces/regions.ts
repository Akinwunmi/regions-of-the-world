export interface IFlag {
  ratioWidth: number;
  ratioHeight: number;

  yearApproved: Date;
  yearFirstUsed: Date;
}

export interface IContinent {
  name: string;

  countries: ICountry[];
}

export interface ICountry {
  name: string;
  nameNational: string;

  childRegions: IRegion[];
}

export interface IRegion {
  name: string;
  nameNational: string;
  nameLocal: string;

  governmentType: string;

  parentRegion?: IContinent | ICountry | IRegion;
  childRegions?: IRegion[];

  unions?: string[];
  partnerCities?: string[];
}

export interface IUnion {
  name: string;
}
