import axios from "axios";

export async function deleteAllUsers() {
    try {
      const response = await axios.delete(
        `http://localhost:8081/users`
      );
      return response;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export async function getAllUsers() {
    try {
      const response = await axios.get(
        `http://localhost:8081/users`
      );
      return response;
    } catch (error) {
      console.error(error);
      return null;
    }
  }