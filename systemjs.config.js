/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'vendors:': 'vendors/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'public/app',
      // angular bundles
      '@angular/core': 'vendors:@angular/core/bundles/core.umd.js',
      '@angular/common': 'vendors:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'vendors:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'vendors:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'vendors:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'vendors:@angular/http/bundles/http.umd.js',
      '@angular/router': 'vendors:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'vendors:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs':                       'vendors:rxjs',
      'angular2-in-memory-web-api': 'vendors:angular2-in-memory-web-api',
      '_':                          'vendors:underscore/underscore-min.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
