import { useEffect, useState } from "react";
import * as api from "./api";

// 카테고리 목록
export function useCategoryList(type) {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        api.getCategoryList(type)
        .then(response => response.data)
        .then(list => setCategoryList(list.map(value => value.name)));
    }, [type]);

    return categoryList;
}

// 포스트 목록
export function usePostList(type, category) {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        api.getPostList(type, category)
        .then(response => response.data)
        .then(list => setPostList(list.map(value => {
            const id = value.name.split('~');
            return {
                id: value.name,
                title: id[1].replace(/_/g, ' '),
                date: id[0],
            }
        })));
    }, [type, category]);

    return postList;
}

// 포스트 정보
export function usePostContent(type, category, id) {
    const [postContent, setPostContent] = useState('');

    useEffect(() => {
        api.getPostContent(type, category, id)
        .then(content => setPostContent(content))
        .catch(error => setPostContent(error));
    }, [type, category, id]);

    return postContent;
}

// 스크롤
export function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState('NONE');

    let throttler;
    let prevScrollRemain = document.body.scrollHeight - window.scrollY;
    const SCROLL_BUFFER = 100;

    const handleScroll = () => {
        if (throttler) return;
        throttler = setTimeout(() => {
            let scrollRemain = document.body.scrollHeight - window.scrollY;

            if (prevScrollRemain + SCROLL_BUFFER < scrollRemain || window.scrollY === 0) setScrollDirection('UP');
            else if (prevScrollRemain > scrollRemain) setScrollDirection('DOWN');
            else setScrollDirection('NONE');

            prevScrollRemain = scrollRemain;
            throttler = null;
        }, 100);
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line
    }, []);

    return scrollDirection;
}
export function useScrollTop() {
    const [isScrollTop, setScrollTop] = useState(true);

    let throttler;

    const handleScroll = () => {
        if (throttler) return;
        throttler = setTimeout(() => {
            if (window.scrollY === 0) setScrollTop(true);
            else setScrollTop(false);
            throttler = null;
        }, 100);
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line
    }, []);

    return isScrollTop;
}