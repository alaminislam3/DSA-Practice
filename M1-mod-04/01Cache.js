// problem statement
// Implement a simple in-memory cache for an "expensive" dunction (like a database query or API call)
// The goal is to store the result of a function call so that if the same call is mage again,
// the result is returned from the cache instead of running the exppensive function



const dataCache = new Map()

const expensiveTask = (id) => {
  console.log("Ran the expensive task for:", id);
  return {
    id: id,
    data: `some data for id: ${id}`,
    timestamp: new Date().getTime(),
  };
};

const getData = (id)=> {
    if (dataCache.has(id)){
        console.log("cache HIT for id ", id)
        return dataCache.get(id);
    }
    console.log("cache MISS for id", id)
    const data = expensiveTask(id);
    dataCache.set(id,data)
    return data;
}
console.log(dataCache)

console.log(getData(123))
console.log(getData(123))

console.log(dataCache)
