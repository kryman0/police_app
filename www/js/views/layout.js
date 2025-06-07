"use strict";

import m from "mithril";

import authModel from "../models/auth";
import loginModel from "../models/login_model";
import utils from "../models/utils";

let layout = {
    onbeforeremove: (vnode) => {
        vnode.dom.classList.add("slide-out");
        return new Promise(function (resolve) {
            setTimeout(function () {
                vnode.dom.classList.remove("slide-out");
                resolve();
            }, 0);
        });
    },

    view: (vnode) => {
        return [
            m("header", [
                m("nav#menu_nav", {
                    class: "top_nav"
                }, [
                    m("span.menu_nav_title", "Polisen"),
                    m("a.menu-icon", { onclick: layout.whichElement }, [
                        m("i.material-icons", "menu"),
                    ]),
                    layout.topNav().map(element => {
                        let location = m.route.get();

                        if (element.name == "undefined") {
                            return;
                        }

                        if (location == element.link) {
                            element.selected = "active";
                        }
                        return m("a", {
                            class: element.selected,
                            href: element.link,
                            oncreate: m.route.link,
                            onupdate: m.route.link
                        }, [
                            m("i.material-icons", element.class)
                        ]);
                    })
                ])
            ]),
            m("main.container", { onclick: layout.showRemoveMenuOutsideClick }, vnode.children)
        ];
    },

    whichElement: () => {
        let menuNav = document.getElementById("menu_nav");

        window.onresize = () => {
            if (document.body.offsetWidth > 669) {
                menuNav.classList.remove("top_nav_mobile_menu");
                menuNav.classList.remove("slide-in");
                menuNav.classList.remove("slide-out");
                menuNav.classList.add("top_nav");
            }
        };

        if (menuNav.classList.contains("top_nav")) {
            menuNav.classList.remove("top_nav");
            menuNav.classList.remove("slide-out");
            menuNav.classList.add("top_nav_mobile_menu");
            menuNav.classList.add("slide-in");
        } else if (menuNav.classList.contains("top_nav_mobile_menu")) {
            menuNav.classList.remove("top_nav_mobile_menu");
            menuNav.classList.remove("slide-in");
            menuNav.classList.add("top_nav");
            menuNav.classList.add("slide-out");
        }
    },

    showRemoveMenuOutsideClick: () => {
        let menuNav = document.getElementById("menu_nav");

        if (menuNav.classList.contains("top_nav_mobile_menu")) {
            menuNav.classList.remove("top_nav_mobile_menu");
            menuNav.classList.remove("slide-in");
            menuNav.classList.add("top_nav");
            menuNav.classList.add("slide-out");
        }
    },

    topNav: () => {
        let elements = [
            {
                name: "Home",
                class: "home",
                link: "/",
                selected: null
            },
            {
                name: "Police stations",
                class: "local_taxi",
                link: "/police_stations",
                selected: null
            },
            {
                name: "Register",
                class: "group_add",
                link: "/register",
                selected: null
            },
            {
                name: "Log in",
                class: "account_box",
                link: "/login",
                selected: null
            },
            loginModel.current.username == authModel.username
                && loginModel.current.apiKey == utils.authAPIKey ?
                {
                    name: "Police events",
                    class: "event",
                    link: "/police_events",
                    selected: null
                } : { name: "undefined" }
        ];

        return elements;
    }
};

export default layout;
