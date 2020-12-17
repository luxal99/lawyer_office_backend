import { Body, Controller, HttpService, HttpStatus, Inject, Post, Req, Res } from '@nestjs/common';
import { User } from './user.entity';
import { Request } from 'express';
import { Response } from 'express';
import { UserService } from './user.service';
import bcrypt = require('bcrypt');
import { UserInfo } from '../user-info/user-info.entity';
import * as jwt from 'jsonwebtoken';
import { Constant } from '../constants/const';

@Controller(Constant.USER_ROUTE)
export class UserController {


  @Inject()
  private userService: UserService;

  @Inject()
  private httpService: HttpService;

  @Post()
  async register(@Req() req: Request, @Res() resp: Response) {
    try {

      let userInfo = new UserInfo();
      const response = await this.httpService.axiosRef.post('http://localhost:8080/userInfo', {
        full_name: req.body.id_user_info.full_name,
        email: req.body.id_user_info.email,
      }).catch(() => {
        resp.sendStatus(HttpStatus.BAD_GATEWAY);
      });

      userInfo = response['data'];

      resp.send(await this.userService.save(new User(req.body.username, await bcrypt.hash(req.body.password, 10), userInfo)));

    } catch (e) {
      resp.sendStatus(HttpStatus.BAD_GATEWAY);
    }
  }

  @Post('/auth')
  async auth(@Body() entity: User, @Res() res: Response) {
    try {

      const user = await this.userService.findByUsername(entity.username);

      if (!user) {
        res.status(HttpStatus.NO_CONTENT).send({ message: 'User not exist' });
      } else if (await bcrypt.compare(entity.password, user.password)) {
        const token = jwt.sign({ user: user.username }, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 * 3 });
        res.send({ token: token ,username:user.username});
      } else {
        res.sendStatus(HttpStatus.UNAUTHORIZED);
      }

    } catch {
      res.sendStatus(HttpStatus.BAD_GATEWAY);
    }

  }

}
