export interface IGif {
    id: string;
    embed_url: string;
    is_sticky: number;
    rating: string;
    source_tld: string;
    title: string;
    type: string;
    images: {
        original: {
            url: string;
        };
    };
}
