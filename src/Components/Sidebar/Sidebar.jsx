import React from 'react'

const Sidebar = ({ hover, setHover }) => {

    const handleHover = (e) => {
        setHover(e.target.innerText)
    }

    return (
        <>
            <div className='flex border-zinc-900 border-r'>
                <ul className='bg-zinc-300 h-[100vh] flex flex-col gap-5 pt-5 pl-5'>
                    <li onClick={(e) => handleHover(e)} className={`${hover === 'List Project' ? 'bg-orange-500 text-white' : 'bg-purple-950 text-white'} duration-300 pl-10 py-2 pr-2 cursor-pointer font-semibold flex items-center justify-between gap-5`}>List Project <i className="fa-solid fa-list pointer-events-none"></i></li>
                    <li onClick={(e) => handleHover(e)} className={` ${hover === 'Add Project' ? 'bg-orange-500 text-white' : 'bg-purple-950 text-white'} duration-300 pl-10 py-2 pr-2  cursor-pointer font-semibold flex items-center justify-between gap-5`}>Add Project <i className="fa-solid fa-plus pointer-events-none"></i></li>
                    <li onClick={(e) => handleHover(e)} className={`${hover === 'Delete Project' ? 'bg-orange-500 text-white' : 'bg-purple-950 text-white'} duration-300 pl-10 py-2 pr-2 cursor-pointer font-semibold flex items-center justify-between gap-5`}>Delete Project <i className="fa-solid fa-xmark pointer-events-none"></i></li>
                    <li onClick={(e) => handleHover(e)} className={`${hover === 'Edit Project' ? 'bg-orange-500 text-white' : 'bg-purple-950 text-white'} duration-300 pl-10 py-2 pr-2 cursor-pointer font-semibold flex items-center justify-between gap-5`}>Edit Project <i className="fa-solid fa-pen-to-square pointer-events-none"></i></li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
