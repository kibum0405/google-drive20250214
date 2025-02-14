import fileYaml from "./file-openapi.yaml";
import YAML from "json2yaml";

let apiSpec = "";

let fileSpec = YAML.stringify(fileYaml);
apiSpec += fileSpec;


export default apiSpec;