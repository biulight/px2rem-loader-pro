const path = require("node:path")

const Px2rem = require("px2rem")

module.exports = function (source) {
  const { resourcePath, rootContext, getOptions } = this;
  const options = getOptions()
  var relativePath = path.relative(rootContext, resourcePath);
  if(options.exclude && relativePath.endsWith(options.exclude)) return source

  if(options.include && !relativePath.endsWith(options.include)) return source

  var px2remIns = new Px2rem(options);
  return px2remIns.generateRem(source);
}
