# README

- Add `gem 'inertia_rails'` to our Gemfile.
- Install React: `rails webpacker:install:react`
- Intall InertiaJS: `yarn add @inertiajs/inertia @inertiajs/inertia-react`
- Disable Turbo links:
  - Remove turbolinks gem from Gemfile
  - Remove turbolinks attributes on tags in the application layout `<head>`.
  - Comment out the loading of turbolinks in `app/javascript/packs/application.js` file.

# To Run App

Prep the dependencies and the database:

```
bundle install
yarn install
rails db:migrate
```

Then run the rails server: `rails s`

And then run the webpack dev server in a separate terminal: `./bin/wepback-dev-server`
