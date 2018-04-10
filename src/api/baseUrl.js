import URLSearchParams from 'url-search-params';
const params = new URLSearchParams(document.location.search.substring(1));
let useMock = params.get('useMockApi');
useMock = useMock != null && useMock === 'true';

 export default function getBaseUrl() {
   console.log('in getBaseUrl');
   console.log(`params = ${params}`);
   console.log(`useMock = ${useMock}`);
   console.log(`Node Env: ${process.env.NODE_ENV}`);
   return (process.env.NODE_ENV === 'development' && useMock === true) ? 'http://localhost:3001/' : '/api/';
 }

