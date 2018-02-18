'use strict';

module.exports.hello = (event, context, callback) => {

  let GitHubApi = require('@octokit/rest');

    console.log('Creating GitHub API Connection');
    let github = new GitHubApi();

    let token = process.env.GITHUB_TOKEN;

    console.log('Authenticating with GitHub');
    github.authenticate({
        type: 'oauth',
        token: token
    });

    github.repos.getForOrg({
        org: 'octokit',
        type: 'public'
    }).then((data) => {
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: event,
                result: data
            }),
        };

        callback(null, response);
    });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
