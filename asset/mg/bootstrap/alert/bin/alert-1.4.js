/**
 * alert - v1.4
 * vapour at 2015.12.31 10:26
 */
angular.module("mg.bootstrap.alert",["mg.bootstrap.dialog"]).factory("mgAlert",["$modal","$timeout","$sce",function(a,b,c){function d(d){return a.open({backdrop:d.backdrop||!0,templateUrl:"tpl/dialog.htm",controllerAs:"vm",controller:["$scope","$modalInstance",function(a,e){this.click=function(a){e.close(a)},angular.extend(this,d),this.description=c.trustAsHtml(d.description),this.title=c.trustAsHtml(d.title),this.timeout&&b(function(){e.dismiss("timeout close")},this.timeout)}]})}function e(){var a={},b=arguments[1],c=arguments[2];return angular.isObject(b)?a=b:(a.title=b,a.description=c),a.type=arguments[0],angular.isArray(a.btns)||(a.btns=[{text:"确定",className:"btn-primary"}],"confirm"===a.type&&a.btns.push({text:"取消"})),a}function f(a,b){var c=Array.prototype.slice.call(a);return c.unshift(b),c}return{error:function(){var a=e.apply(null,f(arguments,"error"));return d(a)},warn:function(){var a=e.apply(null,f(arguments,"warning"));return d(a)},success:function(){var a=e.apply(null,f(arguments,"success"));return d(a)},confirm:function(){var a=e.apply(null,f(arguments,"confirm"));return d(a)}}}]),angular.module("mg.bootstrap.alert").run(["$templateCache",function(a){a.put("tpl/dialog.htm",'<div class="modal-body">\n    <div class="mango-alert">\n        <div class="icon error" ng-show="vm.type == \'error\'">\n            <span class="x-mark">\n                <span class="line left"></span>\n                <span class="line right"></span>\n            </span>\n        </div>\n        <div class="icon warning" ng-show="vm.type === \'warning\' || vm.type === \'confirm\'"></div>\n        <div class="icon success" ng-show="vm.type === \'success\'">\n            <span class="line tip"></span>\n            <span class="line long"></span> \n        </div>\n        <h2 ng-show="vm.title" ng-bind-html="vm.title"></h2>\n        <p ng-show="vm.description" ng-bind-html="vm.description"></p>\n        <div class="action" ng-show="vm.btns.length > 0">\n            <span ng-repeat="btn in vm.btns">\n                <button class="btn {{btn.className || \'btn-default\'}}" ng-click="vm.click($index)" ng-hide="btn.href">{{btn.text}}</button>\n                <a href="{{btn.href}}" class="btn {{btn.className || \'btn-default\'}}" ng-click="vm.click($index)" ng-show="btn.href">{{btn.text}}</a>\n            </span>\n        </div>\n    </div>\n</div>\n')}]);