define(["app"],function(a){"use strict";function b(a,b,c,d){b.lang={},d.getLanguages(function(a){b.currentLanguage=a[0],b.languages=a,d.getLang(a[0].key,function(a){b.lang=a})}),a.selectLanguage=function(a){b.currentLanguage=a,d.getLang(a.key,function(a){b.lang=a})},b.getWord=function(a){return angular.isDefined(b.lang[a])?b.lang[a]:a}}return b.$inject=["$scope","$rootScope","$log","Language"],a.controller("LanguagesCtrl",b)});