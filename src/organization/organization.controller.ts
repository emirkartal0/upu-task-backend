import { Body, Controller, Post } from '@nestjs/common';
import { DefaultOrganizationDto } from './dto/defaultOrganization.dto';
import { OrganizationService } from './organization.service';

@Controller('organization')
export class OrganizationController {

    constructor(
        private readonly organizationService: OrganizationService,
    ) { }

        @Post('create')
        async createOrganization(@Body() data: DefaultOrganizationDto) {
            return await this.organizationService.createDefaultOrganization(data);
        }

}
