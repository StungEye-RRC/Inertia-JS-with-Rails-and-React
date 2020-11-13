# README

- Add `gem 'inertia_rails'` to our Gemfile.
- Install React: `rails webpacker:install:react`
- Intall InertiaJS: `yarn add @inertiajs/inertia @inertiajs/inertia-react`
- Disable Turbo links:
  - Remove gem from Gemfile
  - Disable in application layout
  - Comment out in app/javascript/packs/application.js

# To Run App

Prep the dependencies and the database:

```
bundle install
yarn install
rails db:migrate
```

Then run the rails server: `rails s`

And then run the webpack dev server in a separate terminal: `./bin/wepback-dev-server`
