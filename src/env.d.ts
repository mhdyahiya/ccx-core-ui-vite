/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_SERVER_PORT: string;
  readonly VITE_APP_PUBLIC_PATH: string;
  // add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
