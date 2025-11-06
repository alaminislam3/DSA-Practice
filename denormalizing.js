/* reduce হলো একটা array method যা array-এর সব elements কে একটার মধ্যে aggregate বা summarize করতে ব্যবহার হয়। */
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Coby" },
];
const posts = [
  { id: 1, userId: 101, title: "Data structure" },
  { id: 2, userId: 102, title: "Data structure" },
  { id: 3, userId: 103, title: "Data structure" },
  { id: 4, userId: 104, title: "Data structure" },
  { id: 5, userId: 105, title: "Data structure" },
  { id: 6, userId: 106, title: "Data structure" },
  { id: 7, userId: 107, title: "Data structure" },
  { id: 8, userId: 108, title: "Data structure" },
];

const postById = posts.reduce((table,post)=> {
    const {userId} =post
    if(!table[userId]){
     table[userId] = []
    }
    table[userId].push(post)
    return table
},{})
// console.log(postById)

const userWithPost = users.map((user)=> {
    console.log(user)
    return {
        ...user,
        posts: postById[user.id] || [],
    }
})

// console.log(JSON.stringify(userWithPost))







// const postById = posts.reduce((table, post) => {
//   const { userId } = post;
//   if (!table[userId]) {
//     table[userId] = [];
//   }
//   table[userId].push(post);

//   return table;
// }, {});
// console.log(postById)
// const userWithPost = users.map((user) => {
//   return {
//     ...user,

//     posts: postById[user.id] || [],
//   };
// });
// console.log(JSON.stringify(userWithPost))

/* মূলত user এবং post-এর মধ্যে relationship তৈরি করতে।

যদি তুমি database বা API থেকে আলাদা আলাদা array পাও, তুমি সহজেই user-এর সাথে তার posts দেখাতে পারবে।

এটা join operation এর মতো কাজ করছে, যেটা SQL-এ LEFT JOIN বলা হয়। */