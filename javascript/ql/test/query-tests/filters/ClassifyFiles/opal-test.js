/* Generated by Opal 0.10.3 */
(function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, user = nil;

  Opal.add_stubs(['$attr_accessor', '$==', '$new', '$puts', '$admin?']);
  (function($base, $super) {
    function $User(){};
    var self = $User = $klass($base, $super, 'User', $User);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2;

    def.name = nil;
    self.$attr_accessor("name");

    Opal.defn(self, '$initialize', TMP_1 = function $$initialize(name) {
      var self = this;

      return self.name = name;
    }, TMP_1.$$arity = 1);

    return (Opal.defn(self, '$admin?', TMP_2 = function() {
      var self = this;

      return self.name['$==']("Admin");
    }, TMP_2.$$arity = 0), nil) && 'admin?';
  })($scope.base, null);
  user = $scope.get('User').$new("Bob");
  self.$puts(user);
  return self.$puts(user['$admin?']());
})(Opal);
