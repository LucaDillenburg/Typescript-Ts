import MyApi from './MyApi';
import HttpsRequest, {HttpsMethod} from './https/HttpsRequest';

class MoviesApi extends MyApi {
  private static readonly URL = 'movies/';

  static async getMovies() {
    try {
      return await HttpsRequest.call(HttpsMethod.GET, MoviesApi.URL + '');
    } catch (error) {
      console.error(error);
    }
  }
}
