// Declaration merging
export interface Request {
    body: Object,
}

export interface Request {
    json: Object,
}

function handleRequest(req: Request) {
    req.body;
    req.json;
}
