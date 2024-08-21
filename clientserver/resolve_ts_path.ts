import { path, fs, _dirname_ } from './common_imports.js';

/**
 * Resolves the given path based on the typescript configuration paths property.
 * @param {string} inputPath - The path to transform.
 * @returns {string} - The transformed path.
 */
export function resolvePath(inputPath: string, compiledPath: string = "../clientserver/"): string {
  const __dirname = path.resolve(_dirname_(import.meta.url), compiledPath);
  const tsconfig_filename = path.resolve(__dirname, "tsconfig.server.json");
  const tsConfig = JSON.parse(fs.readFileSync(tsconfig_filename, "utf8"));
  // create the alias search pattern from the inputPath
  const aliasPattern = new RegExp(`^${inputPath.split("/")[0]}`);
  // find the alias in the tsconfig paths
  const alias = Object.keys(tsConfig.compilerOptions.paths).find((key) => aliasPattern.test(key));
  if (alias) {
    const targetPath = tsConfig.compilerOptions.paths[alias][0].replace("/*", "");
    const restOfPath = inputPath.split("/").slice(1).join("/");
    return path.resolve(__dirname, targetPath, restOfPath);
  }
  return inputPath; // Return the original path if no alias matches
}
