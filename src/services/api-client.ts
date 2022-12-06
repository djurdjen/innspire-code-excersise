const apiKey = 'k_105o3617';
const apiUrl = 'https://imdb-api.com/en/API/';

const headers = {
  redirect: "follow" as RequestRedirect
};

function createApiClientUrl (path: string): string {
  const hasApiKeyInPath = path.includes('{apiKey}');
  if(!hasApiKeyInPath) {
    throw new Error('API key is missing, apply the {apiKey} handlebar on the correct place in the path or check https://imdb-api.com/api/ for more info');
  }
  return apiUrl + path.replace('{apiKey}', apiKey);
}

export const api = {
  get: async <TResponse extends Record<string, any>, TPayload = undefined>(
    url: string, 
    body?: ReadableStream<TPayload>, 
    overrides?: RequestInit | undefined
  ): Promise<TResponse> => {
    try {
      const httpRequest = await fetch(createApiClientUrl(url), {
        method: 'GET', 
        body,
        ...headers,  
        ...overrides
      });
      const response = await httpRequest.json() as TResponse;
      if(response.errorMessage) {
        return Promise.reject(response.errorMessage);
      }
      return response;
    } catch(err) {
      return Promise.reject(err);
    }
  }
};
