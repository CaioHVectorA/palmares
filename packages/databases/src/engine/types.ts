import type { DatabaseAdapter } from '.';
import type { AdapterFields as EngineFields } from './fields';
import type {
  AdapterFieldParser,
  AutoField,
  BigAutoField,
  BigIntegerField,
  BooleanField,
  CharField,
  DateField,
  DecimalField,
  EnumField,
  Field,
  ForeignKeyField,
  IntegerField,
  TextField,
  UuidField,
  adapterFieldParser
} from '..';
import type { BaseModel, model } from '../models';

export type EngineInitializedModels<TModel = unknown> = {
  [key: string]: TModel | undefined;
};

export type EngineType = {
  connectionName: string;
  fields: EngineFields;
};

type Test = AdapterFieldParserTranslateArgs<'date', any, AdapterFieldParser, any>;
export type AdapterFieldParserTranslateArgs<
  TFieldType extends
    | 'field'
    | 'auto'
    | 'big-auto'
    | 'big-integer'
    | 'boolean'
    | 'char'
    | 'date'
    | 'decimal'
    | 'enum'
    | 'foreign-key'
    | 'integer'
    | 'text'
    | 'uuid' = 'field',
  TEngine = DatabaseAdapter,
  TFieldParser extends AdapterFieldParser | InstanceType<ReturnType<typeof adapterFieldParser>> = AdapterFieldParser,
  TLazyTranslatedFieldArg = any
> = {
  /**The engine instance. */
  engine: TEngine;
  /**The {@link Field} instance that you need to translate. */
  field: TFieldType extends 'field'
    ?
        | Omit<ReturnType<(typeof Field)['__getArgumentsCallback']>, 'customAttributes'>
        | Omit<ReturnType<(typeof AutoField)['__getArgumentsCallback']>, 'customAttributes'>
        | Omit<ReturnType<(typeof BigAutoField)['__getArgumentsCallback']>, 'customAttributes'>
        | Omit<ReturnType<(typeof BigIntegerField)['__getArgumentsCallback']>, 'customAttributes'>
        | Omit<ReturnType<(typeof BooleanField)['__getArgumentsCallback']>, 'customAttributes'>
        | Omit<ReturnType<(typeof CharField)['__getArgumentsCallback']>, 'customAttributes'>
        | Omit<ReturnType<(typeof DateField)['__getArgumentsCallback']>, 'customAttributes'>
        | Omit<ReturnType<(typeof DecimalField)['__getArgumentsCallback']>, 'customAttributes'>
        | Omit<ReturnType<(typeof EnumField)['__getArgumentsCallback']>, 'customAttributes'>
        | Omit<ReturnType<(typeof ForeignKeyField)['__getArgumentsCallback']>, 'customAttributes'>
        | Omit<ReturnType<(typeof IntegerField)['__getArgumentsCallback']>, 'customAttributes'>
        | Omit<ReturnType<(typeof TextField)['__getArgumentsCallback']>, 'customAttributes'>
        | Omit<ReturnType<(typeof UuidField)['__getArgumentsCallback']>, 'customAttributes'>
    : TFieldType extends 'auto'
      ? Omit<ReturnType<(typeof AutoField)['__getArgumentsCallback']>, 'customAttributes'>
      : TFieldType extends 'big-auto'
        ? Omit<ReturnType<(typeof BigAutoField)['__getArgumentsCallback']>, 'customAttributes'>
        : TFieldType extends 'big-integer'
          ? Omit<ReturnType<(typeof BigIntegerField)['__getArgumentsCallback']>, 'customAttributes'>
          : TFieldType extends 'boolean'
            ? Omit<ReturnType<(typeof BooleanField)['__getArgumentsCallback']>, 'customAttributes'>
            : TFieldType extends 'char'
              ? Omit<ReturnType<(typeof CharField)['__getArgumentsCallback']>, 'customAttributes'>
              : TFieldType extends 'date'
                ? Omit<ReturnType<(typeof DateField)['__getArgumentsCallback']>, 'customAttributes'>
                : TFieldType extends 'decimal'
                  ? Omit<ReturnType<(typeof DecimalField)['__getArgumentsCallback']>, 'customAttributes'>
                  : TFieldType extends 'enum'
                    ? Omit<ReturnType<(typeof EnumField)['__getArgumentsCallback']>, 'customAttributes'>
                    : TFieldType extends 'foreign-key'
                      ? Omit<ReturnType<(typeof ForeignKeyField)['__getArgumentsCallback']>, 'customAttributes'>
                      : TFieldType extends 'integer'
                        ? Omit<ReturnType<(typeof IntegerField)['__getArgumentsCallback']>, 'customAttributes'>
                        : TFieldType extends 'text'
                          ? Omit<ReturnType<(typeof TextField)['__getArgumentsCallback']>, 'customAttributes'>
                          : Omit<ReturnType<(typeof UuidField)['__getArgumentsCallback']>, 'customAttributes'>;
  /** The custom attributes that you can pass to the field. */
  customAttributes: any;
  /** The field parser instance so we can call the `translate` method on other field types. */
  fieldParser: TFieldParser;
  /** The name of the model */
  modelName: string;
  /** The lazy evaluate function that you can call to evaluate something after the model was translated. */
  lazyEvaluate: (translatedField: TLazyTranslatedFieldArg) => void;
};

export type AdapterFieldParserInputAndOutputArgs<
  TFieldType extends
    | 'field'
    | 'auto'
    | 'big-auto'
    | 'big-integer'
    | 'boolean'
    | 'char'
    | 'date'
    | 'decimal'
    | 'enum'
    | 'foreign-key'
    | 'integer'
    | 'text'
    | 'uuid' = 'field',
  TEngine extends DatabaseAdapter = DatabaseAdapter,
  TFieldParser extends AdapterFieldParser = AdapterFieldParser,
  TValue = any
> = {
  /** The engine instance. */
  engine: TEngine;
  /** The field parser instance so we can call the `inputParse` or `outputParse` method on other field types */
  fieldParser: TFieldParser;
  /** The model name. */
  modelName: string;
  /** The Palmares model instance. */
  model: InstanceType<ReturnType<typeof model>>;
  /** The value that it was received from the query so we can parse it. */
  value: TValue;
  /**The Field instance that you need to translate. */
  field: ConstructorParameters<
    TFieldType extends 'field'
      ? typeof Field
      : TFieldType extends 'auto'
        ? typeof AutoField
        : TFieldType extends 'big-auto'
          ? typeof BigAutoField
          : TFieldType extends 'big-integer'
            ? typeof BigIntegerField
            : TFieldType extends 'boolean'
              ? typeof BooleanField
              : TFieldType extends 'char'
                ? typeof CharField
                : TFieldType extends 'date'
                  ? typeof DateField
                  : TFieldType extends 'decimal'
                    ? typeof DecimalField
                    : TFieldType extends 'enum'
                      ? typeof EnumField
                      : TFieldType extends 'foreign-key'
                        ? typeof ForeignKeyField
                        : TFieldType extends 'integer'
                          ? typeof IntegerField
                          : TFieldType extends 'text'
                            ? typeof TextField
                            : typeof UuidField
  >[0];
};
