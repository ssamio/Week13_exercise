import { useState } from 'react';

const FrontPage = () => {
    const [data, setData] = useState({
        author: "",
        name: "",
        pages: ""
    });

    const handleChange =(event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/api/book', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            "name": data.name,
            "author": data.author,
            "pages": data.pages
        }),
        })
        .then((response) => response.json())
        .then((data) => {
        console.log("Response:", data)
        })
        .catch((error) => {
        console.log("Error submitting book:", error);
        });
    };

    return (
    <div className="FrontPage">
        <h1>books</h1>
        <form>
            <div>
            <label>
                Author: 
            </label>
            <input 
                type="text"
                id="author"
                name="author"
                value={data.author}
                onChange={handleChange}
                />
            </div>
            <br/>
            <div>
            <label>
                Name: 
            </label>
            <input 
                type="text"
                name="name"
                id="name"
                value={data.name}
                onChange={handleChange}
                />
            </div>
            <br/>
            <div>
            <label>
                Pages: 
            </label>
            <input 
                type="number"
                id="pages"
                name="pages"
                value={data.pages}
                onChange={handleChange}
                />
            </div>
            <br/>
            <div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
        </div>
    );
};

export default FrontPage;