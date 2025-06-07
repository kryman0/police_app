"use strict";

import m from "mithril";

let home = {
    view: () => {
        return [
            m("div.police-logo", [
                m("img", {
                    src: "img/logo.png"
                }),
                m("p", "Välkommen till den inte så riktiga Polis sidan.")
            ])
        ];
    }
};

export default home;
