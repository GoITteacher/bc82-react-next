"use client";
import { useState } from "react";
import css from "./StudentList.module.css";
import { useQuery } from "@tanstack/react-query";
import { getStudents } from "@/services/studentsApi";

const StudentList = () => {
  const [query, setQuery] = useState("");

  const studentsQuery = useQuery({
    queryKey: ["students", query],
    queryFn: () => getStudents(query),
  });

  const students = studentsQuery.data?.items || [];

  return (
    <div className={css["studentList"]}>
      <input
        type="text"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>Query: {query}</p>

      <ul>
        {students.map((el) => {
          return (
            <li key={el._id}>
              {el.firstName} {el.lastName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentList;
