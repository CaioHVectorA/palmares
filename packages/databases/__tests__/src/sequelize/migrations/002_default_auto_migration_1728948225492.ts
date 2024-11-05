/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

/**
 * Automatically generated by palmares on 2024-10-14T23:23:45.492Z
 */

import { models, actions } from '@palmares/databases';


export default {
  name: '002_default_auto_migration_1728948225492',
  database: 'default',
  dependsOn: 'create_palmares_migration_table',
  operations: [
    new actions.CreateModel(
      "Company",
      {
        id: models.fields.AutoField.new().primaryKey(true).allowNull(true).unique(true).dbIndex(true).databaseName("id").underscored(true).setCustomAttributes({}),
        uuid: models.fields.UuidField.new().primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("uuid").underscored(true).setCustomAttributes({}).allowBlank(false),
        name: models.fields.CharField.new({ maxLen: 255 }).primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("name").underscored(true).setCustomAttributes({}).allowBlank(false),
        address: models.fields.CharField.new({ maxLen: 255 }).primaryKey(false).allowNull(true).unique(false).dbIndex(false).databaseName("address").underscored(true).setCustomAttributes({}).allowBlank(false)
      },
      {
        abstract: false,
        underscored: true,
        tableName: "companies",
        managed: true,
        ordering: [],
        indexes: [],
        databases: ["default"],
        customOptions: {}
      }
    ),
    new actions.CreateModel(
      "ProfileType",
      {
        id: models.fields.AutoField.new().primaryKey(true).allowNull(true).unique(true).dbIndex(true).databaseName("id").underscored(true).setCustomAttributes({}),
        name: models.fields.CharField.new({ maxLen: 255 }).primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("name").underscored(true).setCustomAttributes({}).allowBlank(false)
      },
      {
        abstract: false,
        underscored: true,
        tableName: "profile_type",
        managed: true,
        ordering: [],
        indexes: [],
        databases: ["default"],
        customOptions: {}
      }
    ),
    new actions.CreateModel(
      "User",
      {
        id: models.fields.AutoField.new().primaryKey(true).allowNull(true).unique(true).dbIndex(true).databaseName("id").underscored(true).setCustomAttributes({}),
        uuid: models.fields.UuidField.new().primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("uuid").underscored(true).setCustomAttributes({}).allowBlank(false),
        name: models.fields.CharField.new({ maxLen: 280 }).primaryKey(false).allowNull(true).unique(false).dbIndex(true).databaseName("name").underscored(true).setCustomAttributes({}).allowBlank(false),
        age: models.fields.IntegerField.new().primaryKey(false).allowNull(false).unique(false).dbIndex(true).databaseName("age").underscored(true).setCustomAttributes({}),
        userType: models.fields.EnumField.new({ choices: ["admin", "user"], }).primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("user_type").underscored(true).setCustomAttributes({}),
        price: models.fields.DecimalField.new({ maxDigits: 5, decimalPlaces: 2 }).primaryKey(false).allowNull(true).unique(false).dbIndex(false).databaseName("price").underscored(true).setCustomAttributes({}),
        isActive: models.fields.BooleanField.new().primaryKey(false).default(true).allowNull(false).unique(false).dbIndex(false).databaseName("is_active").underscored(true).setCustomAttributes({}),
        companyId: models.fields.ForeignKeyField.new({relatedTo: "Company", toField: "id", onDelete: models.fields.ON_DELETE.CASCADE, relationName: "company", relatedName: "undefined"}).primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("company_id").underscored(true).setCustomAttributes({}),
        profileTypeId: models.fields.ForeignKeyField.new({relatedTo: "ProfileType", toField: "id", onDelete: models.fields.ON_DELETE.CASCADE, relationName: "profileType", relatedName: "undefined"}).primaryKey(false).default(null).allowNull(true).unique(false).dbIndex(false).databaseName("profile_type_id").underscored(true).setCustomAttributes({}),
        updatedAt: models.fields.DateField.new().primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("updated_at").underscored(true).setCustomAttributes({}).autoNow(true).autoNowAdd(false),
        createdAt: models.fields.DateField.new().primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("created_at").underscored(true).setCustomAttributes({}).autoNow(false).autoNowAdd(true)
      },
      {
        abstract: false,
        underscored: true,
        tableName: "users",
        managed: true,
        ordering: [],
        indexes: [],
        databases: ["default"],
        customOptions: {}
      }
    )
  ]
};