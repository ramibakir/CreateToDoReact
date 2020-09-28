const Cards = [
  {
    id: 1,
    title: '',
    description: '',
    author: '',
    date: '',
    updated: false,
    get cardOneTitle() {
      return `${Cards.title}`;
    },
    get cardOneDescription() {
      return `${Cards.description}`;
    },
    get cardOneAuthor() {
      return `${Cards.author}`;
    },
    get cardOneDate() {
      return `${Cards.date}`;
    },
    set cardOneTitle(title) {
      this.title = title;
    },
    set cardOneDescription(description) {
      this.description = description;
    },
    set cardOneAuthor(author) {
      this.author = author;
    },
    set cardOneDate(date) {
      this.date = date;
    },
  },
  {
    id: 2,
    title: '',
    description: '',
    author: '',
    date: '',
    updated: false,
    get cardTwoTitle() {
      return `${Cards.title}`;
    },
    get cardTwoDescription() {
      return `${Cards.description}`;
    },
    get cardTwoAuthor() {
      return `${Cards.author}`;
    },
    get cardTwoDate() {
      return `${Cards.date}`;
    },
    set cardTwoTitle(title) {
      this.title = title;
    },
    set cardTwoDescription(description) {
      this.description = description;
    },
    set cardTwoAuthor(author) {
      this.author = author;
    },
    set cardTwoDate(date) {
      this.date = date;
    },
  },
  {
    id: 3,
    title: '',
    description: '',
    author: '',
    date: '',
    updated: false,
    get cardThreeTitle() {
      return `${Cards.title}`;
    },
    get cardThreeDescription() {
      return `${Cards.description}`;
    },
    get cardThreeAuthor() {
      return `${Cards.author}`;
    },
    get cardThreeDate() {
      return `${Cards.date}`;
    },
    set cardThreeTitle(title) {
      this.title = title;
    },
    set cardThreeDescription(description) {
      this.description = description;
    },
    set cardThreeAuthor(author) {
      this.author = author;
    },
    set cardThreeDate(date) {
      this.date = date;
    },
  },
];

export default Cards;
