import api from '../lib/api';
import { Post, ApiResponse, PostsResponse } from '../types/post';

export class PostService {
  static async fetchPosts(): Promise<PostsResponse> {
    try {
      throw new Error(
        'PostService.fetchPosts() not implemented - please add your API logic'
      );
    } catch (error) {
      throw error;
    }
  }

  static async fetchPost(id: string): Promise<ApiResponse<Post>> {
    try {
      throw new Error(
        'PostService.fetchPost() not implemented - please add your API logic'
      );
    } catch (error) {
      throw error;
    }
  }
}
