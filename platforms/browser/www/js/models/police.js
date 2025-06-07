"use strict";

import m from "mithril";

let policeModel = {
    current: {
        policeStations: [],
        policeEvents: [],
        policeEvent: {}
    },

    load: (id = null) => {
        m.request({
            method: "get",
            url: "https://polisen.se/api/policestations"
        }).then((result) => {
            policeModel.current.policeStations = result;
        }).catch(error => {
            console.log("Something went wrong. Couldn't load police stations. " + error.message);
        });

        m.request({
            method: "get",
            url: "https://polisen.se/api/events"
        }).then(result => {
            if (id) {
                policeModel.current.policeEvent = result.filter(ev => ev.id == id)[0];
            } else {
                policeModel.current.policeEvents = result.splice(
                    0, result.length / 2);
            }
        }).catch(error => {
            console.log("Something went wrong. Couldn't load police events. " + error.message);
        });

        // console.log(policeModel.current);
    }
};

export default policeModel;
