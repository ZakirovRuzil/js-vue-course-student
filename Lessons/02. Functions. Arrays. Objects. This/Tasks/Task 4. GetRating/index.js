function getRating({ likes, dislikes }) {
  return likes - dislikes;
}

console.log(getRating({ likes: 1, dislikes: 43 }));    // -42
console.log(getRating({ likes: 15, dislikes: 5 }));    // 10
console.log(getRating({ likes: 122, dislikes: 122 })); // 0
