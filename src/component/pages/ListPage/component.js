import {
    BaseContainer, 
    SubHeaderContainer, CategoryContainer, Category,
    PostContainer
} from "./style";
import PostCard from "../../common/card/PostCard";

export const Container = {
    Base: function(props) {
        return <BaseContainer>{props.children}</BaseContainer>
    },
    SubHeader: function(props) {
        return <SubHeaderContainer>{props.children}</SubHeaderContainer>
    },
};

export const Group = {
    Category: function(props) {
        return (
            <CategoryContainer>{props.categoryList.map((category, index) => 
                <Category key={index} onClick={() => props.replace(`/${props.type}/${category}`)} selected={props.category === category}>{category}</Category>)}
            </CategoryContainer>
        )
    },
    Post: function(props) {
        return (
            <PostContainer>
                {props.postList.map((post, index) => 
                <PostCard 
                    key={index}
                    title={post.title}
                    date={post.date}
                    tag={[]}
                    onClick={() => props.push(`/${props.type}/${props.category}/${post.id}`)}/>)}
            </PostContainer>
        )
    },
};

export const Element = {

};