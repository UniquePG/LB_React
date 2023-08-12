import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl.js'

//! Step1
// first we have to create Context and export it
export const AppContext = createContext();


// Now we have to create context provider jo context de sake dusre conponents ko
export default function AppContextProvider ({children}){

    // now initilize our state variables
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);

    //todo We have to fill our data
    async function fetchBlogsPosts(page = 1) {
        setLoading(true)
        try {
            const result = await fetch(`${baseUrl}?page=${page}`);
            const data = await result.json()

            console.log(data);

            //set value to state variable
            setPage(data.page);
            setPosts(data.posts);
            setTotalPage(data.totalPages);

        } catch (error) {
            console.log("error while fetching posts");
            setPage(1);
            setPosts([]);
            setTotalPage(null);             
        }

        setLoading(false)
    }

    // handle pagechange
    function handlePageChange(page){
        setPage(page);
        fetchBlogsPosts(page);
    }

    // ab iss object me bo values dalenge jo hame consumer(components) ko send karni hai
    //* these values are our context(data) jo hme saare children component(App) ko send karna h
    const Ourvalues = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPage,
        setTotalPage,
        fetchBlogsPosts,
        handlePageChange

    }

//! Step2
    //Now we have to send this context using provider
    return <AppContext.Provider value={Ourvalues}>
            {children}
        </AppContext.Provider>

}