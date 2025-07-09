import { Application } from "@hotwired/stimulus";

window.Stimulus = Application.start();

import MessageController from "./controllers/message_controller.js";
Stimulus.register("message", MessageController);
import BurgerController from "./controllers/burger_controller.js";
Stimulus.register("burger", BurgerController);
