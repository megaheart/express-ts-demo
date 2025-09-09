import type { Express } from 'express';
import type { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';

export function logRequest(req: Request, res: Response, next: NextFunction) {
    console.log(`[${new Date().toISOString()}] <${req.method}> ${req.url}: ${JSON.stringify(req.params)}`);
    next();
}

export function configRoutes(app: Express) {
    app.get('/turnOn', (req, res) => {
        const headers:Record<string, string> = {};
        req.rawHeaders.forEach((value, index) => {
            if (index % 2 === 0) {
                headers[value] = req.rawHeaders[index + 1];
            }
        });
        console.log('Headers:', headers);
        res.status(200).send("")
    });

    app.get('/time', (req, res) => {
        res.status(200).send("515665");
    });
}