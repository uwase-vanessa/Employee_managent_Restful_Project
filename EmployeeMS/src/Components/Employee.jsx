import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const [page,setPage]=useState(1)
  const [limit,setLimit]=useState(10)
  const [totalPage,setTotalPage]=useState(1)
  //const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:3000/auth/employee?page=${page}&limit=${limit}`,)
      .then((result) => {
        if (result.data.Status) {
          setTotalPage(result.data.totalPage)
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, [page,limit]);
  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/auth/delete_employee/'+id)
    .then(result => {
        if(result.data.Status) {
            window.location.reload()
        } else {
            alert(result.data.Error)
        }
    })
  } 
  const handlePreviousPage=()=>{
    setPage((page)=>page==1?page:page-1)
  }
  const handleNextPage=()=>{
    setPage((page)=>page==totalPage?page:page+1)
  }
  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className="btn btn-success">
        Add Employee
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((e) => (
              <tr>
                <td>{e.name}</td>
                <td>
                  <img
                    src={`http://localhost:3000/Images/` + e.image}
                    className="employee_image"
                  />
                </td>
                <td>{e.email}</td>
                <td>{e.address}</td>
                <td>{e.salary}</td>
                <td>
                  <Link
                    to={`/dashboard/edit_employee/` + e.id}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex  ">
                      <button onClick={()=>handlePreviousPage()}  disabled={page==1}  className="btn-small btn-outline-primary">
                        Previous
                      </button>
                      <input value={limit}  onChange={(e)=>{
                        setLimit(e.target.value)
                        setPage(1)
                      }}/>
                      <button onClick={()=>handleNextPage()} disabled={page==totalPage}  className="btn-small btn-outline-primary">
                        Next
                      </button>
                      
                    </div>
      </div>
    </div>
  );
};

export default Employee;