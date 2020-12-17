import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { Response, Request } from 'express';

import * as jwt from 'jsonwebtoken';
import { Constant } from '../constants/const';

@Injectable()
export class JWTMiddle implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.header(Constant.TOKEN_HEADER_NAME);

    if (!token) return res.status(HttpStatus.UNAUTHORIZED).send({ message: Constant.AC_DENIED_MESSAGE });

    try {
      jwt.verify(token, process.env.TOKEN_SECRET);
      next();
    } catch (e) {
      res.status(HttpStatus.UNAUTHORIZED).send({ message: Constant.INVALID_TOKEN_MESSAGE });
    }
  }
}
