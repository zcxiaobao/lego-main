import { createStore, Commit } from 'vuex';
import axios, { AxiosRequestConfig } from 'axios';
import { type EditorProps, editor } from './editor';
export interface GlobalStatus {
  loading: boolean;
  error: Record<string, unknown>;
  opName?: string;
}

export interface GlobalDataProps {
  // 全局状态，loading，error 等等
  status: GlobalStatus;
  editor: EditorProps;
}
export type ICustomAxiosConfig = AxiosRequestConfig & {
  mutationName: string;
};
export const asyncAndCommit = async (
  url: string,
  mutationName: string,
  commit: Commit,
  config: AxiosRequestConfig = { method: 'get' },
  extraData?: Record<string, unknown>,
) => {
  const newConfig: ICustomAxiosConfig = { ...config, mutationName };
  const { data } = await axios(url, newConfig);
  if (extraData) {
    commit(mutationName, { data, extraData });
  } else {
    commit(mutationName, data);
  }
  return data;
};
export default createStore<GlobalDataProps>({
  state: {
    status: {
      loading: false,
      error: { status: false, message: '' },
      opName: '',
    },
    editor: <EditorProps>{},
  },
  mutations: {},
  modules: {
    editor,
  },
});
