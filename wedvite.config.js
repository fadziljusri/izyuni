
// Demo
export const project = 'izyuni';
export const wishlistDoc = "izyuni";
export const projectTitle = 'Ayuni & Izz';

export const allowedEmails = [
  "fadziljusri@gmail.com",
  "izzudinhamid92@gmail.com",
  "ayuniyusoff94@gmail.com"
]

export const fireStore = {
  collection: "infos",
  doc: project === "demo" ? "_demo" : project
};

export const fireStoreProtected = {
  collection: "infos_protected",
  doc: project === "demo" ? "_demo" : project
}

export const fireStoreWishlist = {
  collection: "wishlist",
  doc: project === "demo" ? "_demo" : wishlistDoc
};

export const themes = [
  "baby-blue-floral",
  "leaves",
  "wine",
  "vector-pink",
  "classic",
  "rose",
  "autumn",
  "tropical",
  "flora",
  "brush",
  "blush",
  "elegant",
  "lavender"
];

export const rsvpOptions = [
  { value: 'Hadir', class: 'is-success', faIcon: 'smile-wink' },
  // { value: 'Maybe', class: 'is-link', faIcon: 'meh' },
  { value: 'Tidak Hadir', class: 'is-warning', faIcon: 'frown', hidePax: true },
];

export const rsvpMaxPax = 3;

export const userData = require(`./_infos/client.json`);

export const cfg = {
  name: project,
  title: "Walimatulurus - " + projectTitle,
}