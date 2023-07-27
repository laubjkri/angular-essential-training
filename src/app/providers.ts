// This concept removes string literals from elsewhere in the code
import { InjectionToken } from "@angular/core";

export const lookupListToken = new InjectionToken("lookupListToken");
export const lookupLists = {
    mediums: ["Movies", "Series"]
};
