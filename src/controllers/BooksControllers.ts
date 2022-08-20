import { Request, Response } from 'express';
const BooksService = require('../services/BooksServices');

const booksService = new BooksService();

class BooksController {
  async listBooks (req: Request, res: Response) {
    try {
      const books = await booksService.listBooks();
      return res.status(200).send(books);
    } catch (err) {
      return res.status(500).send({ error: err });
    }
  }

  async createBooks (req: Request, res: Response) {
    const {
      title,
      authors,
      description,
      isbn,
      publishing_company,
      languages,
      page_count,
    } = req.body;
    try {
      const books = await booksService.createBooks(
        title,
        authors,
        description,
        isbn,
        publishing_company,
        languages,
        page_count,
      );
      return res.status(200).send(books);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ error: err });
    }
  }
}

module.exports = BooksController;