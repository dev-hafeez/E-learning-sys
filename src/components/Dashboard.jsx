import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Nav from "./Nav1";

export default function Dsa() {
  return (
    <div>
      <Nav></Nav>
      <div className="">
        <div className="w-[100px] h-[100px] ml-[50px] mt-[10px]">
          <img
            src="https://crystalpng.com/wp-content/uploads/2022/02/COMSATS-University-logo.png"
            alt="Your Company"
          />
        </div>
        <h2 className="mt-[-70px] ml-[200px] text-balance text-2xl font-semibold text-black sm:text-2xl">
          COMSATS UNIVERSITY ISLAMABAD (WAH CAMPUS)
        </h2>
      </div>
      <br />
      <br />
      <hr />
      <div className="w-[1200px] items-center justify-center flex mt-[50px] ml-[300px]">
        <div className="flex items-center justify-center">
          <div className="w-[350px]">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl flex items-center justify-center">
              <u>CS017</u>
            </h2>
            <br />
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
              Data Structures And Algorithms
            </h2>
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
              Credit Hours: 4
            </h2>
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
              Mubeen Ul Basharat
            </h2>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div className="flex">
        <div className="w-[500px] ml-[300px] mt-[50px]">
          <ul role="list" className="gap-x-1 gap-y-1 sm:gap-y-16 xl:col-span-2">
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="size-16 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/13334/13334863.png"
                  alt=""
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    <Link to="/marksst">Marks Summary</Link> 
                  </h3>
                </div>
              </div>
            </li>
          </ul>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 mt-[50px] ">
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="size-16 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
                  alt=""
                />
                <div>
                  <h3 className="font-semibold tracking-tight text-gray-900">
                    Course Notification
                  </h3>
                </div>
              </div>
            </li>
          </ul>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 mt-[50px]">
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="size-16 rounded-full"
                  src="https://media.istockphoto.com/id/1327585822/vector/attendance-presence.jpg?s=612x612&w=0&k=20&c=aDQ60NAjMx3XsqM7hnZpf1RVqxjlmDoT7rT4jvdLsz4="
                  alt=""
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    Attendance
                  </h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-[500px] ml-[300px] mt-[50px]">
          <ul role="list" className="gap-x-1 gap-y-1 sm:gap-y-16 xl:col-span-2">
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="size-16 rounded-full"
                  src="https://t3.ftcdn.net/jpg/04/47/47/54/360_F_447475447_VGi5Yk4AS0IjAgsl3T86INMxmaEUUMwk.jpg"
                  alt=""
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    Learning Resources
                  </h3>
                </div>
              </div>
            </li>
          </ul>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 mt-[50px] ">
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="size-16 rounded-full"
                  src="https://static.thenounproject.com/png/3202074-200.png"
                  alt=""
                />
                <div>
                  <h3 className="font-semibold tracking-tight text-gray-900">
                    Assignments
                  </h3>
                </div>
              </div>
            </li>
          </ul>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 mt-[50px]">
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="size-16 rounded-full"
                  src="https://cdn.pixabay.com/photo/2021/03/03/14/01/icon-6065372_1280.png"
                  alt=""
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    Quizzes
                  </h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
