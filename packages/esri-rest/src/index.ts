import { request, setDefaultRequestOptions } from "@esri/arcgis-rest-request";
import { ApiKey } from "@esri/arcgis-rest-auth";

// SERVE SOLO PER node.js
import { fetch } from "cross-fetch";

import "isomorphic-form-data";

setDefaultRequestOptions({ fetch });
// --- FINE

export const richiesta = async () => {
  const apiKey =
    "AAPKc34e59de8d1f43808a1b36d73610fb55cRH8m43CUAYbpQgrvZPk73uLXBp2mjeJnWQBi4gzDtL-0Mb7PFvZfQmW5LU7-dBJ";

  const authentication = new ApiKey({
    key: apiKey,
  });

  const path_x =
    "https://services6.arcgis.com/VdOe78ROZ6pyB2c8/arcgis/rest/services/Base96RGB/FeatureServer/query?layerDefs={%220%22:%22OBJECTID%3E0%22}&f=pjson";

  const response = await request(path_x);
  const value = response.layers[0].features;
  return value;
};

// richiesta().then(v => {console.log(v.splice(1,1))})
