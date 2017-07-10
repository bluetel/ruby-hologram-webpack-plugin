const spawn = require('child_process').spawn

function RubyHologramPlugin(options) {
  this.options = options
}

RubyHologramPlugin.prototype.apply = function(compiler) {
  const configFile = this.options.config
  const binary = this.options.binary || 'hologram'
  compiler.plugin('done', function(stats) {
    spawn(binary, [configFile], {stdio: 'inherit'})
  })
}

module.exports = RubyHologramPlugin
