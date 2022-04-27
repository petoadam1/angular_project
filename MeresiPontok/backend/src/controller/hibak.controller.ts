import { getRepository } from "typeorm";
import { Hiba } from "../entity/Hiba";
import { Controller } from "./base.controller";

export class HibaController extends Controller {
    repository = getRepository(Hiba);
}