import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserService } from "src/user/user.service";
import { User } from "src/user/entity/user.entity";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private userService: UserService,
    ) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user: User = request.user;

        /* const response = this.userService.findUser(user.id).then((data) => {
            map((data: User) => {
                const hasRole = () => roles.indexOf(data.role) > -1;
                let hasPermission: boolean = false;

                if(hasRole()) { hasPermission = true }

                return user && hasPermission;
            })
        })   */

    }
}