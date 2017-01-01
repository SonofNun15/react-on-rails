## `react-rails-json` branch

Turns this application into a JSON REST API. All endpoints receive and return JSON instead of html. Works with the [`react-on-rails-ui`](https://github.com/SonofNun15/react-on-rails-ui) repository.

## react-on-rails
A vanilla Ruby on Rails application for tracking vehicle mileage

Runs great on Ruby 2.2.2

To run, execute:
```
bundle
bundle exec rake db:setup
bundle exec rails s
```

Send json requests to `localhost:3000` via `cURL`, postman, or any other source.

There are no tests associated with this application as it was built quickly for demonstration purposes. All production code should be covered by tests to prevent regression, but failures in application have little to no cost.
