export const encode = (content) => Buffer.from(content, 'utf8').toString('base64');
export const decode = (content) => Buffer.from(content, 'base64').toString('utf8');