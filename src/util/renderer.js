import { useState } from "react";
import * as api from "./api";

import styled from "styled-components";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const renderer = (type, category, id) => {
    return {
        h1: ({children, ...props}) => <H1 {...props}>{children}</H1>,
        p: ({children, ...props}) => <P {...props}>{children}</P>,
        strong: ({children, ...props}) => <Strong {...props}>{children}</Strong>,
        extra: ({children, ...props}) => <Extra {...props}>{children}</Extra>,
        blockquote: ({children, ...props}) => <Blockquote {...props}>{children}</Blockquote>,
        ol: ({children, ordered, ...props}) => <Ol ordered={ordered.toString()} {...props}>{children}</Ol>,
        a: ({children, ...props}) => <A {...props}>{children}</A>,
        hr: ({...props}) => <Hr {...props}/>,
        img: ({...props}) => <ImageViewer type={type} category={category} id={id} {...props}/>,
        code: ({inline, className, children, ...props}) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match 
                ? <SyntaxHighlighter style={materialDark} language={match[1]} children={String(children).replace(/\n$/, '')} {...props}/>
                : <code className={className} {...props}/>;
        }
    }
}

export default renderer;

function ImageViewer({type, category, id, src, src2, width, width2, alt, ...props}) {
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);

    api.getPostImage(type, category, id, src).then(response => setImage1(`data:image/;base64,${response.data.content}`));
    src2 && api.getPostImage(type, category, id, src2).then(response => setImage2(`data:image/;base64,${response.data.content}`));

    return (
        <ImageContainer>
            <ImageList>
                <Image src={image1} width={width} alt={alt} {...props}/>
                {image2 && <Image src={image2} width={width2} alt={alt} {...props}/>}
            </ImageList>
            <ImageDescription>{alt}</ImageDescription>
        </ImageContainer>
    );
}

const H1 = styled.h1`
    padding: 13px 0;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    text-align: center;
    font-size: 1.7rem;

    @media only screen and (max-width: 768px) {
        padding: 10px 0;
        font-size: 1.5rem;
    }
`
const P = styled.p`
    line-height: 1.9rem;
    font-size: 1.1rem;

    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }
`
const Strong = styled.strong`
    color:rgb(27, 218, 193);
    transition: text-shadow .3s;

    &:hover {
        text-shadow: 0 0 40px rgb(27, 218, 193);
    }
`
const Extra = styled.span`
    color: gray;
`
const Blockquote = styled.blockquote`
    background-color: white;
    border-bottom: 2px solid rgb(27, 218, 193);
    margin: 0;
    padding: 10px;
    box-shadow: 0 0 20px lightgray;
    text-align: center;

    & > p {
        margin: 0;
    }
`
const Ol = styled.ol`
    line-height: 1.9rem;
    font-size: 1.1rem;

    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }
`
const A = styled.a`
    text-decoration: none;
    color: hsla(217, 100%, 60%);
    transition: color .3s;

    &:hover {
        color: hsla(217, 100%, 30%);
    }
`
const Hr = styled.hr`
    border: 1px solid lightgray;
    transform: scaleY(0.5);
`

const ImageContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 15px;
    margin: 30px 0;
`
const ImageList = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 15px;
`
const Image = styled.img`
    box-shadow: 0 10px 10px #DDDDDD;
    transition: box-shadow .3s;

    &:hover {
        box-shadow: 0 20px 20px #BBBBBB;
    }
`
const ImageDescription = styled.span`
    font-size: 0.8rem;
    color: gray;
`