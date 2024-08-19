import { express, resolvePath } from '../common_imports.js';

const root = express.Router();
root.get('/', (req, res) => {
    console.log(resolvePath('@public/index.html'));
    res.sendFile(resolvePath('@public/index.html'));
});
export default root;