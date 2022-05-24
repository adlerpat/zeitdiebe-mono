'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">zeitdiebe-mono documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-948a842ac7eeac2dc9cdead8197ac60339e9b95a3f2c42c409583c9eea2ff8bfe4320592797c4d8046c7080943aadc621f9108a952df92a5ad7443a9e8f16f17"' : 'data-target="#xs-components-links-module-AppModule-948a842ac7eeac2dc9cdead8197ac60339e9b95a3f2c42c409583c9eea2ff8bfe4320592797c4d8046c7080943aadc621f9108a952df92a5ad7443a9e8f16f17"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-948a842ac7eeac2dc9cdead8197ac60339e9b95a3f2c42c409583c9eea2ff8bfe4320592797c4d8046c7080943aadc621f9108a952df92a5ad7443a9e8f16f17"' :
                                            'id="xs-components-links-module-AppModule-948a842ac7eeac2dc9cdead8197ac60339e9b95a3f2c42c409583c9eea2ff8bfe4320592797c4d8046c7080943aadc621f9108a952df92a5ad7443a9e8f16f17"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-948a842ac7eeac2dc9cdead8197ac60339e9b95a3f2c42c409583c9eea2ff8bfe4320592797c4d8046c7080943aadc621f9108a952df92a5ad7443a9e8f16f17"' : 'data-target="#xs-injectables-links-module-AppModule-948a842ac7eeac2dc9cdead8197ac60339e9b95a3f2c42c409583c9eea2ff8bfe4320592797c4d8046c7080943aadc621f9108a952df92a5ad7443a9e8f16f17"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-948a842ac7eeac2dc9cdead8197ac60339e9b95a3f2c42c409583c9eea2ff8bfe4320592797c4d8046c7080943aadc621f9108a952df92a5ad7443a9e8f16f17"' :
                                        'id="xs-injectables-links-module-AppModule-948a842ac7eeac2dc9cdead8197ac60339e9b95a3f2c42c409583c9eea2ff8bfe4320592797c4d8046c7080943aadc621f9108a952df92a5ad7443a9e8f16f17"' }>
                                        <li class="link">
                                            <a href="injectables/TodoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-35668059f72c53c911b6f512bbbcf7ffae1ce0da21dc09f8c2ece6942a66137b1b1583884fd12d14060b37454c8a1ce0aa5960676dae281d8df783aa9316db12-1"' : 'data-target="#xs-components-links-module-AppModule-35668059f72c53c911b6f512bbbcf7ffae1ce0da21dc09f8c2ece6942a66137b1b1583884fd12d14060b37454c8a1ce0aa5960676dae281d8df783aa9316db12-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-35668059f72c53c911b6f512bbbcf7ffae1ce0da21dc09f8c2ece6942a66137b1b1583884fd12d14060b37454c8a1ce0aa5960676dae281d8df783aa9316db12-1"' :
                                            'id="xs-components-links-module-AppModule-35668059f72c53c911b6f512bbbcf7ffae1ce0da21dc09f8c2ece6942a66137b1b1583884fd12d14060b37454c8a1ce0aa5960676dae281d8df783aa9316db12-1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreContainerComponentModule.html" data-type="entity-link" >ExploreContainerComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' : 'data-target="#xs-components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' :
                                            'id="xs-components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' }>
                                            <li class="link">
                                                <a href="components/ExploreContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExploreContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-855356372fb888e1faefa73d9fb75ebbc443a96aec8549673d34a08aa834696949a160bccc7090140f680888e88dfa02147015d300d29387bff51c12da9813a6"' : 'data-target="#xs-components-links-module-HomePageModule-855356372fb888e1faefa73d9fb75ebbc443a96aec8549673d34a08aa834696949a160bccc7090140f680888e88dfa02147015d300d29387bff51c12da9813a6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-855356372fb888e1faefa73d9fb75ebbc443a96aec8549673d34a08aa834696949a160bccc7090140f680888e88dfa02147015d300d29387bff51c12da9813a6"' :
                                            'id="xs-components-links-module-HomePageModule-855356372fb888e1faefa73d9fb75ebbc443a96aec8549673d34a08aa834696949a160bccc7090140f680888e88dfa02147015d300d29387bff51c12da9813a6"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SimpleLineChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SimpleLineChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LandingModule.html" data-type="entity-link" >LandingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LandingModule-a7eef7ae4731e61e7c78882fe62ead89cff1e823b7b161cfe003a35ae7f6a58ab3eef2253c70c62bf1dae50bfae6bc2decea6ba2d7711fc2a16d4156802eebd6"' : 'data-target="#xs-components-links-module-LandingModule-a7eef7ae4731e61e7c78882fe62ead89cff1e823b7b161cfe003a35ae7f6a58ab3eef2253c70c62bf1dae50bfae6bc2decea6ba2d7711fc2a16d4156802eebd6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LandingModule-a7eef7ae4731e61e7c78882fe62ead89cff1e823b7b161cfe003a35ae7f6a58ab3eef2253c70c62bf1dae50bfae6bc2decea6ba2d7711fc2a16d4156802eebd6"' :
                                            'id="xs-components-links-module-LandingModule-a7eef7ae4731e61e7c78882fe62ead89cff1e823b7b161cfe003a35ae7f6a58ab3eef2253c70c62bf1dae50bfae6bc2decea6ba2d7711fc2a16d4156802eebd6"' }>
                                            <li class="link">
                                                <a href="components/LandingPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LandingPageRoutingModule.html" data-type="entity-link" >LandingPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MyReportsPageModule.html" data-type="entity-link" >MyReportsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MyReportsPageModule-08d08c26f95178067bf082b7152cb31a5a15a4fd1514b0f2c74007a8315b2c74dfc44da8beb365394f4f0e9914f2a0f2d78a87be3b2c43e7cdbf63b0ea90fa2c"' : 'data-target="#xs-components-links-module-MyReportsPageModule-08d08c26f95178067bf082b7152cb31a5a15a4fd1514b0f2c74007a8315b2c74dfc44da8beb365394f4f0e9914f2a0f2d78a87be3b2c43e7cdbf63b0ea90fa2c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MyReportsPageModule-08d08c26f95178067bf082b7152cb31a5a15a4fd1514b0f2c74007a8315b2c74dfc44da8beb365394f4f0e9914f2a0f2d78a87be3b2c43e7cdbf63b0ea90fa2c"' :
                                            'id="xs-components-links-module-MyReportsPageModule-08d08c26f95178067bf082b7152cb31a5a15a4fd1514b0f2c74007a8315b2c74dfc44da8beb365394f4f0e9914f2a0f2d78a87be3b2c43e7cdbf63b0ea90fa2c"' }>
                                            <li class="link">
                                                <a href="components/MyReportsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyReportsPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportDetailModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportDetailModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyReportsRoutingModule.html" data-type="entity-link" >MyReportsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ReportPageModule.html" data-type="entity-link" >ReportPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReportPageModule-04a287064cfc8aeccf2d66ade282949af0df753e52ed18a77312170c18ea5b804880bf17a0b3fdc60c05e98c80a7bca8c61171d465fc5940168cf6bce9d7841e"' : 'data-target="#xs-components-links-module-ReportPageModule-04a287064cfc8aeccf2d66ade282949af0df753e52ed18a77312170c18ea5b804880bf17a0b3fdc60c05e98c80a7bca8c61171d465fc5940168cf6bce9d7841e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReportPageModule-04a287064cfc8aeccf2d66ade282949af0df753e52ed18a77312170c18ea5b804880bf17a0b3fdc60c05e98c80a7bca8c61171d465fc5940168cf6bce9d7841e"' :
                                            'id="xs-components-links-module-ReportPageModule-04a287064cfc8aeccf2d66ade282949af0df753e52ed18a77312170c18ea5b804880bf17a0b3fdc60c05e98c80a7bca8c61171d465fc5940168cf6bce9d7841e"' }>
                                            <li class="link">
                                                <a href="components/ReportPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReportRoutingModule.html" data-type="entity-link" >ReportRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link" >TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' : 'data-target="#xs-components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' :
                                            'id="xs-components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link" >TabsPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/DBHelper.html" data-type="entity-link" >DBHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/FirebaseHelper.html" data-type="entity-link" >FirebaseHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/StatisticsHelper.html" data-type="entity-link" >StatisticsHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/TodoService.html" data-type="entity-link" >TodoService</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReportService.html" data-type="entity-link" >ReportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatisticsService.html" data-type="entity-link" >StatisticsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TodoService.html" data-type="entity-link" >TodoService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Chainable.html" data-type="entity-link" >Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Chainable-1.html" data-type="entity-link" >Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CityStatistic.html" data-type="entity-link" >CityStatistic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GlobalStatistic.html" data-type="entity-link" >GlobalStatistic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITodo.html" data-type="entity-link" >ITodo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LineStatistic.html" data-type="entity-link" >LineStatistic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MinutesStatistic.html" data-type="entity-link" >MinutesStatistic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RepercussionsStatistic.html" data-type="entity-link" >RepercussionsStatistic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Report.html" data-type="entity-link" >Report</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Report-1.html" data-type="entity-link" >Report</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Todo.html" data-type="entity-link" >Todo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TodoDto.html" data-type="entity-link" >TodoDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TypeStatistic.html" data-type="entity-link" >TypeStatistic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VkuStatistic.html" data-type="entity-link" >VkuStatistic</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});