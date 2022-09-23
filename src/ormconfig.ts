import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'uputaskdb.cpmncebdoxef.eu-central-1.rds.amazonaws.com',
  port: 5432,
  username: 'postgres',
  password: 'Kf539u24c5upu',
  database: 'upuTask',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsRun: false,
  logging: false,
  logger: 'file',
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations'
  }
}

export = config;