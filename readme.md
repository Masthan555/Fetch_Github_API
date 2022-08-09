Node JS API's for fetching most forked Github Repositories

# GITHUB-REPOS - Application Backend [ Session 1]

This code base contains logic/structure for creating the Restful APIs for the GITHUB-REPOS app, Using which we can fetch details about most forked repositories in github sorted accordingly along with commits

## How is the code organized in this repo ?
Every code base is tested, So created new repo and merged everything to master branch for.

## Prerequisite
- Understanding of Node.js
- Understanding of Async Await
- Understanding of axios API for fetching remote API's

## Tech
- Node.js

## Installation

This app requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server, As it has required dependencies embedded in project.json

```sh
npm install
npm run devStart
```


## Rest endpoints
#### 1. Fetch Repos and their corresponding commits

```sh
GET https://github-repo-fetch.herokuapp.com?n=10&m=15

Query Params:
n - represents no of repositories to fetch
m - represents no of commits to fetch for each repo

commits are embedded in each repository object under "commits" key
Sample response body :
[
	{
		"id": 14204342,
		"node_id": "MDEwOlJlcG9zaXRvcnkxNDIwNDM0Mg==",
		"name": "datasharing",
		"full_name": "jtleek/datasharing",
		"private": false,
		"owner": {
			"login": "jtleek",
			"id": 1571674,
			"node_id": "MDQ6VXNlcjE1NzE2NzQ=",
			"avatar_url": "https://avatars.githubusercontent.com/u/1571674?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/jtleek",
			"html_url": "https://github.com/jtleek",
			"followers_url": "https://api.github.com/users/jtleek/followers",
			"following_url": "https://api.github.com/users/jtleek/following{/other_user}",
			"gists_url": "https://api.github.com/users/jtleek/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/jtleek/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/jtleek/subscriptions",
			"organizations_url": "https://api.github.com/users/jtleek/orgs",
			"repos_url": "https://api.github.com/users/jtleek/repos",
			"events_url": "https://api.github.com/users/jtleek/events{/privacy}",
			"received_events_url": "https://api.github.com/users/jtleek/received_events",
			"type": "User",
			"site_admin": false
		},
		"html_url": "https://github.com/jtleek/datasharing",
		"description": "The Leek group guide to data sharing ",
		"fork": false,
		"url": "https://api.github.com/repos/jtleek/datasharing",
		"forks_url": "https://api.github.com/repos/jtleek/datasharing/forks",
		"keys_url": "https://api.github.com/repos/jtleek/datasharing/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/jtleek/datasharing/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/jtleek/datasharing/teams",
		"hooks_url": "https://api.github.com/repos/jtleek/datasharing/hooks",
		"issue_events_url": "https://api.github.com/repos/jtleek/datasharing/issues/events{/number}",
		"events_url": "https://api.github.com/repos/jtleek/datasharing/events",
		"assignees_url": "https://api.github.com/repos/jtleek/datasharing/assignees{/user}",
		"branches_url": "https://api.github.com/repos/jtleek/datasharing/branches{/branch}",
		"tags_url": "https://api.github.com/repos/jtleek/datasharing/tags",
		"blobs_url": "https://api.github.com/repos/jtleek/datasharing/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/jtleek/datasharing/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/jtleek/datasharing/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/jtleek/datasharing/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/jtleek/datasharing/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/jtleek/datasharing/languages",
		"stargazers_url": "https://api.github.com/repos/jtleek/datasharing/stargazers",
		"contributors_url": "https://api.github.com/repos/jtleek/datasharing/contributors",
		"subscribers_url": "https://api.github.com/repos/jtleek/datasharing/subscribers",
		"subscription_url": "https://api.github.com/repos/jtleek/datasharing/subscription",
		"commits_url": "https://api.github.com/repos/jtleek/datasharing/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/jtleek/datasharing/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/jtleek/datasharing/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/jtleek/datasharing/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/jtleek/datasharing/contents/{+path}",
		"compare_url": "https://api.github.com/repos/jtleek/datasharing/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/jtleek/datasharing/merges",
		"archive_url": "https://api.github.com/repos/jtleek/datasharing/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/jtleek/datasharing/downloads",
		"issues_url": "https://api.github.com/repos/jtleek/datasharing/issues{/number}",
		"pulls_url": "https://api.github.com/repos/jtleek/datasharing/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/jtleek/datasharing/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/jtleek/datasharing/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/jtleek/datasharing/labels{/name}",
		"releases_url": "https://api.github.com/repos/jtleek/datasharing/releases{/id}",
		"deployments_url": "https://api.github.com/repos/jtleek/datasharing/deployments",
		"created_at": "2013-11-07T13:25:07Z",
		"updated_at": "2022-08-09T11:56:03Z",
		"pushed_at": "2022-07-22T18:34:33Z",
		"git_url": "git://github.com/jtleek/datasharing.git",
		"ssh_url": "git@github.com:jtleek/datasharing.git",
		"clone_url": "https://github.com/jtleek/datasharing.git",
		"svn_url": "https://github.com/jtleek/datasharing",
		"homepage": null,
		"size": 590,
		"stargazers_count": 6142,
		"watchers_count": 6142,
		"language": null,
		"has_issues": true,
		"has_projects": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 241539,
		"mirror_url": null,
		"archived": false,
		"disabled": false,
		"open_issues_count": 875,
		"license": null,
		"allow_forking": true,
		"is_template": false,
		"web_commit_signoff_required": false,
		"topics": [],
		"visibility": "public",
		"forks": 241539,
		"open_issues": 875,
		"watchers": 6142,
		"default_branch": "master",
		"score": 1,
		"commits": [
			{
				"sha": "df97230f037c212d8a07cdaf9216348c63644c9b",
				"node_id": "MDY6Q29tbWl0MTQyMDQzNDI6ZGY5NzIzMGYwMzdjMjEyZDhhMDdjZGFmOTIxNjM0OGM2MzY0NGM5Yg==",
				"commit": {
					"author": {
						"name": "Jeff L",
						"email": "jtleek@users.noreply.github.com",
						"date": "2016-11-08T19:44:57Z"
					},
					"committer": {
						"name": "GitHub",
						"email": "noreply@github.com",
						"date": "2016-11-08T19:44:57Z"
					},
					"message": "Merge pull request #464 from Amherst-Statistics/master\n\nOffered suggestions to Jeff for the TAS DSS submission",
					"tree": {
						"sha": "444e0fb0ad2384d48c91524fb5af5e97522b0a21",
						"url": "https://api.github.com/repos/jtleek/datasharing/git/trees/444e0fb0ad2384d48c91524fb5af5e97522b0a21"
					},
					"url": "https://api.github.com/repos/jtleek/datasharing/git/commits/df97230f037c212d8a07cdaf9216348c63644c9b",
					"comment_count": 92,
					"verification": {
						"verified": false,
						"reason": "unsigned",
						"signature": null,
						"payload": null
					}
				},
				"url": "https://api.github.com/repos/jtleek/datasharing/commits/df97230f037c212d8a07cdaf9216348c63644c9b",
				"html_url": "https://github.com/jtleek/datasharing/commit/df97230f037c212d8a07cdaf9216348c63644c9b",
				"comments_url": "https://api.github.com/repos/jtleek/datasharing/commits/df97230f037c212d8a07cdaf9216348c63644c9b/comments",
				"author": {
					"login": "jtleek",
					"id": 1571674,
					"node_id": "MDQ6VXNlcjE1NzE2NzQ=",
					"avatar_url": "https://avatars.githubusercontent.com/u/1571674?v=4",
					"gravatar_id": "",
					"url": "https://api.github.com/users/jtleek",
					"html_url": "https://github.com/jtleek",
					"followers_url": "https://api.github.com/users/jtleek/followers",
					"following_url": "https://api.github.com/users/jtleek/following{/other_user}",
					"gists_url": "https://api.github.com/users/jtleek/gists{/gist_id}",
					"starred_url": "https://api.github.com/users/jtleek/starred{/owner}{/repo}",
					"subscriptions_url": "https://api.github.com/users/jtleek/subscriptions",
					"organizations_url": "https://api.github.com/users/jtleek/orgs",
					"repos_url": "https://api.github.com/users/jtleek/repos",
					"events_url": "https://api.github.com/users/jtleek/events{/privacy}",
					"received_events_url": "https://api.github.com/users/jtleek/received_events",
					"type": "User",
					"site_admin": false
				},
				"committer": {
					"login": "web-flow",
					"id": 19864447,
					"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
					"avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
					"gravatar_id": "",
					"url": "https://api.github.com/users/web-flow",
					"html_url": "https://github.com/web-flow",
					"followers_url": "https://api.github.com/users/web-flow/followers",
					"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
					"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
					"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
					"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
					"organizations_url": "https://api.github.com/users/web-flow/orgs",
					"repos_url": "https://api.github.com/users/web-flow/repos",
					"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
					"received_events_url": "https://api.github.com/users/web-flow/received_events",
					"type": "User",
					"site_admin": false
				},
				"parents": [
					{
						"sha": "c179250410139c62c1af03fafa4916822de8b30a",
						"url": "https://api.github.com/repos/jtleek/datasharing/commits/c179250410139c62c1af03fafa4916822de8b30a",
						"html_url": "https://github.com/jtleek/datasharing/commit/c179250410139c62c1af03fafa4916822de8b30a"
					},
					{
						"sha": "305c199c74131a646f61c54a9d5857eaa9b93435",
						"url": "https://api.github.com/repos/jtleek/datasharing/commits/305c199c74131a646f61c54a9d5857eaa9b93435",
						"html_url": "https://github.com/jtleek/datasharing/commit/305c199c74131a646f61c54a9d5857eaa9b93435"
					}
				]
			},
			{
				"sha": "305c199c74131a646f61c54a9d5857eaa9b93435",
				"node_id": "MDY6Q29tbWl0MTQyMDQzNDI6MzA1YzE5OWM3NDEzMWE2NDZmNjFjNTRhOWQ1ODU3ZWFhOWI5MzQzNQ==",
				"commit": {
					"author": {
						"name": "Nicholas Horton",
						"email": "nicholasjhorton@gmail.com",
						"date": "2016-11-06T16:09:46Z"
					},
					"committer": {
						"name": "Nicholas Horton",
						"email": "nicholasjhorton@gmail.com",
						"date": "2016-11-06T16:09:46Z"
					},
					"message": "Offered suggestions to Jeff for the TAS DSS submission.",
					"tree": {
						"sha": "444e0fb0ad2384d48c91524fb5af5e97522b0a21",
						"url": "https://api.github.com/repos/jtleek/datasharing/git/trees/444e0fb0ad2384d48c91524fb5af5e97522b0a21"
					},
					"url": "https://api.github.com/repos/jtleek/datasharing/git/commits/305c199c74131a646f61c54a9d5857eaa9b93435",
					"comment_count": 61,
					"verification": {
						"verified": false,
						"reason": "unsigned",
						"signature": null,
						"payload": null
					}
				},
				"url": "https://api.github.com/repos/jtleek/datasharing/commits/305c199c74131a646f61c54a9d5857eaa9b93435",
				"html_url": "https://github.com/jtleek/datasharing/commit/305c199c74131a646f61c54a9d5857eaa9b93435",
				"comments_url": "https://api.github.com/repos/jtleek/datasharing/commits/305c199c74131a646f61c54a9d5857eaa9b93435/comments",
				"author": {
					"login": "nicholasjhorton",
					"id": 530542,
					"node_id": "MDQ6VXNlcjUzMDU0Mg==",
					"avatar_url": "https://avatars.githubusercontent.com/u/530542?v=4",
					"gravatar_id": "",
					"url": "https://api.github.com/users/nicholasjhorton",
					"html_url": "https://github.com/nicholasjhorton",
					"followers_url": "https://api.github.com/users/nicholasjhorton/followers",
					"following_url": "https://api.github.com/users/nicholasjhorton/following{/other_user}",
					"gists_url": "https://api.github.com/users/nicholasjhorton/gists{/gist_id}",
					"starred_url": "https://api.github.com/users/nicholasjhorton/starred{/owner}{/repo}",
					"subscriptions_url": "https://api.github.com/users/nicholasjhorton/subscriptions",
					"organizations_url": "https://api.github.com/users/nicholasjhorton/orgs",
					"repos_url": "https://api.github.com/users/nicholasjhorton/repos",
					"events_url": "https://api.github.com/users/nicholasjhorton/events{/privacy}",
					"received_events_url": "https://api.github.com/users/nicholasjhorton/received_events",
					"type": "User",
					"site_admin": false
				},
				"committer": {
					"login": "nicholasjhorton",
					"id": 530542,
					"node_id": "MDQ6VXNlcjUzMDU0Mg==",
					"avatar_url": "https://avatars.githubusercontent.com/u/530542?v=4",
					"gravatar_id": "",
					"url": "https://api.github.com/users/nicholasjhorton",
					"html_url": "https://github.com/nicholasjhorton",
					"followers_url": "https://api.github.com/users/nicholasjhorton/followers",
					"following_url": "https://api.github.com/users/nicholasjhorton/following{/other_user}",
					"gists_url": "https://api.github.com/users/nicholasjhorton/gists{/gist_id}",
					"starred_url": "https://api.github.com/users/nicholasjhorton/starred{/owner}{/repo}",
					"subscriptions_url": "https://api.github.com/users/nicholasjhorton/subscriptions",
					"organizations_url": "https://api.github.com/users/nicholasjhorton/orgs",
					"repos_url": "https://api.github.com/users/nicholasjhorton/repos",
					"events_url": "https://api.github.com/users/nicholasjhorton/events{/privacy}",
					"received_events_url": "https://api.github.com/users/nicholasjhorton/received_events",
					"type": "User",
					"site_admin": false
				},
				"parents": [
					{
						"sha": "c179250410139c62c1af03fafa4916822de8b30a",
						"url": "https://api.github.com/repos/jtleek/datasharing/commits/c179250410139c62c1af03fafa4916822de8b30a",
						"html_url": "https://github.com/jtleek/datasharing/commit/c179250410139c62c1af03fafa4916822de8b30a"
					}
				]
			}
		]
	}
]
```