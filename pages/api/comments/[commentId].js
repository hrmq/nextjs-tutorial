import { comments } from "@/data/comments";

export default function handler(req, res) {
    const { commentId } = req.query
    console.log('jkjkjk')
    if (req.method === 'GET') {
        const comment = comments.find( comment => comment.id === parseInt(commentId))
        res.status(200).json(comment)
    } else if (req.method === 'DELETE') {
        console.log('jhe')
        const deletedComment = comments.find( comment => comment.id === parseInt(commentId))
        const index = comments.findIndex(comment => comment.id === parseInt(commentId))
        comments.splice(index, 1)
        res.status(200).json(deletedComment)
    }
}