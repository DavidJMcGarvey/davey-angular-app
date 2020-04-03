// Import global stylesheet
import './styles/main.css';
// TODO - use platformBrowser from '@angular/platformBrowser' before deploy
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
