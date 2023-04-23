import auth from "@/js_part/plugins/apis/gitoad_api/auth";
import repositories from "@/js_part/plugins/apis/gitoad_api/repositories";
import files from "@/js_part/plugins/apis/gitoad_api/files";
import commits from "@/js_part/plugins/apis/gitoad_api/commits";

export default {
    auth: auth(),
    repos: repositories(),
    files: files(),
    commits: commits()
}