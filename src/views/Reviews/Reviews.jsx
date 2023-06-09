import { Main, CommentContainer } from "./styles/reviewsStyles";
import Comment from "./components/Comment/Comment";
import Rating from "./components/Rating/Rating";
import AddComment from "./components/AddComment/AddComment";

export default function Reviews() {
    return(
        <Main>
            <h1>Reseñas</h1>
            <Rating />
            <CommentContainer>
                <AddComment />
                <Comment qualification={4}/>
                <Comment qualification={1}/>
                <Comment qualification={2}/>
                <Comment qualification={1}/>
                <Comment qualification={3}/>
                <Comment qualification={5}/>
                <Comment qualification={4}/>
                <Comment qualification={5}/>
            </CommentContainer>
        </Main>
    );
};