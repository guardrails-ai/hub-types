[@guardrails-ai/hub-types](../README.md) / [Exports](../modules.md) / Schema

# Interface: Schema

**`Export`**

Schema

## Table of contents

### Properties

- [$anchor](Schema.md#$anchor)
- [$comment](Schema.md#$comment)
- [$dynamicAnchor](Schema.md#$dynamicanchor)
- [$dynamicRef](Schema.md#$dynamicref)
- [$ref](Schema.md#$ref)
- [$vocabulary](Schema.md#$vocabulary)
- [\_const](Schema.md#_const)
- [\_default](Schema.md#_default)
- [\_else](Schema.md#_else)
- [\_enum](Schema.md#_enum)
- [\_if](Schema.md#_if)
- [additionalProperties](Schema.md#additionalproperties)
- [allOf](Schema.md#allof)
- [anyOf](Schema.md#anyof)
- [contains](Schema.md#contains)
- [contentEncoding](Schema.md#contentencoding)
- [contentMediaType](Schema.md#contentmediatype)
- [contentSchema](Schema.md#contentschema)
- [definitions](Schema.md#definitions)
- [dependencies](Schema.md#dependencies)
- [dependentRequired](Schema.md#dependentrequired)
- [dependentSchemas](Schema.md#dependentschemas)
- [deprecated](Schema.md#deprecated)
- [description](Schema.md#description)
- [examples](Schema.md#examples)
- [exclusiveMaximum](Schema.md#exclusivemaximum)
- [exclusiveMinimum](Schema.md#exclusiveminimum)
- [format](Schema.md#format)
- [items](Schema.md#items)
- [maxContains](Schema.md#maxcontains)
- [maxItems](Schema.md#maxitems)
- [maxLength](Schema.md#maxlength)
- [maxProperties](Schema.md#maxproperties)
- [maximum](Schema.md#maximum)
- [minContains](Schema.md#mincontains)
- [minItems](Schema.md#minitems)
- [minLength](Schema.md#minlength)
- [minProperties](Schema.md#minproperties)
- [minimum](Schema.md#minimum)
- [multipleOf](Schema.md#multipleof)
- [not](Schema.md#not)
- [oneOf](Schema.md#oneof)
- [pattern](Schema.md#pattern)
- [patternProperties](Schema.md#patternproperties)
- [prefixItems](Schema.md#prefixitems)
- [properties](Schema.md#properties)
- [propertyNames](Schema.md#propertynames)
- [readOnly](Schema.md#readonly)
- [required](Schema.md#required)
- [then](Schema.md#then)
- [title](Schema.md#title)
- [type](Schema.md#type)
- [unevaluatedItems](Schema.md#unevaluateditems)
- [unevaluatedProperties](Schema.md#unevaluatedproperties)
- [uniqueItems](Schema.md#uniqueitems)
- [writeOnly](Schema.md#writeonly)

## Properties

### $anchor

• `Optional` **$anchor**: `string`

**`Memberof`**

Schema

#### Defined in

Schema.ts:41

___

### $comment

• `Optional` **$comment**: `string`

**`Memberof`**

Schema

#### Defined in

Schema.ts:71

___

### $dynamicAnchor

• `Optional` **$dynamicAnchor**: `string`

**`Memberof`**

Schema

#### Defined in

Schema.ts:59

___

### $dynamicRef

• `Optional` **$dynamicRef**: `string`

**`Memberof`**

Schema

#### Defined in

Schema.ts:53

___

### $ref

• `Optional` **$ref**: `string`

**`Memberof`**

Schema

#### Defined in

Schema.ts:47

___

### $vocabulary

• `Optional` **$vocabulary**: `Object`

**`Memberof`**

Schema

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

Schema.ts:65

___

### \_const

• `Optional` **\_const**: `any`

**`Memberof`**

Schema

#### Defined in

Schema.ts:281

___

### \_default

• `Optional` **\_default**: `any`

**`Memberof`**

Schema

#### Defined in

Schema.ts:311

___

### \_else

• `Optional` **\_else**: `any`

**`Memberof`**

Schema

#### Defined in

Schema.ts:137

___

### \_enum

• `Optional` **\_enum**: `any`[]

**`Memberof`**

Schema

#### Defined in

Schema.ts:287

___

### \_if

• `Optional` **\_if**: `any`

**`Memberof`**

Schema

#### Defined in

Schema.ts:125

___

### additionalProperties

• `Optional` **additionalProperties**: `any`

**`Memberof`**

Schema

#### Defined in

Schema.ts:95

___

### allOf

• `Optional` **allOf**: `any`[]

**`Memberof`**

Schema

#### Defined in

Schema.ts:143

___

### anyOf

• `Optional` **anyOf**: `any`[]

**`Memberof`**

Schema

#### Defined in

Schema.ts:149

___

### contains

• `Optional` **contains**: `any`

**`Memberof`**

Schema

#### Defined in

Schema.ts:89

___

### contentEncoding

• `Optional` **contentEncoding**: `string`

**`Memberof`**

Schema

#### Defined in

Schema.ts:353

___

### contentMediaType

• `Optional` **contentMediaType**: `string`

**`Memberof`**

Schema

#### Defined in

Schema.ts:347

___

### contentSchema

• `Optional` **contentSchema**: `any`

**`Memberof`**

Schema

#### Defined in

Schema.ts:359

___

### definitions

• `Optional` **definitions**: `Object`

**`Memberof`**

Schema

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

Schema.ts:29

___

### dependencies

• `Optional` **dependencies**: `Object`

**`Memberof`**

Schema

#### Index signature

▪ [key: `string`]: `Set`\<`any`\>

#### Defined in

Schema.ts:35

___

### dependentRequired

• `Optional` **dependentRequired**: `Object`

**`Memberof`**

Schema

#### Index signature

▪ [key: `string`]: `Set`\<`string`\>

#### Defined in

Schema.ts:275

___

### dependentSchemas

• `Optional` **dependentSchemas**: `Object`

**`Memberof`**

Schema

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

Schema.ts:113

___

### deprecated

• `Optional` **deprecated**: `boolean`

**`Memberof`**

Schema

#### Defined in

Schema.ts:317

___

### description

• `Optional` **description**: `string`

**`Memberof`**

Schema

#### Defined in

Schema.ts:305

___

### examples

• `Optional` **examples**: `any`[]

**`Memberof`**

Schema

#### Defined in

Schema.ts:335

___

### exclusiveMaximum

• `Optional` **exclusiveMaximum**: `number`

**`Memberof`**

Schema

#### Defined in

Schema.ts:191

___

### exclusiveMinimum

• `Optional` **exclusiveMinimum**: `number`

**`Memberof`**

Schema

#### Defined in

Schema.ts:203

___

### format

• `Optional` **format**: `string`

**`Memberof`**

Schema

#### Defined in

Schema.ts:341

___

### items

• `Optional` **items**: `any`

**`Memberof`**

Schema

#### Defined in

Schema.ts:83

___

### maxContains

• `Optional` **maxContains**: `number`

**`Memberof`**

Schema

#### Defined in

Schema.ts:245

___

### maxItems

• `Optional` **maxItems**: `number`

**`Memberof`**

Schema

#### Defined in

Schema.ts:227

___

### maxLength

• `Optional` **maxLength**: `number`

**`Memberof`**

Schema

#### Defined in

Schema.ts:209

___

### maxProperties

• `Optional` **maxProperties**: `number`

**`Memberof`**

Schema

#### Defined in

Schema.ts:257

___

### maximum

• `Optional` **maximum**: `number`

**`Memberof`**

Schema

#### Defined in

Schema.ts:185

___

### minContains

• `Optional` **minContains**: `number`

**`Memberof`**

Schema

#### Defined in

Schema.ts:251

___

### minItems

• `Optional` **minItems**: `number`

**`Memberof`**

Schema

#### Defined in

Schema.ts:233

___

### minLength

• `Optional` **minLength**: `number`

**`Memberof`**

Schema

#### Defined in

Schema.ts:215

___

### minProperties

• `Optional` **minProperties**: `number`

**`Memberof`**

Schema

#### Defined in

Schema.ts:263

___

### minimum

• `Optional` **minimum**: `number`

**`Memberof`**

Schema

#### Defined in

Schema.ts:197

___

### multipleOf

• `Optional` **multipleOf**: `number`

**`Memberof`**

Schema

#### Defined in

Schema.ts:179

___

### not

• `Optional` **not**: `any`

**`Memberof`**

Schema

#### Defined in

Schema.ts:161

___

### oneOf

• `Optional` **oneOf**: `any`[]

**`Memberof`**

Schema

#### Defined in

Schema.ts:155

___

### pattern

• `Optional` **pattern**: `string`

**`Memberof`**

Schema

#### Defined in

Schema.ts:221

___

### patternProperties

• `Optional` **patternProperties**: `Object`

**`Memberof`**

Schema

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

Schema.ts:107

___

### prefixItems

• `Optional` **prefixItems**: `any`[]

**`Memberof`**

Schema

#### Defined in

Schema.ts:77

___

### properties

• `Optional` **properties**: `Object`

**`Memberof`**

Schema

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

Schema.ts:101

___

### propertyNames

• `Optional` **propertyNames**: `any`

**`Memberof`**

Schema

#### Defined in

Schema.ts:119

___

### readOnly

• `Optional` **readOnly**: `boolean`

**`Memberof`**

Schema

#### Defined in

Schema.ts:323

___

### required

• `Optional` **required**: `Set`\<`any`\>

**`Memberof`**

Schema

#### Defined in

Schema.ts:269

___

### then

• `Optional` **then**: `any`

**`Memberof`**

Schema

#### Defined in

Schema.ts:131

___

### title

• `Optional` **title**: `string`

**`Memberof`**

Schema

#### Defined in

Schema.ts:299

___

### type

• `Optional` **type**: [`ValidationType`](ValidationType.md)

**`Memberof`**

Schema

#### Defined in

Schema.ts:293

___

### unevaluatedItems

• `Optional` **unevaluatedItems**: `any`

**`Memberof`**

Schema

#### Defined in

Schema.ts:167

___

### unevaluatedProperties

• `Optional` **unevaluatedProperties**: `any`

**`Memberof`**

Schema

#### Defined in

Schema.ts:173

___

### uniqueItems

• `Optional` **uniqueItems**: `boolean`

**`Memberof`**

Schema

#### Defined in

Schema.ts:239

___

### writeOnly

• `Optional` **writeOnly**: `boolean`

**`Memberof`**

Schema

#### Defined in

Schema.ts:329
