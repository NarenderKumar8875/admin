import React from 'react'

const EditProject = ({ hover }) => {
    return (
        <>
            {
                hover === 'Edit Project' && <div>
                    <h1>This Functionality will be Adding Soon...</h1>
                </div>
            }
        </>
    )
}

export default EditProject
