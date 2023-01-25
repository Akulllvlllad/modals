const arr = [
  {
    searchTerm: "asfasf",
    location: "asfasf",
    verify: false,
    category: "s",
    typeOfGroup: 0,
  },
  {
    searchTerm: "asfacsasf",
    location: "asfasf",
    verify: false,
    category: "s",
    typeOfGroup: 2,
  },
  {
    searchTerm: "asfasascf",
    location: "asfasf",
    verify: false,
    category: "s",
    typeOfGroup: 1,
  },
  {
    searchTerm: "asfasascf",
    location: "asfasfc",
    verify: true,
    category: "s",
    typeOfGroup: 0,
  },
  {
    searchTerm: "asfasasgf",
    location: "asfascaf",
    verify: true,
    category: "s",
    typeOfGroup: 0,
  },
  {
    searchTerm: "asfaaasgasf",
    location: "adgf",
    verify: true,
    category: "s",
    typeOfGroup: 0,
  },
];
const filters = {
  searchTerm: "",
  isOpen: true,
  location: "",
  verify: false,
  category: "",
  typeOfGroup: 0,
};

const allFilter = (arr) => {
  const res = arr
    .filter((item) => item.searchTerm.includes(filters.searchTerm))
    .filter((item) => item.searchTerm.includes(filters.searchTerm));
  console.log(res);
};
allFilter(arr);
