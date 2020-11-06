import { Article } from './article';

export const ARTICLES: Article[] = [
    {
        articleId: 1,
        articleTitle: 'Come on man',
        articleContent: 'Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents'+
                        'Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents'+
                        'Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents'+
                        'Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents'+
                        'Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents Some contents',
        niceCount: 2,
        pictureUrl: 'https://placehold.jp/48x48.png',
        createdBy: 'Kimi',
        createdAt: new Date(2020, 11, 2),
        updatedAt: new Date(2020, 11, 2)
    },
    {
        articleId: 2,
        articleTitle: 'Come on man2',
        articleContent: 'second article, bored',
        niceCount: 33,
        pictureUrl: 'https://placehold.jp/48x48.png',
        createdBy: 'Kimi',
        createdAt: new Date(2020, 11, 2),
        updatedAt: new Date(2020, 11, 2)
    },
    {
        articleId: 3,
        articleTitle: 'Come on man3',
        articleContent: 'third article, bored',
        niceCount: 12,
        pictureUrl: 'https://placehold.jp/48x48.png',
        createdBy: 'Kimi',
        createdAt: new Date(2020, 11, 2),
        updatedAt: new Date(2020, 11, 2)
    }
];