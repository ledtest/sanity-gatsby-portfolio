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
                  buildHookId: '5ff667941ba3ef015c4de73f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-93s83w7b',
                  apiId: '6b301344-0a4d-424d-a375-637a33df4e88'
                },
                {
                  buildHookId: '5ff6679427dc5b17a80aced2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-wachtk6c',
                  apiId: 'c5248156-7381-4865-8b08-9e3fe3acc745'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ledtest/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-wachtk6c.netlify.app',
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
