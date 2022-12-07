import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HorizontalNavComponent } from './horizontal-nav/horizontal-nav.component';
import { RsPictosComponent } from './rs-pictos/rs-pictos.component';
import { FullWidthImgWithOutlineComponent } from './full-width-img-with-outline/full-width-img-with-outline.component';
import { WideCtaWrapperComponent } from './wide-cta-wrapper/wide-cta-wrapper.component';
import { WideCtaComponent } from './wide-cta/wide-cta.component';
import { InfoBubleWrapperComponent } from './info-buble-wrapper/info-buble-wrapper.component';
import { InfoBubbleComponent } from './info-bubble/info-bubble.component';
import { ResumeeWithImgComponent } from './resumee-with-img/resumee-with-img.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TextBannerComponent } from './text-banner/text-banner.component';
import { HorizontalImgGaleryComponent } from './horizontal-img-galery/horizontal-img-galery.component';
import { BasicCtaBtnComponent } from './basic-cta-btn/basic-cta-btn.component';
import { TestimonialsImgWithTextComponent } from './testimonials/testimonials-img-with-text/testimonials-img-with-text.component';
import { GaleryComponent } from './galery/galery.component';
import { AppRoutingRoutingModule } from './app-routing/app-routing-routing.module';
import { ImageWithTitleOverlayComponent } from './image-with-title-overlay/image-with-title-overlay.component';
import { CitationFWComponent } from './citation-fw/citation-fw.component';
import { RewardsComponent } from './rewards/rewards.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PrestationsComponent } from './prestations/prestations.component';
import { PrivateGaleriesComponent } from './private-galeries/private-galeries.component';
import { PrivateGaleryComponent } from './private-galery/private-galery.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavBarComponent,
    FooterComponent,
    SideNavComponent,
    HorizontalNavComponent,
    RsPictosComponent,
    FullWidthImgWithOutlineComponent,
    WideCtaWrapperComponent,
    WideCtaComponent,
    InfoBubleWrapperComponent,
    InfoBubbleComponent,
    ResumeeWithImgComponent,
    TestimonialsComponent,
    TextBannerComponent,
    HorizontalImgGaleryComponent,
    BasicCtaBtnComponent,
    TestimonialsImgWithTextComponent,
    GaleryComponent,
    ImageWithTitleOverlayComponent,
    CitationFWComponent,
    RewardsComponent,
    PageHeaderComponent,
    PrestationsComponent,
    PrivateGaleriesComponent,
    PrivateGaleryComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
