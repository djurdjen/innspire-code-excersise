
export interface DirectorList {
  id: string;
  name: string;
}

export interface WriterList {
  id: string;
  name: string;
}

export interface StarList {
  id: string;
  name: string;
}

export interface ActorList {
  id: string;
  image: string;
  name: string;
  asCharacter: string;
}

export interface GenreList {
  key: string;
  value: string;
}

export interface CompanyList {
  id: string;
  name: string;
}

export interface CountryList {
  key: string;
  value: string;
}

export interface LanguageList {
  key: string;
  value: string;
}

export interface BoxOffice {
  budget: string;
  openingWeekendUSA: string;
  grossUSA: string;
  cumulativeWorldwideGross: string;
}

export interface Similar {
  id: string;
  title: string;
  image: string;
  imDbRating: string;
}

export interface IMovieDetailResponse {
  id: string;
  title: string;
  originalTitle: string;
  fullTitle: string;
  type: string;
  year: string;
  image: string;
  releaseDate: string;
  runtimeMins: string;
  runtimeStr: string;
  plot: string;
  plotLocal: string;
  plotLocalIsRtl: boolean;
  awards: string;
  directors: string;
  directorList: DirectorList[];
  writers: string;
  writerList: WriterList[];
  stars: string;
  starList: StarList[];
  actorList: ActorList[];
  genres: string;
  genreList: GenreList[];
  companies: string;
  companyList: CompanyList[];
  countries: string;
  countryList: CountryList[];
  languages: string;
  languageList: LanguageList[];
  contentRating: string;
  imDbRating: string;
  imDbRatingVotes: string;
  metacriticRating: string;
  boxOffice: BoxOffice;
  keywords: string;
  keywordList: string[];
  similars: Similar[];
}

export interface IMovieOverviewResponse {
  errorMessage: string | null
  queryString: string,
  results: {
    contentRating: string
    description: string
    genreList:{key: string, value: string}[] // create enum
    genres: string
    id: string
    imDbRating: string
    imDbRatingVotes: string
    image: string
    metacriticRating: string
    plot: string
    runtimeStr: string
    starList: {id: string, name: string}[]
    stars: string
    title: string
  }[]
}
