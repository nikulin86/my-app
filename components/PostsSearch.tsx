"use client"


import { getPostsBySearch } from '@/services/getPosts';
import { usePosts } from '@/store';
import React, { FormEventHandler, useState } from 'react';
import useSWR from 'swr';

// type Props = {
//     onSearch: (value: any[]) => void;
// }



const PostsSearch = () => {

    const { mutate } = useSWR("posts");
    const [search, setSearch] = useState('');

    // const getPostsBySearch = usePosts(state => state.getPostsBySearch)


    const handelSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const posts = await getPostsBySearch(search);

        mutate(posts);
        // onSearch(posts);
    }

    return (
        <form onSubmit={handelSubmit}>
            <input
                type='search'
                placeholder='search'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default PostsSearch