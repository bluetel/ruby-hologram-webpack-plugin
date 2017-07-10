# ruby-hologram-webpack-plugin

A simple webpack plugin for the generation of styleguides using [Hologram](https://trulia.github.io/hologram/).


## Installing 

Installing this couldn't be easier, add `ruby-hologram-webpack-plugin` using your favourite Node package manager.

e.g. `npm install ruby-hologram-webpack-plugin`
or using yarn `yarn add ruby-hologram-webpack-plugin`


Then instantiate it in your webpack plugin.

```
const RubyHologramPlugin = require('ruby-hologram-webpack-plugin')

module.exports = {
  plugins: [
    new RubyHologramPlugin({
      config: '/path/to/configuration.yml'
    })
  ]
}
```

That's it, you're done!  You'll want to take a look at the [Hologram documentation](https://github.com/trulia/hologram#details) for examples on configuring Hologram.

## Options

- `config` -- Path to your configuration file. (e.g. `/hologram.yml`)
- `binary` -- Hologram binary to run.  Useful if you're using something like [Bundler](http://bundler.io/) to enforce version, or if it is outside of your path. (e.g. `/usr/local/bin/hologram` or `bundle exec hologram`)


## Upcoming Features!

- Templated configuration, for injection of assets from webpack build.
- Hotloader support.
