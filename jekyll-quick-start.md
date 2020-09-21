# Learning Jekyll - Resources

0. [Jekyll Documentation](https://jekyllrb.com/docs/)

1. [Jekyll Video Walkthroughs]
(https://jekyllrb.com/tutorials/video-walkthroughs/)

2. [Create your Academic Website in Jekyll and Host it on Github](http://svmiller.com/blog/2015/08/create-your-website-in-jekyll/)

3. [Tufte-Jekyll](http://jekyllthemes.org/themes/tufte-jekyll/)

4. [Jekyll-Scholar](https://gist.github.com/roachhd/ed8da4786ba79dfc4d91)

5. [citeproc-ruby](https://github.com/inukshuk/citeproc-ruby)

6. [Jekyll for Web Designers (James Williamson)](http://simpleprimate.com/jekyll-for-designers/)


# Jekyll Quickstart

1. Install full Ruby development environment (follow platform specific instructions)
    
    a. https://jekyllrb.com/docs/installation/macos/
    
    b. Check the version of Ruby installed on your Mac
 
        `ruby -v`

    c. Install the Ruby Version Manager rvm

        `curl -L https://get.rvm.io | bash -s stable`

    d. Install the latest version of Ruby

        `rvm install ruby-2.7`

    e. Set the latest version of Ruby as the one you want to use

        `rvm use ruby-2.7`

    f. Or, make ruby-2.7 as the default version

        `rvm --default use 2.7`


2. Install Jekyll and bundler gems

    `gem install jekyll bundler`

3. Create a Jekyll website at ./new web-site-name

	`jekyll new web-site-name`

4. Change to web-site-name directory

	`cd web-site-name`

5. Build the site and make it available on a local server.
 
    `bundle exec jekyll serve`

6. Browse to http://localhost:4000

An underscore at the beginning of a directory signals Jekyll to process the contents of the directory and not to include it in the final directory structure.




# Markdown

- Content for Jekyll projects can be written in either HTML or Markdown.

- Markdown is a text-to-HTML converter -- you write text naturally in plain text format and then convert it to valid HTML using Markdown rendering engines.

- Jekyll supports Kramdown, Redcarpet, and RDiscount rendering engines; specify this choice in _config,yml file:

	`markdown: kramdown`
	
- Consecutive lines of text are formatted as a single paragraph.

- Headings

	`# A Level-1 Heading`
	
	`## A Level-1 Heading`
	
	`### A Level-1 Heading`
	
- Blockquotes are formatted using the > at the start of the blockquote

	`> This is a blockquote.`
	
- Ordered Lists: Simply type a list started by a number followed by a period. Each list item should be on a separate line. Nested lists are created by indenting a list underneath an existing list item.

```1. This is the first list item
2. This is the second list item
3. This is the third list item
    1. This is the first element of the nested list
    2. This is the second element of the nested list
4. This is the fourth list item.
```
- Inline formating: **this is bold text** and *this text is italicized*.

- Block-level attributes: in the following, the class *main* is applied to a level-1 heading.

	```
	# A Level-1 Heading
	{: .main}
	```
	
	The syntax for applying classes is *.className* and for IDs *#ID-name*.
	
	Apply a *role* attribute as shown below:
	
	```
	# A Level-1 Heading
	{: role="sidebar"}
	```
	Multiple attributes are applied through a space-sepaated list:
	
	```
	# A Level-1 Heading
	{: .class-1 .class-2 role="sidebar" #ID-1}
	```
	
	Links syntax:
	
	```
	[East Carolina University](https://www.ecu.edu)
  ```
  
  Syntax for inserting images:
  
  ```
  ![caption-for-the-image](file-path-to-the-image)
  ```
	
# Liquid

- Jekyll uses the **Liquid** template language to control templates logic and assemble pages dynamically.

- Atleast basic Knowledge of **Liquid** is essential to build effective templates.

- A combination of *tags*, *objects*, and *filters* are used to load and format content.

- Within tags, logic can be applied to loop through objects, create variables, and apply conditional statements.

- Two types of markup in Liquid: *tags* and *output*

- *output* writes content to the page. It start with two curly braces, contain the content to be written to the page, and then end with two curly braces.

	```
	Producer: {{producer-name}}
	Written by {{page.author}}
	```

- The value of *producer-name* is evaluated and written to the page; the page object would be parsed to find the value of the author property.

- *Filters* are methods that are used to transform the results of output.

	```
	{{ site.time | date_to_string}}
	```

- *tags* perform some type of function such as looping through an array; provide the basic programming logic for templates and enable building intelligent templates; written with a curly brace followed by a percentage sign (%), desired instructions, and end with a percentage sign and a curly brace.

	```
{% if page.title == 'About' %}
    About this blog
{% endif %}
	```
## Tag Categories

- Control Flow (if/else)

- Iteration (for loops)

- Theme (template-specific tags to output specific markup)

- Variables


- Dynamic insertion of content:

	```
	{% include footer.html %}
	```
- Two primary ways to assign variables -- *assign* and *capture* methods.

	```
{% assign author = 'cbn' %}
{{ author }}
	```

	```
  {% capture site_tags %}
      {% for tag in site.tags %}{{ tag | first }}
           {% unless forloop.last %},{% endunless %}
      {% endfor %}
  {% endcapture %}
	```

- The above code loops through all tags in the site, extracts one at a time, and stores them (comma delimited) into the variable *site_tags*.



# Jekyll Themes

Some themes are free and other are paid.

    [jekyllthemes.io](http://www.jekyllthemes.io/)

    [jekyllthemes.org](http://www.jekyllthemes.org/)


## Installing Themes

Two common ways to install themes:

1. Fork a GitHub repository of the theme and use it as a starting point. Clone the fork using:

		`git clone url`
		
2. Edit the Gemfile. For example,

		`gem "jekyll-athena"`
	
	Also, edit _config.yml. In Build settings sesction, insert:
	
		`theme: jekyll-athena
	
	Lastly, run the `bundle` command:
	
		`bundle`
	
	See the changes the jekyll-athena theme brought:
	
		`bundle exec jekyll serve`
		
		
		
# The Site Configuration File (`_config.yml`)

You can change Site settings. For example, you can change title, email, description, baseurl, url, Twitter user name, and GitHub user name.

Complex themes may provide more options that you can change for site settings.

Insert the following line to change the name of the directory for holding the generated pages (default directory name is _site)

`destination: public`

If you are using **git**, add the `public` directory to .gitignore file.

`git add --all`
`git commit -m "Add Athena theme and configuration"`

Need to restart the server to see the effect of these changes.

# Creating a New Post

1. Create a new file in the `_posts` directory

2. Instead of manually creating a file in `_posts` directory, employ an easier way:
 
	a. Add the following to the end of the `Gemfile`
	
		gem 'jekyll-compose', group: [:jekyll_plugins]
		
	b. Install the gem
	
		bundle

3. Now create a post using the following:

	`bundle exec jekyll post "post-name"`
	
4. Verify that post-name file is created in `_posts` directory. Notice the front matter. Front matter stores **metadata** and some **properties** about the post. You may also add categories and tags to the front matter section.

5. Add content to the new post

6. Preview the new content

	`bundle exec jekyll serve`
	
Jekyll **collections concept** -- lets you define your own set of content that can act like posts and pages.
	
	
# Customizing 404.html page

Though optional, add meaningful content/message to this file.

# Compiling the Website

1. `bundle exec jekyll build`
2. Output goes into the default `_site` directory, unless specified otherwise.
3. Contents of `_site` is the entire website.

	
# Creating Standlone Pages

1. `bundle exec jekyll page "projects"`

	Notice that *projects.md* file is created in the top-level directry.
	
2. Add some content to *projects.md* and save.

3. Preview the new page

	`bundle exec jekyll serve`

	Notice that a link to *projects.md* is created in the top-right area of the main/landing page.
	
4. Next, add some content to *about.md* file.


# Publishing/Deployment Options

1. Manual copy

2. Deploy to an FTP Server

3. Depoly to Amazon Web Services (AWS)

4. Deploy to Netlify (this service is specifically built for static websites)

Store your files on GitHub to enable automatic deployments. Using *Travis CI*, deploy to any of the above choices. Create a GitHub repository and push your website files to GitHub. 

## Travis CI 

[Travis CI](https://travis-ci.org/) is not required for Netlify deployment. 

1. Sign into Travis using your existing GitHub account.

2. Create `.travis.yml` file in GitHub directory.

	```language: ruby
before_script:
- npm install
- rm -rf public
- bundle exec jekyll build
script:
- npm run deploy
branches:
 only:
 - master```

## Domain Name Purchase

[NameCheap](https://www.namecheap.com/)


## Deploy to an FTP Server

- Workflow: GitHub (website repository) --> Travis CI (build/deploy) --> FTP Server.

- FTP/Web Server should support Secure FTP (SFTP)

- Need host/server name, post, and user-name/password for the FTP/Web Server

- Use FileZilla to test the connection

## Deployment Script

- Can be written in any language, we will use Javascript

- The script establishes SFTP connection, removes old files from the server, and copies updated files.

- Run the deployment script using node.js

- Install node

	`node -v`
	
- When you install node.js, it also install npm (node package manager)

- `npm init -y` (to start a new npm project in the website directory)

- `npm install --save glob upath ssh2-sftp-client`

- Node downloaded them into a directory called `node_modules`. Add this directory to .gitignore

- Edit package.js file, which was generated by npm

- ```{
  "name": "ispel-static-site",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "deploy": "node deploy.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vngudivada.github.io.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/vngudivada.github.io/issues"
  },
  "homepage": "https://github.com/vngudivada.github.io#readme",
  "dependencies": {
    "glob": "^7.1.3",
    "ssh2-sftp-client": "^3.1.0",
    "upath": "^1.1.0"
  }
}```

- `deploy.js` script

	```
	const SftpClient = require('ssh2-sftp-client');
	const sftp = new SftpClient();
	
	const util = require('util');
	const glob = util.promisify(require('glob'));
	const upath = require('upath');
	const fs = require('fs');

	const remotePathBase = '/home4/vngudivada/public_html';
	const ignoredRemoteItems = new Set(['.well-known', 'cgi-bin', '.htaccess', 'favicon.ico']);
	
	let itemsToUpload = [];
	
	if (!process.env.FTP_DEPLOY_HOST) throw new Error('FTP_DEPLOY_HOST not set');
	if (!process.env.FTP_DEPLOY_PORT) throw new Error('FTP_DEPLOY_PORT not set');
	if (!process.env.FTP_DEPLOY_USERNAME) throw new Error('FTP_DEPLOY_USERNAME not set');
	if (!process.env.FTP_DEPLOY_PASSWORD) throw new Error('FTP_DEPLOY_PASSWORD not set');

	sftp.connect({
	  host: process.env.FTP_DEPLOY_HOST,
	  port: process.env.FTP_DEPLOY_PORT,
	  username: process.env.FTP_DEPLOY_USERNAME,
	  password: process.env.FTP_DEPLOY_PASSWORD
	})
	.then(() => scanLocalFiles())
	.then(items => {
	  if (!items || items.length < 1) throw new Error('Nothing to upload!');
	
	  itemsToUpload = items;
	})
	.then(() => cleanRemote())
	.then(() => createDirectoriesFor(itemsToUpload))
	.then(() => uploadFiles(itemsToUpload))
	.then(() => sftp.end())
	.catch(err => {
	  sftp.end();
	  console.error(err);
	  process.exit(1);
	});

	function scanLocalFiles() {
	  let localPublicDir = upath.join(process.cwd(), 'public');
	
	  return glob(`${localPublicDir}/**/*`).then(globMatches => {
	    let items = globMatches.map(path => {
	      return {
	        isDirectory: fs.lstatSync(path).isDirectory(),
	        localPath: path,
	        remotePath: upath.join(
	          remotePathBase,
	          upath.relative(localPublicDir, path)
	        )
	      }
	    });
	
	    return items;
	  })
	}

	function cleanRemote() {
	  console.log('\nCleaning remote server');
	
	  return sftp
	    .list(remotePathBase)
	    .then(objectList => {
	      objectList = objectList.filter(obj => !ignoredRemoteItems.has(obj.name));
	
	      let directoriesToRemove = objectList
	        .filter(obj => obj.type === 'd')
	        .map(obj => obj.name);
	
	      let filesToRemove = objectList
	        .filter(obj => obj.type === '-')
	        .map(obj => obj.name);
	
	      let operations = directoriesToRemove.map(dir => 
	        sftp.rmdir(upath.join(remotePathBase, dir), true)
	        .then(() => console.log(`Removed directory ${dir}`)))
	      .concat(filesToRemove.map(file =>
	        sftp.delete(upath.join(remotePathBase, file))
	        .then(() => console.log(`Removed file ${file}`))));
	
	      return Promise.all(operations);
	    })
	}

	function createDirectoriesFor(items) {
	  console.log('Creating directories');
	
	  let directoriesToCreate = items.filter(path => path.isDirectory);
	
	  return Promise.all(directoriesToCreate.map(dir =>
	    sftp.mkdir(dir.remotePath, true)
	    .then(() => console.log(`Created directory ${dir.remotePath}`))));
	}
	
	function uploadFiles(items) {
	  console.log('Uploading files');
	
	  let filesToUpload = items.filter(path => !path.isDirectory);
	
	  return Promise.all(filesToUpload.map(file =>
	    sftp.put(file.localPath, file.remotePath)
	    .then(() => console.log(`Uploaded file ${file.remotePath}`))));
	}
```

- `npm run deploy`

- The above will fail as the environment variables are not set in the local computer.

- On Mac, `export FTP_DEPLOY_HOST=remotehost.ecu.edu`

- Set values for the other remaining environment variables.

- To last across sessions, set them in `.bash_profile` file.

## Automate `npm run deploy` using Travis CI

- We run the deployment script from `.travis.yml` file

- Make changes to `.config.yml` file in *exclude from processing* section

- `bundle exec jekyll build`

- Check the output directory (**_site**)

``` # Welcome to Jekyll!
#
# This config file is meant for settings that affect your whole blog, values
# which you are expected to set up once and rarely edit after that. If you find
# yourself editing this file very often, consider using Jekyll's data files
# feature for the data you need to update frequently.
#
# For technical reasons, this file is *NOT* reloaded automatically when you use
# 'bundle exec jekyll serve'. If you change this file, please restart the server process.

# Site settings
# These are used to personalize your new site. If you look in the HTML files,
# you will see them accessed via {{ site.title }}, {{ site.email }}, and so on.
# You can create any custom variable you would like, and they will be accessible
# in the templates via {{ site.myvariable }}.
title: ISPeL
email: gudivadav15@ecu.edu
description: >- # this means to ignore newlines until "baseurl:"
  This is an example of a great static site built in Jekyll.
baseurl: "" # the subpath of your site, e.g. /blog
url: "https://www.awesomestaticsites.com" # the base hostname & protocol for your site, e.g. http://example.com
twitter_username: vngudivada
github_username:  vngudivada

# Build settings
markdown: kramdown
theme: jekyll-athena
plugins:
  - jekyll-feed

destination: public

# Exclude from processing.
# The following items will not be processed, by default. Create a custom list
# to override the default setting.
exclude:
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor/bundle/
  - vendor/cache/
  - vendor/gems/
  - vendor/ruby/
  - package-lock.json
  - package.json
  - deploy.js
```

- Connect *deploy* script to [Travis CI](https://travis-ci.org/)

- Make a few changes to `.travis.yml`

```
language: ruby
before_script:
- npm install
- rm -rf public
- bundle exec jekyll build
script:
- npm run deploy
branches:
 only:
 - master
```
- Add environment variables to the **settings** section of Travis for the website repository

- FTP next steps: add domain name and HTTPS




# Git Commands for Version Control

1. Install git (comes pre-installed on linux and mac os)

2. git init

3. git status

4. git add --all

5. git commit -m "Create Initial Project"