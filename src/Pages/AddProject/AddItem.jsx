import { useState } from "react";
import axios from 'axios'
import { useRef } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddItem = ({ hover }) => {
    // INPUT IMAGE CONFIGRATION
    const [image, setImage] = useState(false)
    const imageSetRef = useRef(null)

    // TEXT DATA CONFIGRATION
    const [data, setData] = useState({
        link: '',
        heading: '',
        react: '',
    })

    //FORM DATA TO SETFORMDATA STATE
    const handleSetFormData = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        name === 'link' && setData((prev) => ({ ...prev, ['link']: value }))
        name === 'heading' && setData((prev) => ({ ...prev, ['heading']: value }))
        name === 'react' && setData((prev) => ({ ...prev, ['react']: value }))
    }

    // ADD DATA BACKEND SERVR
    const url = 'http://localhost:4000';
    async function addData(e) {
        e.preventDefault()

        const formData = new FormData()
        formData.append('link', data.link)
        formData.append('heading', data.heading)
        formData.append('react', data.react)
        formData.append('background', image)
        
        const response = await axios.post(`${url}/api/project/add`, formData)

        if (response.data.succes) {
            toast(<h1 className="font-bold">Project Saved Succuefully</h1>)
            setImage(false);
            imageSetRef.current.value = null;
            setData({
                link: '',
                heading: '',
                react: '',
            })

        } else {
            toast(<h1 className="font-bold">Project Not Saved</h1>)
        }

    }

    return (
        <>
            {
                hover === 'Add Project' && <div className='h-[100vh] pt-20 w-[50%]'>
                    <form onSubmit={(e) => addData(e)} className='flex flex-col items-center gap-5' action={`${url}/api/project/add`} method="POST">
                        <div className='flex justify-between w-[25rem] '>
                            <p>Product URL</p>
                            <input onChange={(e) => handleSetFormData(e)} className='border-zinc-400 border' required type="url" name="link" value={data.link} />
                        </div>
                        <div className='flex justify-between w-[25rem] '>
                            <p>Product Heading</p>
                            <input onChange={(e) => handleSetFormData(e)} className='border-zinc-400 border' required type="text" name="heading" value={data.heading} />
                        </div>
                        <div className='flex justify-between w-[25rem] '>
                            <p>React?</p>
                            <select className="border-zinc-400 border" onChange={(e) => handleSetFormData(e)} name="react" required value={data.react}>
                                <option value="" disabled selected>Please select an option</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                        <div className='flex justify-between w-[25rem] '>
                            <p>Add Image</p>
                            <input onChange={(e) => setImage(e.target.files[0])} ref={imageSetRef} type="file" required name="background" />
                        </div>

                        <button className="bg-orange-700 text-white px-5 py-2" type='submit'>Add Project</button>
                    </form>
                </div>
            }

        </>
    )
}

export default AddItem
