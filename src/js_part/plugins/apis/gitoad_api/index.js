import auth from "@/js_part/plugins/apis/gitoad_api/auth";
import repositories from "@/js_part/plugins/apis/gitoad_api/repositories";
import files from "@/js_part/plugins/apis/gitoad_api/files";

export default {
    auth: auth(),
    repos: repositories(),
    files: files()
}