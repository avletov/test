export const getURLByUserId = (userId) => {
    const host = 'http://api.sbit500.pro';
    const pathname = '/api/testjob';
    const search = `?id_user=${userId}`;

    return new URL(pathname + search, host);
}