<p align="center">
  <a href="https://ilovelamp.now.sh">
    <img src="https://i.imgur.com/B1EZxsB.png" alt="Moltin React Demo Store" />
  </a>
</p>

# Moltin + React Store by Warren Koch

An example eCommerce site with improved Cart controls, Add to Product controls, and Out of Stock display logic including a countdown to future Restock events (fetchable by API).

## Overview:

I used a Gatsby React + Moltin demo as a base framework, and improved from there:
- upgrading the cart controls to be less clunky (old one would just reload the whole component on each change - no way that stands)
- adding Out-of-Stock logic which displays a mocked Restock Events API displaying when to expect new stock (complete with a countdown timer, and live updates to stock as you put it in your cart).
- adding some basic snapshot testing coverage of the whole App tree
- adding basic SASS compatibility
- making assorted small tweaks to look and feel to smooth out the experience

It runs an example Moltin store, fetching live API data and reading it through a redux handler (which I feel I've messed with enough to take some credit for the complexity by now), before displaying it on mostly-responsive and stateful components.  It's been intentionally limited in scope to best demonstrate an assigned coding challenge, sporting three main uris to show what it needs to:
- /products, 
- /product/:id
- /cart 

#### Style
As far as code quality goes - much of what I've done has been striking a balance between my personal style, the underlying demo's style, and my limited time, so I can't say this is a perfect representation of my ideal structure/style, but I don't disapprove either - at least of the files I touched on heavily (SingleProduct, CartItems, etc - see git).  The rest I say live and let live... and haven't dramatically cleaned up inefficiencies or poor style (except components which favored `var` over `let` - those I had to erradicate en-masse).  My ideal structure will have to wait for a project with big enough scope to warrant a complete framework, but I look forward to the day.

## Development Install

```bash
git clone https://github.com/dogcomplex/react-demo-store.git
cd react-demo-store
yarn # or npm install
yarn start # or npm start
```

Note: You will want to change the `client_id` inside `src/moltin.js` with your own moltin store credentials.

This demo store uses the Redux "[ducks](https://github.com/erikras/ducks-modular-redux)" approach to bundling reducers and actions.

## Deployment

### Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

### Docker

1. [Download and install docker](https://docs.docker.com/engine/installation/)
2. Make sure docker is running locally
3. Run `docker build -t lamp .` at command line
4. Run the docker image with the command `docker run -p 5000 IMAGE_ID` where `IMAGE_ID` is the image ID shown in the result of step 3.
5. Access your app on port 5000

## Moltin &mdash; React Demo Store

An example store built using [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [moltin](https://moltin.com). This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

* [Demo](https://ilovelamp.now.sh)
* [API Reference](https://docs.moltin.com)
