export interface CreateRequest {
    name: string;
    description: string;
    image: string;
    price: number;
}

export interface ByIdRequest {
    id: string;
}

export interface UpdateRequest {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
}

export interface DeleteRequest {
    id: string;
}