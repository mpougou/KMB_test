export interface CardInterface {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string,
        name: string
    },
    title: string;
    url: string;
    urlToImage: string;
}

export interface ResponseInterface {
    status: string;
    totalResults: number;
    articles: CardInterface[];
}