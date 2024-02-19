import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Employees from './Employees'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Edit = () =>{
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [id, setId] = useState("")

    let navigate = useNavigate()

    var index = Employees.map((e) => e.id).indexOf(id)

    const handleSubmit = (e) =>{
        e.preventDefault()

        let emp = Employees[index]
        emp.Name = name
        emp.Age = age

        navigate('/')
    }
    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('Id'))
    },[])

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter name" required 
                        value={name} onChange={(e) => setName(e.target.value)}>
                </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter age" required 
                        value={age} onChange={(e) => setAge(e.target.value)}>
                </Form.Control>
                </Form.Group>
                <Button type="submit" onClick={(e) => {handleSubmit(e)}}>Update</Button>
            </Form>
        </div>
    )
}
export default Edit