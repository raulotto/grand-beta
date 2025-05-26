//export const BASE_PATH = '/banner-ts/test';
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/banner-ts/test' : '';
