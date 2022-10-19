import { bookClubs } from "./data";
import { IBook, IBookClub, IClubMember } from "./types";

function* iterateBooks(books: IBook[]) {
  for (let i = 0; i < books.length; i++) {
    yield books[i];
  }
}

function* iterateMembers(members: IClubMember[]) {
  for (let i = 0; i < members.length; i++) {
    const clubMember = members[i];
    yield* iterateBooks(clubMember.books);
  }
}

function* iterateBookClubs(bookClubs: IBookClub[]) {
  for (let i = 0; i < bookClubs.length; i++) {
    const bookClub = bookClubs[i];
    yield* iterateMembers(bookClub.clubMembers);
  }
}

function findBook(id: string) {
  const genObj = iterateBookClubs(bookClubs);
  let result = genObj.next();

  while (!result.done) {
    if (result.value.id === id) {
      return result.value;
    } else {
      result = genObj.next();
    }
  }
}

console.log(findBook("ey812"));
