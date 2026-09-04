import { useState } from "react"

const CreateBlog = () => {
    const [clientMessage, setClientMessage] = useState("What's on your mind?");
    const [loading, setLoading] = useState(false);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); 

    const url = "http://localhost:5050/blogs/create"

    async function sendCreateBlogRequest() {
        try {
            setLoading(true);

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: title, content: content })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${ response.status }`);
            }
            
            const data = await response.json();
            console.log(data);

            setClientMessage(data?.message);
            setLoading(false);
        } catch (error) {
            console.error("An error has occurred while trying to create a new Blog Post: ", error);
        }
    }

    return (
    <>
        <div className='p-4 mb-2 border rounded-[0.25rem] max-w-[375px]'>
            <h1 className='text-center text-[1.5rem] font-semibold'>Create Blog</h1>
            
            <form action="" className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <label htmlFor="">Title:</label>
                    <input 
                        className='border p-2' 
                        type="text" 
                        value={ title } 
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="">Blog Content:</label>
                    <textarea 
                        className='border p-2 h-[12rem]' 
                        name="" 
                        id=""
                        value={ content }
                        onChange={ (e) => setContent(e.target.value) }
                    ></textarea>
                </div>
                
                <button className='create-blog-button' type='button' onClick={ (e) => sendCreateBlogRequest(e) }>Create Blog</button>
            </form>
        </div>
    <div className="flex flex-col gap-4">
        <a className="underline" href="/">Return to Home</a>
        { loading === false && <span className="border px-4 py-2 max-w-[375px]">{ clientMessage }</span>}
    </div>
    </>
  )
}

export default CreateBlog