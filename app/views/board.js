(function() {
  div({
    id: 'boardHeader'
  }, function() {
    h1(this.title);
    a({
      id: "newThreadButton",
      href: "#newThread"
    }, function() {
      return "New Thread";
    });
    return text(this.partial("partials/post-form", {
      as: 'form',
      object: {
        action: "/" + this.board + "/",
        submit: 'Create thread',
        id: 'newThread'
      }
    }));
  });
  div({
    id: 'boardContent'
  }, function() {
    div({
      id: 'threads'
    }, function() {
      var thread, _i, _len, _ref, _results;
      _ref = this.threads;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        thread = _ref[_i];
        _results.push(text(this.partial("partials/thread", {
          object: thread
        })));
      }
      return _results;
    });
    if (this.total > this.threads.length) {
      return a({
        id: "loadMore",
        href: ("/" + this.board + "/?pages=") + (this.pages + 1)
      }, function() {
        return "Load more";
      });
    }
  });
}).call(this);
