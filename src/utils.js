
// format date to dd/mm/yyyy
export const formatDate = (dateStr) => {
  const date = new Date(dateStr);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, 0);
  const year = String(date.getFullYear());

  return `${day}/${month}/${year}`;
};

//format to author arr to have commas 
export const formatAuthors = (authors) => {
  const _authors = [];
  for (let i = 0; i < authors.length; i++) {
    if ((i === authors.length - 1)) {
      _authors.push(authors[i])
      return _authors;
    } else {
      _authors.push((authors[i] + ", "))
    }
  }
};
