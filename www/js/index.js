import m from "mithril";

import authModel from "./models/auth";

import home from "./views/home";

import layout from "./views/layout";

import loginForm from "./views/login_form";

import map from "./views/map";

import policeEvent from "./views/police_event";
import policeEvents from "./views/police_events";
import policeStations from "./views/police_stations";

import registerForm from "./views/register_form";

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        // m.route(document.body, "/", {
        //     "/": {
        //         render: (vnode) => {
        //             return m(layout, m(home, vnode));
        //         }
        //     },
        //     "/login": {
        //         render: () => {
        //             return m(layout, m(loginForm));
        //         }
        //     },
        //     "/police_stations": {
        //         render: () => {
        //             return m(layout, m(policeStations));
        //         }
        //     },
        //     "/police_events": {
        //         render: () => {
        //             if (authModel.token) {
        //                 return m(layout, m(policeEvents));
        //             }

        //             m.route.set("/login");
        //         }
        //     },
        //     "/police_events/:id": {
        //         render: (vnode) => {
        //             if (authModel.token) {
        //                 return m(layout, m(policeEvent, vnode.attrs), m(map, vnode.attrs));
        //             }

        //             m.route.set("/login");
        //         }
        //     },
        //     "/register": {
        //         render: () => {
        //             return m(layout, m(registerForm));
        //         }
        //     },
        // });
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        m.route(document.body, "/", {
            "/": {
                render: (vnode) => {
                    return m(layout, m(home, vnode));
                }
            },
            "/login": {
                render: () => {
                    return m(layout, m(loginForm));
                }
            },
            "/police_stations": {
                render: () => {
                    return m(layout, m(policeStations));
                }
            },
            "/police_events": {
                render: () => {
                    if (authModel.token) {
                        return m(layout, m(policeEvents));
                    }

                    m.route.set("/login");
                }
            },
            "/police_events/:id": {
                render: (vnode) => {
                    if (authModel.token) {
                        return m(layout, m(policeEvent, vnode.attrs), m(map, vnode.attrs));
                    }

                    m.route.set("/login");
                }
            },
            "/register": {
                render: () => {
                    return m(layout, m(registerForm));
                }
            },
        });
    },

    // // Update DOM on a Received Event
    // receivedEvent: function(id) {
    //     var parentElement = document.getElementById(id);
    //     var listeningElement = parentElement.querySelector('.listening');
    //     var receivedElement = parentElement.querySelector('.received');

    //     listeningElement.setAttribute('style', 'display:none;');
    //     receivedElement.setAttribute('style', 'display:block;');

    //     console.log('Received Event: ' + id);
    // }
};

app.initialize();
