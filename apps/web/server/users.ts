export const getUsers = async () => {
  const response = await fetch(`${process.env.API_URL}/user`);
  return response.json();
};

