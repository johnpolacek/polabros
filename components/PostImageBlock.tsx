import React from 'react';

interface PostImageBlockProps {
    node: {
        url: string;
        alt?: string;
    };
}

const PostImageBlock: React.FC<PostImageBlockProps> = ({ node }) => {
    return <img src={node.url} alt={node.alt} />;
};

export default PostImageBlock;
