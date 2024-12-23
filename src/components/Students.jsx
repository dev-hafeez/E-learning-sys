import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav2 from "./Nav2";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [marks, setMarks] = useState({});

  // Fetch students data from the backend
  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await axios.get("http://localhost:5001/api/students"); // Updated API endpoint
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    }
    fetchStudents();
  }, []);

  // Handle mark change
  const handleMarkChange = (rollNo, newMarks) => {
    setMarks((prevMarks) => ({
      ...prevMarks,
      [rollNo]: newMarks,
    }));
  };

  // Update the marks for a student
  const updateMarks = async (rollNo) => {
    const newMarks = parseFloat(marks[rollNo]); // Ensure marks are numbers

    if (isNaN(newMarks) || newMarks < 0 || newMarks > 100) {
      alert("Marks must be a number between 0 and 100");
      return;
    }

    try {
      await axios.put("http://localhost:5001/api/students/updateMarks", { // Updated API endpoint
        rollNo,
        marks: newMarks,
      });
      alert("Marks updated successfully");
    } catch (error) {
      console.error("Error updating marks:", error);
      alert("Error updating marks");
    }
  };

  return (
    <div>
      <Nav2 />
      <div className="flex flex-col items-center justify-center mt-[100px]">
        <div className="container text-center flex items-center justify-center mt-[50px]">
          <div className="col border-[0.5px] border-gray-200 bg-blue-950 text-white p-[10px] w-[120px]">
            <b>Roll No</b>
          </div>
          <div className="col border-[0.5px] border-gray-200 p-[10px] bg-blue-950 text-white w-[340px]">
            <b>Student Name</b>
          </div>
          <div className="col border-[0.5px] border-gray-200 p-[10px] bg-blue-950 text-white w-[120px]">
            <b>Marks</b>
          </div>
          <div className="col border-[0.5px] border-gray-200 p-[10px] bg-blue-950 text-white w-[120px]">
            <b>Actions</b>
          </div>
        </div>

        {/* Student Rows */}
        {students.length > 0 ? (
          <div className="flex items-center justify-center mt-[30px]">
            <table>
              <tbody>
                {students.map((student) => (
                  <tr key={student.rollNo}>
                    <td className="border-[0.5px] border-gray-200 w-[120px]">
                      {student.rollNo}
                    </td>
                    <td className="border-[0.5px] border-gray-200 w-[340px]">
                      {student.name}
                    </td>
                    <td className="border-[0.5px] border-gray-200 w-[120px]">
                      <input
                        type="number"
                        value={marks[student.rollNo] || student.marks}
                        onChange={(e) => handleMarkChange(student.rollNo, e.target.value)}
                        className="p-2"
                        min="0"
                        max="100"
                      />
                    </td>
                    <td className="border-[0.5px] border-gray-200 w-[120px]">
                      <button
                        onClick={() => updateMarks(student.rollNo)}
                        className="bg-green-500 text-white p-2 rounded"
                      >
                        Update Marks
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-4">No students available.</div>
        )}
      </div>
    </div>
  );
}
