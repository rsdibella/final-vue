export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: Array<string>;
    creationAt: string;
    updtedAt: string;
    category: {
        id: number;
        name: string;
        images: string;
        creationAt: string;
        updatedAt: string;
    }
}