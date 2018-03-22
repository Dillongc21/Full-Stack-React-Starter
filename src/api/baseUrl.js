import URLSearchParams from 'url-search-params';
const params = new URLSearchParams(document.location.search.substring(1));
const useMock = params.get('UseMockApi').toUpperCase();

 export default function getBaseUrl() {
   console.log('in getBaseUrl');
   console.log(`params = ${params}`);
   console.log(`useMock = ${useMock}`);
   console.log(`Node Env: ${process.env.NODE_ENV}`);
   return (process.env.NODE_ENV === 'development' && useMock === 'Y') ? 'http://localhost:3001/' : '/';
 }

 //TODO: Remove this if working correctly above
// function getQueryStringParameterByName(name, url) {
//     if (!url) url = window.location.href;
//     name = name.replace(/[\[\]]/g, '\\$&');
//     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//       results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, " "));
// }
