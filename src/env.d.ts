interface ImportMetaEnv {
	readonly CONTENTFUL_API_TOKEN: string;
	readonly CONTENTFUL_SPACE_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}