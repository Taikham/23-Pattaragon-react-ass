import { useState } from 'react';
import { Link } from 'react-router-dom';

// สร้าง function HomeAdmin และกำหนดให้รับ props ชื่อ props users, addUser, และ deleteUser
export default function HomeAdmin({ users, addUser, deleteUser }) {
// สร้าง form สำหรับเก็บข้อมูล user ที่เพิ่มเข้ามา
    const [form, setForm] = useState({ name: "", lastName: "", position: "" });


// ประกาส function > handleAddUser สำหรับปุ่ม Save ใช้สำหรับเพิ่ม User
    const handleAddUser = () => {
        if (form.name && form.lastName && form.position) {
            addUser(form); // เรียกฟังก์ชัน addUser เพื่อเพิ่มข้อมูลใหม่
            setForm({ name: "", lastName: "", position: "" });  // รีเซ็ตฟอร์มหลังจากกด Save
        }
    };

    return (
        <>
            <div className='flex flex-col items-center mt-14'>
                <h2 className='text-[4rem] font-bold'>Generation Thailand</h2>
                <h2 className='text-[4rem] font-bold'>Home - Admin Sector</h2>
            </div>

            <div className='flex justify-center'>
                <button className='w-[16rem] rounded-md  bg-white mt-[3rem] px-3 py-3 mr-[10rem] text-[1.5rem] leading-6 text-black hover:bg-gray-600 hover:text-white'>
                    <Link to='/user'>User Home Sector</Link>
                </button>
                <button className='w-[16rem] rounded-md  bg-white mt-[3rem] px-3 py-3 text-[1.5rem] leading-6 text-black hover:bg-gray-600 hover:text-white'>
                    <Link to='/admin'>Admin Home Sector</Link>
                </button>
            </div>
            <div className="flex flex-col items-center mt-14">

           {/* ฟอร์มสำหรับกรอกข้อมูลผู้ใช้ใหม่ */}
            <div className="flex space-x-4 mb-4 mt-4">
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border px-2 py-1"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="border px-2 py-1"
                />
                <input
                    type="text"
                    placeholder="Position"
                    value={form.position}
                    onChange={(e) => setForm({ ...form, position: e.target.value })}
                    className="border px-2 py-1"
                />

                 {/* ปุ่มบันทึกข้อมูลผู้ใช้ใหม่ */}
                <button onClick={handleAddUser} className="px-4 py-2 bg-blue-500 text-white rounded">
                    Save
                </button>
            </div>

            {/* ตารางแสดงข้อมูลผู้ใช้ */}
            <table className="table-auto border-collapse border border-gray-300 w-1/2 mt-4">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Last Name</th>
                        <th className="border border-gray-300 px-4 py-2">Position</th>
                        <th className="border border-gray-300 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.lastName}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.position}</td>
                            
                            {/* ปุ่มลบผู้ใช้ */}
                            <td
                                className="border border-gray-300 px-4 py-2 text-red-500 cursor-pointer"
                                onClick={() => deleteUser(index)}
                            >
                                Delete
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
}
