"use client"
//Display successfully logged in and display the url params folder name is [id] so the params variable name is id.
// @params id: username 
export default function LoggedIn({ params }: 
    { params:{
        id:string
    } 
}) {
    return (
        <div
            className="text-5xl"
        >Welcome {params.id}</div>
    )
}