import axios from "axios";



export async function Login(values) {
    try {
      const response = await axios.post(
        `http://localhost:8081/users/login`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return error.response.data.message;
    }
  }

  export async function Register(values) {
    try {
      const response = await axios.post(
        `http://localhost:8081/users`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return error.response.data.message;
    }
  }

export async function updateUser(values, id) {
    try {
      const response = await axios.put(
        `http://localhost:8081/users/${id}`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return error.response.data.message;
    }
  }

  export async function forgotPassword(userName) {
    try {
      const response = await axios.post(
        `http://localhost:8081/users/forgot`,
        userName,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return error.response.data.message;
    }
  }