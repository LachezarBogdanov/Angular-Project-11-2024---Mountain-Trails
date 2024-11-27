import { Router } from "express";
import trailRoutes from "./routers/trailRoutes.js";
import authController from "./routers/authController.js";
import catalogRoutes from "./routers/catalogRoutes.js";
// import loginController from "./routers/loginRoutes.js";

const routes = Router();

routes.use('/register', authController);
routes.use('/create', trailRoutes);
routes.use('/catalog', catalogRoutes);
// routes.use('/login', loginController);


export default routes;