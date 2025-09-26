import { create } from "zustand";
import { axiosInstance } from "../api/axiosInstance";
import { immer } from "zustand/middleware/immer";

type PostStore = {
  posts: Post[];
  isLoadingPosts: boolean;
  error: string;
  post: Post | null;
  isLoadingPost: boolean;
  errorPost: string;
  fetchPosts: (url?: string) => Promise<void>;
  fetchPostOne: (url?: string) => Promise<void>;
  addPost: (formData: Post) => Promise<Post>;
};

export const usePostStore = create<PostStore>()(
  immer((set) => ({
    posts: [],
    isLoadingPosts: true,
    error: "",

    post: null,
    isLoadingPost: true,
    errorPost: "",

    fetchPosts: async (url?: string) => {
      set((state) => {
        state.isLoadingPosts = true;
        state.error = "";
      });
      try {
        const { data } = await axiosInstance.get(url || "posts");
        set((state) => {
          state.posts = data;
          state.isLoadingPosts = false;
        });
      } catch (e: unknown) {
        console.error(e);
        set((state) => {
          state.error = "게시글 불러오기 실패";
          state.isLoadingPosts = false;
        });
      }
    },

    fetchPostOne: async (url?: string) => {
      set((state) => {
        state.isLoadingPost = true;
        state.errorPost = "";
      });
      try {
        const { data } = await axiosInstance.get(url || "posts");
        set((state) => {
          state.post = data;
          state.isLoadingPost = false;
        });
      } catch (e: unknown) {
        console.error(e);
        set((state) => {
          state.errorPost = "게시글 불러오기 실패";
          state.isLoadingPost = false;
        });
      }
    },

    addPost: async (formData: Post) => {
      try {
        const { data } = await axiosInstance.post("posts", formData);
        return data;
      } catch (err) {
        console.error(err);
      }
    },
  }))
);
