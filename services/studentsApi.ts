import axios from "axios";

interface Student {
  _id: string;
  firstName: string;
  lastName: string;
  major: string;
  cohortYear: number;
  gpa: number;
  enrolled: boolean;
}

interface GetStudentsResponse {
  items: Student[];
}

export const getStudents = async (query: string) => {
  const BASE_URL = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const END_POINT = "/public/students";
  const URL = BASE_URL + END_POINT;

  const params = {
    firstName: query,
  };

  const res = await axios.get<GetStudentsResponse>(URL, { params });
  return res.data;
};
