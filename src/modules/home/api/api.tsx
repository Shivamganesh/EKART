

export const fetchApiData = async () =>{
    const response = await axios.get('https://jsonplaceholder.tycode.com/posts/1')
    return response.data
}