// async function fetchData (){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')

//     const result = await response.json()

//     result.map(n=> <p> {n.title} </p>)
// }


function user (){
    const {data : user , isLoading, isError} =useQuery({
        queryKey : ['users'],
        queryFn: async () => {
            const res = await fetch("https://api")
            return res.json( )
        }
    })
}