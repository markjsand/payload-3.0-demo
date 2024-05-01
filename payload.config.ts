import { buildConfig } from 'payload/config';
import lexicalEditor from '@payloadcms/plugin-lexical-editor';

export default buildConfig({
// ... other configuration options
mongo: {
uri: 'mongodb://localhost:27017/payload-demo', // Update this line
},
// ... other configuration options
editor: lexicalEditor(),
collections: [
{
slug: 'pages',
admin: {
// ... admin configuration for 'pages' collection
},
// ... other configuration for 'pages' collection
},
// ... other collections
],
});
