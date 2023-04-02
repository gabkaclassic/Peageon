import auth from "@/plugins/apis/gitoad_api/auth";
import repositories from "@/plugins/apis/gitoad_api/repositories";

export default {
    auth: auth(),
    repos: repositories(),
}