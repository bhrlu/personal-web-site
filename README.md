Just change `src/context/InfoContext.js` to get your personal portfolio. Feel free to use it as-is or customize it as much as you want.

But if you want to **contribute** and make this much better for other developer have a look at [Issues](https://github.com/bhrlu/personal-web-site/issues).


If you created something awesome and want to contribute then feel free to open an [pull request](https://github.com/bhrlu/personal-web-site/pulls).
## Sections
✔️ Summary and About me\
✔️ Skills\
✔️ Education\
✔️ Work Experience\
✔️ Contact me\
✔️ Github Profile

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

## How To Use 

From your command line, clone and run developerFolio:

```bash
# Clone this repository
$ git clone https://github.com/bhrlu/personal-web-site.git

# Go into the repository
$ cd personal-web-site

# Install dependencies
$ npm install

#Start's development server
$ npm start
```

## Change and customize every section according to your need.

#### Personalize page content in `/src/context/InfoContext.js` & modify it as per your need.

```javascript
/* Change this file to get your Personal web site */
const webSiteTitle = 'Amir Mahdi';
const info = {
  /* Your Summary And Greeting Section */
  name: 'Amir mahdi',
  family: 'baharlou',
  introduce: `I'm a young Engineer who has been educating in PC Engineering and interested in programming since earlychildhood; I'm willing  to take and face any new challenge and like to experience new adventures.`,
  dateOfBrith: 'November 18, 1999',
  ...
};

const skills = [
  { skill: 'HTML', persent: 90 },
  { skill: 'CSS', persent: 90 },
  { skill: 'JavaScript', persent: 80 },
];


const resume = { ... }

```

#### Adding your picture
Insert your picture in `src/assets/image` and rename to `imageProfile.png`

## Deployment
When you are done with the setup, you should host your website online.
We highly recommend to read through the [Deploying on Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) docs for React.

#### Deploying to Github Pages

This section guides you to deploy your personal web site on Github pages.

- Navigate to `package.json` and enter your domain name instead of `https://bhrlu.github.io/personal-web-site/` in `homepage` variable. For example, if you want your site to be `https://<your-username>.github.io/personal-web-site`, add the same to the homepage section of `package.json`.

- In short you can also add `/personal-web-site` to `package.json` as both are exactly same. Upon doing so, you tell `create-react-app` to add the path assets accordingly.

- Optionally, configure the domain. You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

- Follow through the guide to setup GitHub pages from the official CRA docs [here](https://create-react-app.dev/docs/deployment/#github-pages).

#### Deploying to Netlify

You could also host directly with Netlify by linking your own repository.

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/bhrlu/personal-web-site)

For more information, read [hosting on Netlify](https://create-react-app.dev/docs/deployment/#netlify).

## Technologies Used 

- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [UUID](https://github.com/uuidjs/uuid)

