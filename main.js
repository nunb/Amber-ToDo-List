requirejs.config({
  paths: {
    'Examples': 'src',
    'amber': 'bower_components/amber/support',
    'amber_vm': 'bower_components/amber/support',
    'amber_css': 'bower_components/amber/css',
    'amber_core': 'bower_components/amber/src',
    'amber_lib': 'bower_components',
    'jquery': 'bower_components/jquery/jquery.min',
    'director': 'bower_components/director/build'
  }
});

requirejs([
    'amber/amber',
    'amber/deploy',
    'Examples/Examples-ToDo',
    'Examples/Examples-ToDo-Models',
    'Examples/Examples-ToDo-Views',
    'Examples/Examples-ToDo-Announcements',
    'director/director.min'
  ],
  function (_, smalltalk) {
    console.log(smalltalk);
    smalltalk.initialize({
      'transport.defaultAmdNamespace': "Examples"
    });
    smalltalk.globals.TodoApp._run();
  }
);
