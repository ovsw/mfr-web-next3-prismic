/*
document = {
[next]   id: 'ZZ5FmhEAAIQaTeq7',
[next]   type: 'page',
[next]   tags: [],
[next]   lang: 'en-us',
[next]   slug: '-',
[next]   first_publication_date: '2024-01-10T07:22:03+0000',
[next]   last_publication_date: '2024-01-10T07:22:03+0000',
[next]   uid: 'another-page2',
[next]   url: '/another-page2',
[next]   link_type: 'Document',
[next]   isBroken: false
[next] }

or:  {
[next]   id: 'ZZ4iBhEAAOYWTUpa',
[next]   type: 'page',
[next]   tags: [],
[next]   lang: 'es',
[next]   slug: '-',
[next]   first_publication_date: '2024-01-10T04:50:16+0000',
[next]   last_publication_date: '2024-01-13T04:55:06+0000',
[next]   uid: 'another-page',
[next]   url: '/es/another-page',
[next]   link_type: 'Document',
[next]   isBroken: false
[next] }
*/

export function linkResolver(document: any) {
  if (document.type === "page") {
    return document.url;
  }

  return "/";
}
