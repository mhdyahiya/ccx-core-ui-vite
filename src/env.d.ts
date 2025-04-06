interface ImportMetaEnv {
  readonly VITE_APP_SERVER_PORT: string;
  readonly VITE_APP_PUBLIC_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
