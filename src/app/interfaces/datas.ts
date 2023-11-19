export interface Products{
    products : Product[],
    total: number,
    skip: number,
    limit: number
}

export interface Product{
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: String[]
}

export interface Comments{
    comments: Comment[],
    total: number,
    skip: number, 
    limit: number
}

export interface Comment{
    id: number,
    body: string,
    postId: number,
    user:UserInfo
}

export interface UserInfo{
    id: number,
    username: string
}
