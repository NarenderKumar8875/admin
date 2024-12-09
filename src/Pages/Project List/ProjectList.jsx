import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

const ProjectList = ({ hover }) => {

    const [data, setData] = useState()

    const url = 'http://localhost:4000';

    const fetchData = async () => {
        const response = await axios.get(`${url}/api/project`)

        response.data.succes ? setData(response.data.data) : setData('Fetching Error')
    }

    useEffect(() => { fetchData() }, [])

    return (
        <>
            {
                hover === 'List Project' && <div>
                    {
                        <ol className='px-10 py-10 flex flex-col gap-4'>
                            {
                                data && data.map((project, i) => {
                                    return <li key={i} className='border-zinc-900 border mb-5 flex items-center'>
                                        <p className='px-5 py-1'>ID: <b>{project._id}</b></p>
                                        <h1 className='px-5 py-1 select-none'>Name: <b>{project.heading}</b></h1>
                                    </li>
                                })
                            }
                        </ol>
                    }
                </div>
            }
        </>
    )
}

export default ProjectList
