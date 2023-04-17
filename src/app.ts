import express, { Express } from "express";
import { ChattyServer } from "./setupServer";
import databaseConnection from './setupDatabase';

class Application {
  public initialize(): void {
    databaseConnection();
    const app: Express = express();
    const server: ChattyServer = new ChattyServer(app);
    server.start();
  }
}

const applicaion: Application = new Application();
applicaion.initialize();