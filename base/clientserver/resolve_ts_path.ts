import { path, fs } from './common_imports.js';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const tsconfig_filename = path.resolve(__dirname, "../clientserver/tsconfig.server.json");

const tsConfig = JSON.parse(fs.readFileSync(tsconfig_filename, "utf8"));
const baseUrl = path.resolve(__dirname, tsConfig.compilerOptions.baseUrl);

export function resolvePath(alias: string): string {
  const aliasPath = tsConfig.compilerOptions.paths[alias][0];
  return path.resolve(baseUrl, aliasPath.replace('*', ''));
}
