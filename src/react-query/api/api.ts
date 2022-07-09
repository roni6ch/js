type ApiProps = {
    url: string,
    method?: 'GET' | 'POST'
    headers?: {
        Authorization?: string,
    },
    body?: string,
}
export const request = async ({
    url,
    method = 'GET',
    headers,
    body
}: ApiProps) => {
    try {
        const response = await fetch(url, { method, headers, body })
        const data = await response.json();
        return data;
    } catch (error) {
        return error
    }
}