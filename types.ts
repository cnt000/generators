export interface IBook {
  id: string;
  title: string;
}

export interface IClubMember {
  name: string;
  books: IBook[];
}

export interface IBookClub {
  name: string;
  clubMembers: IClubMember[];
}
