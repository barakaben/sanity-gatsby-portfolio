export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61cffee12738da475b6fdba5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8w2s6qdb',
                  apiId: '39a18209-d0c0-4563-abaa-d8631a3dc237'
                },
                {
                  buildHookId: '61cffee286686a61f22e662b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fjf1kf1x',
                  apiId: '29ddd89d-916c-4f45-b0ae-3314ab41d51c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/barakaben/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fjf1kf1x.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
