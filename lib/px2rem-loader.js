const path = require("node:path");

const Px2rem = require("px2rem");

module.exports = function (source) {
  const { resourcePath, rootContext, getOptions } = this;
  const { exclude, include, ...options } = getOptions();
  var relativePath = path.relative(rootContext, resourcePath);
  if (exclude && relativePath.endsWith(exclude)) return source;

  if (include && !relativePath.endsWith(include)) return source;

  var px2remIns = new Px2rem(options);
  return px2remIns.generateRem(source);
};
