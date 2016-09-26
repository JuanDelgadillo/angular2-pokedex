import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../../aot/public/app/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);