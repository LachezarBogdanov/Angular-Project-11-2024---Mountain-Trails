import { Router } from "express";
import catalogService from "../services/catalogService.js";


const catalogRoutes = Router();

catalogRoutes.get('/', async (req, res) => {
    const allTrails = await catalogService.getTrails();

    res.status(200).json(allTrails);
});

export default catalogRoutes;