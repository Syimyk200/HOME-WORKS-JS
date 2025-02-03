// ! task 1
const user = {
  id: 1,
  first_name: "Garrott",
  last_name: "Eberdt",
  email: "geberdt0@wp.com",
  gender: "Male",
  ip_address: "49.230.15.110",
  isAdmin: true,
};
const { id, first_name } = user;
console.log(id);

// ! task 2
const animals = ["apple", "banana", "lemon", "kiwi", true];
const [element] = animals;
console.log(element);

// ! task 3
const workers = [
  {
    id: 1,
    name: "Emile",
    lastname: "Van Weedenburg",
    email: "evanweedenburg0@technorati.com",
  },
  {
    id: 2,
    name: "Orv",
    lastname: "Gretton",
    email: "ogretton1@about.me",
  },
];
const mapper = workers.forEach((item) => {
  console.log(item);
});
// ! task 4
const product = {
  id: 1,
  details: {
    title: "Phone",
    price: 300,
  },
};
const {
  details: { title, price },
} = product;
console.log(title, price);

// ! task 5
const posts = {
  name: "posts",
  isLoading: true,

  byId: {
    post1: {
      id: "postl",
      author: "user1",
      body: ".....",
      comments: ["comment1", "comment2"],
    },
    post2: {
      id: "post2",
      author: "user?",
      body: "....",
      comments: ["comment3", "comment", "comment5"],
    },
  },
  allIds: ["post1", "post2"],
};

let copuOfPost = Object.assign({}, post);
console.log(copuOfPost);

// ! task 6
// let copuOfPost = JSON.parse(JSON.stringify(posts));
// console.log(copuOfPost);

// ! task 7
const post = {
  name: "posts",
  isLoading: true,
  id: "post1",
  author: "user1",
  body: "...",
  comments: ["comment1", "comment2"],
};
const { comments: color, hello, ...rest } = post;
// color эмнеге барабар? "comment1", "comment2"
// hello эмнеге барабар? udefined
// rest эмнеге барабар? ошибка

//! task 8
const comments1 = ["comment3", "comment4", "comment5", "comment1"];

const [undefined, commenti, ...rest1] = comments1;
// undefined эмнеге барабар? "comment3"
// comment1 эмнеге барабар?  "comment4"
// rest эмнеге барабар? "comment5", "comment1"
