"use strict";

import m from "mithril";

import policeModel from "../models/police";

let policeStations = {
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
                m("h1", "Polisstationer"),
                m("table", {
                    class: "table table-striped table-stacked"
                }, [
                    policeModel.current.policeStations.map(ps => {
                        return [
                            m("tr.police-id", [
                                m("th", "Id"),
                                m("td", ps.id ? ps.id : "-"),
                            ]),
                            m("tr", [
                                m("th", "Namn"),
                                m("td", ps.name ? ps.name : "-")
                            ]),
                            m("tr", [
                                m("th", "URL"),
                                m("td", { class: "police-table url" }, ps.Url ? ps.Url : "-")
                            ]),
                            m("tr", [
                                m("th", { rowspan: 2 }, "Plats/GPS"),
                                m("td", ps.location.name ? ps.location.name : "-")
                            ]),
                            m("tr", [
                                m("td", ps.location.gps ? ps.location.gps : "-")
                            ]),
                            m("tr", [
                                m("th", "Tjänster"),
                                ps.services.map(service => {
                                    return m("td", {
                                        class: "police-table services"
                                    }, service.name ? service.name : "-");
                                })
                            ])
                        ];
                    })
                ])
            ])
        ];
    }
};

export default policeStations;
