import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Students() {
    const [students, setStudents] = useState([]);

    async function getStudents() {
        const API_URL = process.env.REACT_APP_BASE_URL;
        try {
            const response = await axios.get(`${API_URL}/students`);
            const students = response.data;
            if(!students.length) {
                alert('Não há estudantes cadastrados!');
            } else {
                setStudents(students);
            }
            setStudents();
        } catch (error) {
            alert('Não foi possível buscar os estudantes cadastrados!');
        }
    }

    useEffect(() => {
        getStudents();
    }, []);

    return (
     <>
     { students.length ? students.map(student => <h1 key={Math.random()}>{student.name}</h1>) : 'Carregando os estudantes...' }
     </>   
    ); 
}