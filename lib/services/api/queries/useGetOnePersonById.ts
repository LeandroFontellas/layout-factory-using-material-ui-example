const getPersonById = () => {
  return {
    id: 1,
    name: 'John Doe',
    img: 'http://placekitten.com/g/200/300',
  };
};

const useGetOnePersonById = () => {
  return getPersonById();
};

export { useGetOnePersonById, getPersonById };
