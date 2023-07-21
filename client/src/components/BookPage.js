import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BookPage = () => {
    const { bookName } = useParams();
    const [bookData, setBookData] = useState([]);
    const [message, setMessage] = useState("");
    const [bookFound, setBookFound] = useState(false);
    
    useEffect(() => {
        fetch(`/api/book/${ bookName }`)
        .then((response) => response.json())
        .then((data) => {
            if(data.message){
                setMessage(data.message);
            }
            else if(data.book){
                setBookFound(true);
                setBookData(data.book)
            }
        })
    }, [bookName]);
    
    
    if(bookFound){
        return(
            <div>
                <h1>Books</h1>
                <p>{bookData.name}</p>
                <p>{bookData.author}</p>
                <p>{bookData.pages}</p>
            </div>
        )
    }
    else if(!bookFound){
        return(
            <div>
                <h1>Books</h1>
                <p>{ message }</p>
            </div>
        )
    }
};

export default BookPage;