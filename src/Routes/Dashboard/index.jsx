import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {AddedTeachers, Billing, Exams, Features, Home,SettingProfile, SingleTeacher,CreateTeacher,Teachers} from '../../Pages/Dashboard'
import Navbar from '../../components/Navbar'
import Student from '../../Pages/Dashboard/Student'



function DashboardPage() {
  return (
    <div className='containe mx-auto flex justify-between'>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/teachers' element={<Teachers/>}/>
        <Route path='/createteacher' element={<CreateTeacher/>}/>
        <Route path='/exams' element={<Exams/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/settingprofile' element={<SettingProfile/>}/>
        <Route path='/billing' element={<Billing/>}/>
        <Route path='/singleteacher' element={<SingleTeacher/>}/>
        <Route path='/addedteachers' element={<AddedTeachers/>}/>
        <Route path='/students' element={<Student/>}/>
    </Routes>
    </div>
  )
}

export default DashboardPage