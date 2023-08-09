// optional catch all routes handles routes like /api without any sub-routes too

export default function handler(req, res) {
    const { params } = req.query
    res.status(200).json(params)
}