var wishlist = [
  { name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
  { name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
  { name: "Card Game", size: "small", clatters: "no", weight: "light" },
];

var presents = [
  { size: "medium", clatters: "a bit", weight: "medium" },
  { size: "small", clatters: "yes", weight: "light" },
];

function guessGifts(wishlist, presents) {
  return wishlist
    .filter(function (x) {
      return presents.some(function (y) {
        return (
          x.size == y.size && x.clatters == y.clatters && x.weight == y.weight
        );
      });
    })
    .map(function (x) {
      return x.name;
    });
}

console.log(guessGifts(wishlist, presents));

var wishlist = [
  { name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
  { name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
  { name: "Card Game", size: "small", clatters: "no", weight: "light" },
];

var presents = [
  { size: "medium", clatters: "a bit", weight: "medium" },
  { size: "small", clatters: "yes", weight: "light" },
];

function guessGifts(wishList, presents) {
  let guessArr = [];
  for (let i = 0; i < presents.length; i++) {
    let guess = wishList.filter(
      (item) =>
        item.size === presents[i].size &&
        item.clatters === presents[i].clatters &&
        item.weight === presents[i].weight
    );
    for (let x = 0; x < guess.length; x++) {
      guessArr.push(guess[x].name);
    }
  }
  return guessArr;
}

console.log(guessGifts(wishlist, presents));

function guessGifts(wishlist, presents) {
  return wishlist
    .filter(function (wish) {
      return presents.some(function (present) {
        return Object.keys(present).every(function (key) {
          return wish[key] === present[key];
        });
      });
    })
    .map(function (wish) {
      return wish.name;
    });
}

function guessGifts(wishlist, presents) {
  var r = [];
  presents.forEach(function (p) {
    wishlist.forEach(function (w) {
      if (
        p.size == w.size &&
        p.clatters == w.clatters &&
        p.weight == w.weight &&
        r.indexOf(w.name) == -1
      )
        r.push(w.name);
    });
  });
  return r;
}
