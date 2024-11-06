// import Link เพื่อสร้างลิงก์นำทางระหว่างหน้า
import { Link } from 'react-router-dom';

// สร้าง function HomeUser และกำหนดให้รับ props ชื่อ users สำหรับแสดงรายชื่อผู้ใช้ในตาราง
export default function HomeUser ({ users }) {
    return (
        <>
            <div className='flex flex-col items-center mt-14'>
            <h2 className='text-[4rem] font-bold'>Generation Thailand</h2>
            <h2 className='text-[4rem] font-bold'>Home - User Sector</h2>
            </div>

            <div className='flex justify-center'>
            <button className='w-[16rem] rounded-md  bg-white mt-[3rem] px-3 py-3 mr-[10rem] text-[1.5rem]  leading-6 text-black hover:bg-gray-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '>
                <Link to = {'/user'}>User Home Sector</Link>
            </button>
            <button className='w-[16rem] rounded-md  bg-white mt-[3rem] px-3 py-3 text-[1.5rem]  leading-6 text-black hover:bg-gray-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '>
                <Link to = {'/admin'}>Admin Home Sector</Link>
            </button>
            </div>
            <div className="flex flex-col items-center mt-14">

            {/* ตารางแสดงข้อมูลผู้ใช้ */}
            <table className="table-auto border-collapse border border-gray-300 w-1/2">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Position</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{users.name}</td>
              <td className="border border-gray-300 px-4 py-2">{users.lastName}</td>
              <td className="border border-gray-300 px-4 py-2">{users.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
        </>
    );
}