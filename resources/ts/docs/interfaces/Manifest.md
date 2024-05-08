[@guardrails-ai/hub-types](../README.md) / [Exports](../modules.md) / Manifest

# Interface: Manifest

**`Export`**

Manifest

## Table of contents

### Properties

- [author](Manifest.md#author)
- [description](Manifest.md#description)
- [exports](Manifest.md#exports)
- [featured](Manifest.md#featured)
- [id](Manifest.md#id)
- [index](Manifest.md#index)
- [maintainers](Manifest.md#maintainers)
- [metadata](Manifest.md#metadata)
- [moduleName](Manifest.md#modulename)
- [name](Manifest.md#name)
- [namespace](Manifest.md#namespace)
- [packageName](Manifest.md#packagename)
- [parameters](Manifest.md#parameters)
- [playgroundEnabled](Manifest.md#playgroundenabled)
- [postInstall](Manifest.md#postinstall)
- [repository](Manifest.md#repository)
- [requiredModelAuth](Manifest.md#requiredmodelauth)
- [requiresAuth](Manifest.md#requiresauth)
- [tags](Manifest.md#tags)

## Properties

### author

• **author**: [`Contributor`](Contributor.md)

The primary contact for the validator's git repository.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:58

___

### description

• **description**: `string`

A description that concisely states the expected behaviour of the validator.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:52

___

### exports

• **exports**: `string`[]

The exports from the validator module; typically at least the validator's class name.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:94

___

### featured

• `Optional` **featured**: `boolean`

Indicates whether this validator is currently featured.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:124

___

### id

• **id**: `string`

The namespaced identifier with which the validator registers.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:40

___

### index

• `Optional` **index**: `string`

The file path, relative to the module directory, to the index file for this validator.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:118

___

### maintainers

• **maintainers**: [`Contributor`](Contributor.md)[]

A list of all contacs for the validator's git repository.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:64

___

### metadata

• `Optional` **metadata**: `Object`

**`Memberof`**

Manifest

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

Manifest.ts:142

___

### moduleName

• **moduleName**: `string`

The python module name for this validator; typically "validator"

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:88

___

### name

• **name**: `string`

The Title Cased human-readable name for the validator.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:46

___

### namespace

• **namespace**: `string`

The organizational namespace for this validator; the prefix of the id.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:76

___

### packageName

• **packageName**: `string`

The python package name for this validator; typically the same as the repository name and the suffix of the id.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:82

___

### parameters

• `Optional` **parameters**: [`ManifestParameters`](ManifestParameters.md)

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:136

___

### playgroundEnabled

• `Optional` **playgroundEnabled**: `boolean`

Indicates whether this validator can be used in the Guardrails Hub Playground.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:130

___

### postInstall

• `Optional` **postInstall**: `string`

The file path, relative to the module directory, to the post-install script for this validator.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:112

___

### repository

• **repository**: [`Repository`](Repository.md)

The git repository that contains the source code for this validator.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:70

___

### requiredModelAuth

• `Optional` **requiredModelAuth**: [`ModelAuth`](ModelAuth.md)[]

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:148

___

### requiresAuth

• `Optional` **requiresAuth**: `boolean`

Indicates whether the user must be authenticated to install this validator.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:106

___

### tags

• `Optional` **tags**: [`Tags`](Tags.md)

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:100
