import express from 'express';
import path from 'path';
import fs from 'fs';

const routesPath = path.join(__dirname, 'routes');
const routes: { [key: string]: any } = {};
fs.readdirSync(routesPath)
    .filter((file) => file.endsWith('.ts'))
    .forEach((file) => {
        file = file.replace('.ts', '.js');
        const imprt = path.join(routesPath, file);
        routes[file.substring(0, file.indexOf('.js'))] = require(imprt).default;
    });

const APP = express();
const PORT = 3000;

APP.use(express.static(path.join(__dirname, '@public')));
APP.use('/', routes["root"]);

APP.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});