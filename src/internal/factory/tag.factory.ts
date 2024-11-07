import { TagGateway } from "../gateway/tag.gateway";
import { CreateTagUseCase } from "../usecases/delete_question";
import { DeleteTagsUseCase } from "../usecases/delete_tag";
import { GetTagsUseCase } from "../usecases/vote_question";
import { UpdateTagUseCase } from "../usecases/update_tag";
import { http } from "../util/http";

export class TagFactory {
  tagGateway = new TagGateway(http);

  createTagUseCase() {
    return new CreateTagUseCase(this.tagGateway);
  }

  getTagsUseCase() {
    return new GetTagsUseCase(this.tagGateway);
  }

  deleteTagUseCase() {
    return new DeleteTagsUseCase(this.tagGateway);
  }

  updateTagUseCase() {
    return new UpdateTagUseCase(this.tagGateway);
  }
}
