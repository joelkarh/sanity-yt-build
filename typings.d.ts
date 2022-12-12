//here we define our structure 
export interface Post{
    _id: string,
    _createdAt: string,
    title: string,
    author:{
        name: string,
        image: string
    },
    description: string,
    mainimage:{
        asset:{
            url: string,
        }
    },
    slug:{
        current: string
    },
    body:[object]

}