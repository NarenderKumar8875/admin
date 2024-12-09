import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'


const DeleteProjt = ({ hover }) => {

    const [data, setData] = useState({ id: '' })
    const [resData, setResData] = useState(false)

    // FETCH DATA FOR CHEKING AXSIST ID OR NOT'

    const fetchData = async () => {
        try {
            const res = await axios.get(`${url}/api/project`)
                .then((respons) => setResData(respons.data.data))
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => { fetchData() }, [])

    //--------------------->

    const url = 'http://localhost:4000';
    const handleFormData = (e) => {
        setData((prev) => ({ ...prev, ['id']: e.target.value }))
    }
    // DELETE PROJECT CODE
    async function deleteReq() {
        let val;
        if (resData) {
            val = resData.filter((e) => {
                return e._id === data.id
            })
        }


        const projectDataFromDB = await axios.get(`${url}/api/project`)
        setResData(projectDataFromDB.data.data)

        const response = await axios.delete(`${url}/api/project/delete/${data.id}`);

        if (val[0]) {
            if (response.data.succes) {
                setData({ id: '' })
                toast(response.data.message)
            } else {
                toast(response.data.message)
            }
        } else {
            toast('Error id not valid')
        }



    }




    return (
        <>
            {
                hover === 'Delete Project' && <div className='pt-10 pl-10'>
                    <div className='flex flex-col items-center gap-5' >
                        <div>
                            <label htmlFor="idd">id: </label>
                            <input onChange={(e) => handleFormData(e)} required className='border border-zinc-700' value={data.id} placeholder='Enter Delete Project ID' type="text" name="id" id="idd" />
                        </div>
                        <button onClick={() => data.id && deleteReq()} className='bg-orange-600 px-5 py-1 text-white text-xl font-semibold' type='submit'>Delete</button>
                    </div>
                </div>
            }
        </>
    )
}

export default DeleteProjt
