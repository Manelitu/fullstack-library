import { Request, Response } from 'express';
const BooksService = require('../services/BooksServices');

const booksService = new BooksService();

class BooksController {
  async listBooks (req: Request, res: Response) {
    const books = await booksService.listBooks();
    return res.send(books);
  }
}

module.exports = BooksController;