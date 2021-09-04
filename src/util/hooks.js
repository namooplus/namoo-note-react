import { useEffect, useState } from "react";

// BlogPage
export function useCategoryList(postList) {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        const tempCategoryList = ['추천'];
        postList.forEach(post => {
            if (!tempCategoryList.includes(post.category)) 
                tempCategoryList.push(post.category);
        });
        setCategoryList(tempCategoryList);
    }, [postList]);

    return categoryList;
}
export function useFilteredPostList(postList, category) {
    const [filteredPostList, setFilteredPostList] = useState([]);

    useEffect(() => {
        if (category === '추천') setFilteredPostList(postList.filter(post => post.recommend === true));
        else setFilteredPostList(postList.filter(post => post.category === category));
    }, [postList, category]);

    return filteredPostList;
}
export function useTagList(filteredPostList) {
    const [tagList, setTagList] = useState([]);

    useEffect(() => {
        const tempTagList = ['모두'];
        filteredPostList.forEach(post => {
            post.tag.forEach(tag => {
                if (!tempTagList.includes(tag)) 
                    tempTagList.push(tag);
            })
        });
        setTagList(tempTagList);
    }, [filteredPostList]);

    return tagList;
}