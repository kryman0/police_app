"use strict";

import m from "mithril";

import policeModel from "../models/police";

let policeEvents = {
    onbeforeremove: (vnode) => {
        vnode.dom.classList.add("slide-out");
        return new Promise(function (resolve) {
            setTimeout(function () {
                vnode.dom.classList.remove("slide-out");
                resolve();
            }, 0);
        });
    },

    oninit: () => {
        policeModel.load();
    },

    view: () => {
        return [
            m("div.slide-in", [
                m("h1", "Polishändelser"),
                m("table", {
                    class: "table table-striped table-stacked"
                }, [
                    policeModel.current.policeEvents.map(pe => {
                        return [
                            m("tr.police-id", [
                                m("th", "Id"),
                                m("td", pe.id ? pe.id : "-"),
                            ]),
                            m("tr", [
                                m("th", "Tid"),
                                m("td", pe.datetime ? pe.datetime : "-")
                            ]),
                            m("tr", [
                                m("th", "Namn"),
                                m("td", pe.name ? pe.name : "-")
                            ]),
                            m("tr", [
                                m("th", "Händelse"),
                                m("td", pe.summary ? pe.summary : "-")
                            ]),
                            m("tr", [
                                m("th", "URL"),
                                m("td", { class: "police-table url" }, pe.url ? pe.url : "-")
                            ]),
                            m("tr", [
                                m("th", "Kategori"),
                                m("td", pe.type ? pe.type : "-")
                            ]),
                            m("tr", [
                                m("th", { rowspan: 2 }, "Plats/GPS"),
                                m("td", pe.location.name ? pe.location.name : "-")
                            ]),
                            m("tr", {
                                class: "pointer",
                                onclick: () => { m.route.set("/police_events/:id", { id: pe.id }); }
                            }, [
                                m("td", {
                                    class: "police-table gps-link pointer"
                                }, pe.location.gps ? pe.location.gps : "-")
                            ])
                        ];
                    })
                ])
            ])
        ];
    }
};

export default policeEvents;
