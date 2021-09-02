import { URL } from 'url';

/**
 * Path to CSS functions list JSON file.
 */
const location = new URL('index.json', import.meta.url).pathname;

export default location;
