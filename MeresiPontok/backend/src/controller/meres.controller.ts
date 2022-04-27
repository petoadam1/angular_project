import { getRepository } from "typeorm";
import { Meres } from "../entity/Meres";
import { Controller } from "./base.controller";

export class MeresController extends Controller {
    repository = getRepository(Meres);
}