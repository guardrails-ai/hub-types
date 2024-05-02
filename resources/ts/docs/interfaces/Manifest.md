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

Manifest.ts:55

___

### description

• **description**: `string`

A description that concisely states the expected behaviour of the validator.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:49

___

### exports

• **exports**: `string`[]

The exports from the validator module; typically at least the validator's class name.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:91

___

### featured

• `Optional` **featured**: `boolean`

Indicates whether this validator is currently featured.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:121

___

### id

• **id**: `string`

The namespaced identifier with which the validator registers.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:37

___

### index

• `Optional` **index**: `string`

The file path, relative to the module directory, to the index file for this validator.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:115

___

### maintainers

• **maintainers**: [`Contributor`](Contributor.md)[]

A list of all contacs for the validator's git repository.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:61

___

### metadata

• `Optional` **metadata**: `object`

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:139

___

### moduleName

• **moduleName**: `string`

The python module name for this validator; typically "validator"

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:85

___

### name

• **name**: `string`

The Title Cased human-readable name for the validator.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:43

___

### namespace

• **namespace**: `string`

The organizational namespace for this validator; the prefix of the id.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:73

___

### packageName

• **packageName**: `string`

The python package name for this validator; typically the same as the repository name and the suffix of the id.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:79

___

### parameters

• `Optional` **parameters**: [`Schema`](Schema.md)[]

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:133

___

### playgroundEnabled

• `Optional` **playgroundEnabled**: `boolean`

Indicates whether this validator can be used in the Guardrails Hub Playground.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:127

___

### postInstall

• `Optional` **postInstall**: `string`

The file path, relative to the module directory, to the post-install script for this validator.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:109

___

### repository

• **repository**: [`Repository`](Repository.md)

The git repository that contains the source code for this validator.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:67

___

### requiredModelAuth

• `Optional` **requiredModelAuth**: [`ModelAuth`](ModelAuth.md)[]

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:145

___

### requiresAuth

• `Optional` **requiresAuth**: `boolean`

Indicates whether the user must be authenticated to install this validator.

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:103

___

### tags

• **tags**: [`Tags`](Tags.md)

**`Memberof`**

Manifest

#### Defined in

Manifest.ts:97
