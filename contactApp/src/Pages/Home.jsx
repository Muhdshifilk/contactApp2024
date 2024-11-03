import React, { useEffect, useState } from "react";
import Edit from "../Components/Edit";
import Add from "../Components/Add";
import { delApi, getApi } from "../Services/allApi";
import { toast } from "react-toastify";

function Home() {
  const [data, setData] = useState([]);
  const [response, setResponse] = useState("");

  useEffect(() => {
    getData();
  }, [response]);

  const getData = async () => {
    const res = await getApi();
    if (res.status == 200) {
      setData(res.data);
    }
  };

  const delData=async(id)=>{
    const res=await delApi(id)
    if(res.status==200){
        toast.success(`${res.data} deleted`)
        console.log(res)
        getData()
    }
  }

  return (
    <>
      <div style={{ minHeight: "90vh", overflowX: "hidden" }} className="p-4">
        <div className="table-responsive">
          {data?.length > 0 ? (
            <table className="table table-hover table-success table-bordered">
              <thead>
                <tr className="border border-dark">
                  <th className="fw-semibold bg-success"></th>
                  <th className="fw-semibold bg-success" scope="col">Name</th>
                  <th className="fw-semibold bg-success" scope="col">Contact Number</th>
                  <th className="fw-semibold bg-success" scope="col">Edit</th>
                  <th className="fw-semibold bg-success" scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item,index) => (
                  <tr>
                    <td scope="row">{index+1}</td>
                    <td>{item.cname}</td>
                    <td>{item.number}</td>
                    <td>
                      <Edit get={item} resp={setResponse}/>
                    </td>
                    <td>
                      <button className="btn" onClick={()=>delData(item.id)}>
                        <i
                          className="fa-solid fa-trash"
                          style={{ color: "#d70424" }}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h3 className="text-danger text-center">
              No Contacts Available!!!
            </h3>
          )}
        </div>
        <Add resp={setResponse} />
      </div>
    </>
  );
}

export default Home;
