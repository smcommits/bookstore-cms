const sortBooksById = (a, b) => {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }

  return 0;
};

const toggleLoader = () => {
  const loader = document.querySelector('.loaderWrapper');
  loader.classList.toggle('show');
};

export { sortBooksById, toggleLoader };
