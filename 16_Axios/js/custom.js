// 7- Custom Instance
const postsFetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
//"postsFetch" pode substituir o "axios", não é recomendado usar custom instance e global.