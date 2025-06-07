"use strict";

import m from "mithril";

import policeModel from "../models/police";

let policeEvent = {
    onbeforeremove: (vnode) => {
        vnode.dom.classList.add("slide-out");
        return new Promise(function (resolve) {
            setTimeout(function () {
                vnode.dom.classList.remove("slide-out");
                resolve();
            }, 0);
        });
    },

    oninit: (vnode) => {
        policeModel.load(vnode.attrs.id);
    },

    view: () => {
        return [
            m("div.slide-in", [
                m("h1", `Händelse id ${policeModel.current.policeEvent.id}.
                ${policeModel.current.policeEvent.name}`
                ),
                m("h4", "Tid: " + policeModel.current.policeEvent.datetime),
                m("h4", "Händelse: " + policeModel.current.policeEvent.summary),
                m("h4", "Kategori: " + policeModel.current.policeEvent.type),
                m("h4", [
                    m("a", {
                        href: policeModel.current.policeEvent.url,
                        target: "_blank"
                    }, "URL: " + policeModel.current.policeEvent.url)
                ])
            ])
        ];
    }
};

export default policeEvent;
