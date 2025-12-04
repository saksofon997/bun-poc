import Router from "elysia";

import { Routes } from "@/utils/interfaces";
import { AddFriendDTO, GetFriendDTO, GetFriendsDTO } from "@/dtos/friends.dto";
import FriendsController from "@/controllers/friends.controller";

export default class FriendsRoute implements Routes {
  public path = "/friends";
  public router = new Router();
  public friendsController = new FriendsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}`,
      this.friendsController.addFriend.bind(this.friendsController) as any,
      AddFriendDTO
    );
    this.router.get(
      `${this.path}/:code`,
      this.friendsController.getFriend.bind(this.friendsController) as any,
      GetFriendDTO
    );
    this.router.get(
      `${this.path}`,
      this.friendsController.getFriends.bind(this.friendsController) as any,
      GetFriendsDTO
    );
  }
}
