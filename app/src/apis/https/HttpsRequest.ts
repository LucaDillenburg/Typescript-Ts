export enum HttpsMethod {
  GET,
  POST,
  PUT,
  DELETE,
}

export default class HttpsRequest {
  static async call(
    method: HttpsMethod,
    url: string,
    body: any = undefined,
    alreadyJson: boolean = false,
  ) {
    const response = await fetch(
      url,
      HttpsRequest.getRequestInit(method, body, alreadyJson),
    );
    const responseJson = await response.json();
    return responseJson.movies;
  }

  private static getRequestInit(
    method: HttpsMethod,
    body: any,
    alreadyJson: boolean,
  ): RequestInit {
    const methodName = HttpsRequest.getNameHttpsMethod(method);
    const jsonBody =
      body === undefined
        ? undefined
        : alreadyJson
        ? body
        : JSON.stringify(body);

    return {
      method: methodName,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: jsonBody,
    };
  }
  private static getNameHttpsMethod(httpsMethod: HttpsMethod): string {
    switch (httpsMethod) {
      case HttpsMethod.GET:
        return 'GET';
      case HttpsMethod.POST:
        return 'POST';
      case HttpsMethod.PUT:
        return 'PUT';
      case HttpsMethod.DELETE:
        return 'GET';
    }
  }
}
