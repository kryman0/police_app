"use strict";

import m from "mithril";

import authModel from "./auth";
import utils from "./utils";

let loginModel = {
    current: {
        username: null,
        apiKey: null
    },
    save: () => {
        m.request({
            url: `${utils.authURL}/login`,
            method: "POST",
            data: {
                api_key: utils.authAPIKey,
                email: authModel.username,
                password: authModel.password
            }
        }).then(result => {
            // console.log(result.data);

            loginModel.current.username = result.data.user.email != null
                ? result.data.user.email : null;
            loginModel.current.apiKey = result.data.user.api_key != null
                ? result.data.user.api_key : null;
            authModel.token = result.data.token != null ? result.data.token : null;

            m.route.set("/police_events");
        }).catch(error => {
            alert("Kunde ej logga in: " + error.response.errors.detail);
            // console.log(error.response.errors.detail);
        });
    }
};

export default loginModel;
