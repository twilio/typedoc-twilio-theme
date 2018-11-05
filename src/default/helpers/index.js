module.exports = {
  eachWithPublic: function(context, options) {
    return context.filter(ctx =>
      ctx.children.filter(child => child.cssClasses.indexOf('tsd-is-private') === -1
        && child.cssClasses.indexOf('tsd-is-not-exported') === -1).length > 0
    ).map((ctx) => options.fn(ctx)).join('');
  },
};
