import express, { Router } from 'express';
import { path, fs, resolvePath, _dirname_ } from './common_imports.js';
import * as dotx from '@dotenvx/dotenvx';
dotx.config();

const routes: { [key: string]: Router } = {};
loadRoutes().then(() => {
    if (routes["root"]) {
        APP.use('/', routes["root"]);
    }
}).catch((error) => {
    console.error('Error loading routes:', error);
});

const APP = express();
const PORT = process.env.PORT || 3000;
APP.use(express.static(resolvePath('@public')));

APP.listen(PORT, () => {
    console.log(`Server is running on ${process.env.URL}:${PORT}`);
});

///////////////////////////////////////////////// 
// Import all routes
/////////////////////////////////////////////////
async function loadRoutes() {
    const routesPath = path.join(_dirname_(import.meta.url), 'routes');
    const files = fs.readdirSync(routesPath).filter((file) => file.endsWith('.js'));

    for (const file of files) {
        const imprt = path.join(routesPath, file);
        const route = file.substring(0, file.indexOf('.js'));

        try {
            const importedRoute = await import(imprt);
            routes[route] = importedRoute.default;
        } catch (error) {
            console.error(`Failed to import ${imprt}:`, error);
        }
    }
    console.info('Routes loaded:', Object.keys(routes));
}