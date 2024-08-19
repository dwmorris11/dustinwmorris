import { resolvePath } from './resolve_ts_path.js';
import { fileURLToPath } from 'url';
import * as express from 'express';
import * as path from 'path';
import * as fs from 'node:fs';

const _filename_ = (import_meta_url: string) => fileURLToPath(import_meta_url);
const _dirname_ = (import_meta_url: string) => path.dirname(_filename_(import_meta_url));
export { express, path, fs, resolvePath, _dirname_, _filename_ };