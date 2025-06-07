"use strict";

import m from "mithril";

import registerModel from "../models/register_model";

let registerForm = {
    onbeforeremove: (vnode) => {
        vnode.dom.classList.add("slide-out");
        return new Promise(function (resolve) {
            setTimeout(function () {
                vnode.dom.classList.remove("slide-out");
                resolve();
            }, 0);
        });
    },

    view: () => {
        return [
            m("div.slide-in", [
                m("h1", "Registrera"),
                m("form", {
                    onsubmit: (event) => {
                        event.preventDefault();
                        registerModel.save();
                    }
                }, [
                    m("label.input-label", "E-mail"),
                    m("input.input", {
                        type: "email",
                        placeholder: "email@email.com",
                        required: true,
                        oninput: e => registerModel.current.email = e.target.value
                    }),
                    m("label.input-label", "Lösenord"),
                    m("input.input", {
                        type: "password",
                        placeholder: "*******",
                        required: true,
                        oninput: e => registerModel.current.password = e.target.value
                    }),
                    m("input.input.input-button.blue-button", {
                        type: "submit", value: "Registrera"
                    })
                ])
            ])
        ];
    }
};

export default registerForm;
