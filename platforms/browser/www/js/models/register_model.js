"use strict";

import m from "mithril";

import utils from "./utils";

let registerModel = {
    current: {
        form: []
    },
    save: () => {
        m.request({
            method: "POST",
            url: `${utils.authURL}/register`,
            data: {
                api_key: utils.authAPIKey,
                email: registerModel.current.email,
                password: registerModel.current.password
            }
        }).then(result => {
            // console.log(JSON.stringify(result.data));
            alert(JSON.stringify(result.data.message));
            m.route.set("/");
        });
    }
};

export default registerModel;
