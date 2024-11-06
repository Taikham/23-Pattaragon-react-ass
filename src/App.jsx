//เรียกใช้ Bulid in function และนำเข้า components ต่างๆของเว็บ 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./page/HomeNomal";
import HomeAdmin from "./page/HomeAdmin";
import HomeUser from "./page/HomeUser";
import Owner from "./page/Owner";

// กำหนด useState สำหรับเก็บข้อมูลUsre โดยดึงข้อมูลจาก localStorage 
export default function App () {
  const [users, setUsers] = useState (() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

// ใช้ useEffect เพื่อบันทึกข้อมูล users ไปยัง localStorage ทุกครั้งที่ users มีการเปลี่ยนแปลง
  useEffect(() => {
    localStorage.setItem("users",JSON.stringify(users))
  }, [users]);

// Function สำหรับเพิ่ม users
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

// Function สำหรับลบ users
  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

// กำหนดเส้นทางในเว็บด้วย BrowserRouter และ กำหนด Routes สำหรับเส้นทางไปยังหน้าต่าง ๆ
return (
  <div>
    <BrowserRouter>
     <Navbar />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/user" element={<HomeUser users={users}/>} />
     <Route path="/admin" element={<HomeAdmin users={users} addUser={addUser} deleteUser={deleteUser} />} />
     <Route path="/owner" element={<Owner />} > 
        
      </Route>
     </Routes>
    </BrowserRouter>
  </div>
)
};