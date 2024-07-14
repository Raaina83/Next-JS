import {submitPOst } from "@/lib/action"

const ServerActionTestPage = () => {

  return (
    <form action={submitPOst} className="flex flex-col">
        <input 
            placeholder="Title" 
            className=" text-black"
            name="title"/>
        <input 
            placeholder="Description" 
            className=" text-black"
            name="description"/>
        <input 
            placeholder="image" 
            className=" text-black"
            name="img"/>
        <input 
            placeholder="slug" 
            className=" text-black"
            name="slug"/>
        <input 
            placeholder="userId" 
            className=" text-black"
            name="userId"/>
        <button type="submit">Post</button>
    </form>
  )
}

export default ServerActionTestPage