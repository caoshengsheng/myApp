/**
 * app名称
 * @type {string}
 */
var appName = "myApp";

/**
 * 注入依赖列表
 * @type {string[]}
 */
var appModuleList = ['ionic'];

/**
 * 程序的开始
 * @type {angular.Module}
 */
var app = angular.module(appName, appModuleList);
