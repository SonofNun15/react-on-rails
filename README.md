## `react-rails-npm` branch

Adds react components in a separate client folder. This folder is transpiled and bundled separately and then referenced in the rails application.

## react-on-rails
A vanilla Ruby on Rails application for tracking vehicle mileage

Runs great on Ruby 2.2.2

To run:

Open up two terminals. In the first terminal execute:
```
cd client
npm install
npm start
```

In a second terminal, execute:
```
bundle
bundle exec rake db:setup
bundle exec rails s
```

Then point a browser to `localhost:3000`

There are no tests associated with this application as it was built quickly for demonstration purposes. All production code should be covered by tests to prevent regression, but failures in application have little to no cost.
