"use strict";
import appInsights = require("applicationinsights");
import { QueryUnit } from "../database/QueryUnit";

export class AppInsightsClient {
    public static sendEvent(eventName: string, properties?: { [key: string]: string; }): void {
        if (this._enableTelemetry) {
            this._client.trackEvent({ name: eventName, properties });
        }
    }

    private static _client = new appInsights.TelemetryClient("4346cd63-9ece-44be-9116-44c0e559c4e6");
    private static _enableTelemetry = QueryUnit.getConfiguration().get<boolean>("enableTelemetry");
}
