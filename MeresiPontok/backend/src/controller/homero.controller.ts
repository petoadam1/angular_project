import { getRepository } from "typeorm";
import { Homero } from "../entity/Homero";
import { Controller } from "./base.controller";

export class HomeroController extends Controller {
    repository = getRepository(Homero);
}