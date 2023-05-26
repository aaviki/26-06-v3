const getAllPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .catch((error) => console.log(error))
    .finally(() => console.log("Done"));
};

const getPostById = (id: number) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .catch((err) => console.log(err))
    .finally(() => console.log("done"));
};

export const postsService = {
  getAllPosts,
  getPostById,
};
