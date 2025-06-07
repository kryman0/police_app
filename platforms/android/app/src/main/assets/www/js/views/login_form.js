"use strict";

import m from "mithril";

import authModel from "../models/auth";
import loginModel from "../models/login_model";

let loginForm = {
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
                m("h1", "Logga in"),
                m("form", {
                    onsubmit: event => {
                        event.preventDefault();
                        loginModel.save();
                    }
                }, [
                    m("label.input-label", "E-mail"),
                    m("input.input", {
                        type: "email",
                        placeholder: "email@email.com",
                        required: true,
                        oninput: e => authModel.username = e.target.value
                    }),
                    m("label.input-label", "Lösenord"),
                    m("input.input", {
                        type: "password",
                        placeholder: "*******",
                        required: true,
                        oninput: e => authModel.password = e.target.value
                    }),
                    m("input.input.input-button.blue-button", {
                        type: "submit",
                        value: "Logga in"
                    })
                ])
            ])
        ];
    }
};

export default loginForm;
