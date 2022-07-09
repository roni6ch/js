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
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return await response.json();
    } catch (error) {
        return error
    }
}