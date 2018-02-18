# octo-issue repro
working on fix for https://github.com/octokit/rest.js/commit/d191dfc7096df038d767f2000d11caa81b719375#commitcomment-27295686

@gr2m it appears that it works fine with your change on Lambda with a direct deploy.  

Example: https://yqqsegb9cl.execute-api.us-east-1.amazonaws.com/dev/octo-issue

## setup
If you have https://serverless.com/ framework and aws sdk setup, you can:

1. clone this repo.
1. set GITHUB_TOKEN env var to your test token.
1. run `serverless deploy -v`

## next..
I'm guessing it is something to do with babel or webpack.  The use case we have is ES6 imports and classes being transpiled under 
Node8.x to suit Lambda on Node 6.x .

Ping me if questions, otherwise i'll take a look at adding the babel and webpack and see how that goes.  fyi @Neko-Design

## updates
@wyvern8 - updated deploy steps
@wyvern8 - actually, this was on 14.0.9 - will try 15.x
@wyvern8 - still works fine on 15.0.1 so babel and webpack next..
