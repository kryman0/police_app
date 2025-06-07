"use strict";

import m from "mithril";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";
import { OpenStreetMapProvider } from "leaflet-geosearch";

// import locationIcon from "../../location.png";

import policeModel from "../models/police";
import position from "../models/position";


var map;

function showMap(policeEventId = null) {
    let policeEvent = policeModel.current.policeEvents.filter(
        element => element.id == policeEventId)[0];

    map = L.map('map').locate({ setView: true });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: `&copy;
        <a href="https://www.openstreetmap.org/copyright">
        OpenStreetMap</a> contributors`
    }).addTo(map);

    var geocoder = new OpenStreetMapProvider();

    geocoder.search({ query: policeEvent.location.gps }).then(function (result) {
        for (var i = 0; i < result.length; i++) {
            L.marker([result[i].y, result[i].x]).addTo(map).bindPopup(result[i].label);
        }
    });
}

function showPosition() {
    if (position.currentPosition.latitude && position.currentPosition.longitude) {
        L.marker(
            [
                position.currentPosition.latitude,
                position.currentPosition.longitude
            ]
        ).addTo(map).bindPopup("Din plats");
    }
}

let mapView = {
    oninit: () => {
        position.getPosition();
    },

    oncreate: function (vnode) {
        policeModel.load(vnode.attrs.id);
        showMap(vnode.attrs.id);
    },

    view: function () {
        showPosition();
        return [
            m("h1", "Karta"),
            m("div#map.map", "")
        ];
    }
};

export default mapView;
