import { Router } from "express";
import trailRoutes from "./routers/trailRoutes.js";
import authController from "./routers/authController.js";
import catalogRoutes from "./routers/catalogRoutes.js";
import loginRoutes from "./routers/loginController.js";
import profileController from "./routers/profileRoute.js";
import logoutController from "./routers/logoutController.js";
import detailsRouter from "./routers/detailsController.js";
import editRoutes from "./routers/editRoutes.js";
import deleteController from "./routers/deleteController.js";
import guideRoutes from "./routers/guideRoutes.js";
import getOneGuideController from "./routers/getOneGuideController.js";
import likeController from "./routers/likeController.js";

const routes = Router();

routes.use('/register', authController);
routes.use('/create', trailRoutes);
routes.use('/catalog', catalogRoutes);
routes.use('/login', loginRoutes);
routes.use('/profile', profileController);
routes.use('/logout', logoutController);
routes.use('/details', detailsRouter);
routes.use('/edit', editRoutes);
routes.use('/delete', deleteController);
routes.use('/guides', guideRoutes);
routes.use('/guide', getOneGuideController);
routes.use('/like', likeController);

export default routes;