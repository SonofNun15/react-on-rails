import webpack from 'webpack'
import webpackConfig from '../webpack.config.prod'
import chalk from 'chalk'

/* eslint-disable no-console */

process.env.NODE_ENV = 'production'

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'))

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.error(chalk.red(err))
    return 1
  }

  const jsonStats = stats.toJson()

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.error(chalk.red(error)))
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '))
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)))
  }

  console.log(`Webpack stats: ${stats}`)

  // If we got this far the build succeeded
  console.log(chalk.green('Your app has been build for production and written to ../public/assets'))

  return 0
})

/* eslint-enable no-console */
