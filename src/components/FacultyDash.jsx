import React from "react";
import { Link } from "react-router-dom"; 
import Nav2 from "./Nav2";

export default function FacultDash() {
  return (
    <div>
      <Nav2 />
      <div className="flex flex-col items-center justify-center">
        <div className="container text-center flex items-center justify-center mt-[100px]">
          <div className="col border-[0.5px] border-gray-200 bg-blue-950 text-white p-[10px] w-[120px]">
            <b>COURSE NO</b>
            <table></table>
          </div>
          <div className="col border-[0.5px] border-gray-200 p-[10px] bg-blue-950 text-white w-[340px]">
            <b>Course Name</b>
          </div>
          <div className="col border-[0.5px] border-gray-200 p-[10px] bg-blue-950 text-white w-[120px]">
            <b>Credits</b>
          </div>
          <div className="col border-[0.5px] border-gray-200 p-[10px] bg-blue-950 text-white w-[320px]">
            <b>Registered Students</b>
          </div>
          <div className="col border-[0.5px] border-gray-200 p-[10px] bg-blue-950 text-white w-[120px]">
            <b>Class</b>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <table>
          <thead>
            <tr>
              <th className="border-[0.5px] border-gray-200 w-[120px]">CSC340</th>
              <th className="border-[0.5px] border-gray-200 w-[340px]">
                <Link to="/Students" className="text-blue-500">
                  Data Structures and Algorithms
                </Link>
              </th>
              
              <th className="border-[0.5px] border-gray-200 w-[120px]">4</th>
              <th className="border-[0.5px] border-gray-200 w-[320px]">60</th>
              <th className="border-[0.5px] border-gray-200 w-[120px]">BSE-4</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
