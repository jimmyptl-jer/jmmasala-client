/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional URL that accepts the quotation form JSON POST and returns 2xx on success. */
  readonly VITE_RFQ_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
