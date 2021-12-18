import { createSlice } from "@reduxjs/toolkit"

const studentSlice = createSlice({
    name: "student",
    initialState: {
        students: [
            { id: 1, name: "saimun islam", email: "saimunshezan@gmail.com", roll: "137010", phone: "013439530", address: "Barisal" },
            { id: 2, name: "tamim iqbal", email: "tamim@gmail.com", roll: "137011", phone: "013439530", address: "Dhaka" },
            { id: 3, name: "sakib al hasan", email: "sakib@gmail.com", roll: "137012", phone: "013439530", address: "Kulna" },
            { id: 4, name: "musfike", email: "musfike@gmail.com", roll: "137013", phone: "013439530", address: "Chottogram" },
        ],
        student: {
            name: "",
            email: "",
            roll: "",
            phone: "",
            address: ""
        },
        userContainer:[
            { id: 1, name: "saimun islam", email: "saimunshezan@gmail.com", roll: "137010", phone: "013439530", address: "Barisal" },
            { id: 2, name: "tamim iqbal", email: "tamim@gmail.com", roll: "137011", phone: "013439530", address: "Dhaka" },
            { id: 3, name: "sakib al hasan", email: "sakib@gmail.com", roll: "137012", phone: "013439530", address: "Kulna" },
            { id: 4, name: "musfike", email: "musfike@gmail.com", roll: "137013", phone: "013439530", address: "Chottogram" },
        ]
    },
    reducers: {
        addStudents: (state, action) => {
            state.students = [...state.students, action.payload]
            state.userContainer = [...state.students, action.payload]
        },
        getStudent: (state, action) => {
            state.student = state.students.find(el => el.id === parseInt(action.payload))
        },
        clearStudent: (state, action) => {
            state.student = {
                name: "",
                email: "",
                roll: "",
                phone: "",
                address: ""
            }

        },
        deleteSutdent:(state,action)=>{
            state.students = state.students.filter(el => el.id !== action.payload)
        },
        upadteStudent:(state,action)=>{
            state.students = state.students.map(el => el.id == action.payload.id ? action.payload : el)
        },
        searchStudetn:(state,action)=>{
            state.userContainer = state.students.filter(el => el.name.toLowerCase().includes(action.payload))
        }
    }
})
export const { addStudents, getStudent ,clearStudent,deleteSutdent,searchStudetn ,upadteStudent} = studentSlice.actions;
export default studentSlice.reducer;